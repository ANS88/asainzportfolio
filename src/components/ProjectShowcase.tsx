"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { caseStudyList } from "@/data/case-studies";
import type { CaseStudy } from "@/types/case-study";

const transformLabels: Record<string, { from: string; to: string }> = {
  "natera-clinical-review": { from: "Fragmented", to: "Unified" },
  "unified-patient-portal": { from: "Invisible", to: "Empowered" },
  "histopathology-workflow": { from: "Hands-on", to: "Hands-off" },
  "identity-portal": { from: "Scattered", to: "Connected" },
  "perimenopause-tracking": { from: "Measured", to: "Understood" },
  "ai-design-practice": { from: "Manual", to: "Augmented" },
};

interface CardLayout {
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  rot: number;
}

const layouts: CardLayout[] = [
  { x: 40,   y: 30,   w: 440, h: 320, z: 6, rot: -1.2 },
  { x: 520,  y: 60,   w: 400, h: 280, z: 5, rot: 1.5  },
  { x: 960,  y: 20,   w: 420, h: 300, z: 4, rot: -0.8 },
  { x: 100,  y: 390,  w: 380, h: 270, z: 3, rot: 1.0  },
  { x: 540,  y: 370,  w: 440, h: 320, z: 2, rot: -1.8 },
  { x: 1020, y: 360,  w: 380, h: 270, z: 1, rot: 0.6  },
];

const CANVAS_W = 1460;
const CANVAS_H = 700;

function CanvasCard({
  study,
  layout,
  dragging,
}: {
  study: CaseStudy;
  layout: CardLayout;
  dragging: boolean;
}) {
  const labels = transformLabels[study.slug];
  const isLocalVideo = study.previewVideo?.startsWith("/");

  return (
    <a
      href={`/work/${study.slug}`}
      className={`cv-card${dragging ? " cv-card--dragging" : ""}`}
      style={{
        left: layout.x,
        top: layout.y,
        width: layout.w,
        height: layout.h,
        zIndex: layout.z,
        transform: `rotate(${layout.rot}deg)`,
      }}
      onClick={(e) => {
        if (dragging) e.preventDefault();
      }}
    >
      <div className="cv-card-visual">
        {isLocalVideo ? (
          <video
            src={study.previewVideo}
            muted
            loop
            playsInline
            autoPlay
            className="cv-card-media"
          />
        ) : study.previewImage ? (
          <img
            src={study.previewImage}
            alt={study.title}
            loading="lazy"
            className="cv-card-media"
          />
        ) : (
          <div className="cv-card-blank" />
        )}
      </div>
      <div className="cv-card-info">
        <h3 className="cv-card-title">{study.title}</h3>
        <div className="cv-card-row">
          <span className="cv-card-meta">{study.company}</span>
          {labels && (
            <span className="cv-card-transform">
              {labels.from} &rarr; {labels.to}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

export default function ProjectShowcase() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const offsetStart = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);
  const velocity = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number>(0);

  const clampOffset = useCallback(
    (ox: number, oy: number) => {
      const vp = viewportRef.current;
      if (!vp) return { x: ox, y: oy };
      const vw = vp.clientWidth;
      const vh = vp.clientHeight;
      return {
        x: Math.max(-(CANVAS_W - vw), Math.min(0, ox)),
        y: Math.max(-(CANVAS_H - vh), Math.min(0, oy)),
      };
    },
    []
  );

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const vw = vp.clientWidth;
    const vh = vp.clientHeight;
    setOffset({
      x: Math.max(-(CANVAS_W - vw) / 2, -(CANVAS_W - vw)),
      y: Math.max(-(CANVAS_H - vh) / 2, -(CANVAS_H - vh)),
    });
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if ((e.target as HTMLElement).closest("a")) {
        // allow link clicks — we'll cancel if drag distance exceeds threshold
      }
      setIsDragging(true);
      hasMoved.current = false;
      dragStart.current = { x: e.clientX, y: e.clientY };
      offsetStart.current = { ...offset };
      lastPos.current = { x: e.clientX, y: e.clientY };
      velocity.current = { x: 0, y: 0 };
      cancelAnimationFrame(animFrame.current);
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    },
    [offset]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) hasMoved.current = true;

      velocity.current = {
        x: e.clientX - lastPos.current.x,
        y: e.clientY - lastPos.current.y,
      };
      lastPos.current = { x: e.clientX, y: e.clientY };

      setOffset(
        clampOffset(offsetStart.current.x + dx, offsetStart.current.y + dy)
      );
    },
    [isDragging, clampOffset]
  );

  const coast = useCallback(() => {
    velocity.current.x *= 0.92;
    velocity.current.y *= 0.92;
    if (
      Math.abs(velocity.current.x) < 0.3 &&
      Math.abs(velocity.current.y) < 0.3
    )
      return;
    setOffset((prev) =>
      clampOffset(prev.x + velocity.current.x, prev.y + velocity.current.y)
    );
    animFrame.current = requestAnimationFrame(coast);
  }, [clampOffset]);

  const onPointerUp = useCallback(() => {
    setIsDragging(false);
    if (hasMoved.current) {
      animFrame.current = requestAnimationFrame(coast);
    }
    setTimeout(() => {
      hasMoved.current = false;
    }, 50);
  }, [coast]);

  // touch support
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const prevent = (e: TouchEvent) => {
      if (e.touches.length === 1) e.preventDefault();
    };
    vp.addEventListener("touchmove", prevent, { passive: false });
    return () => vp.removeEventListener("touchmove", prevent);
  }, []);

  return (
    <section className="cv-section">
      <p className="section-subtitle">
        I do my best work amid ambiguity and entangled systems, in pursuit of
        clarity.
      </p>

      <div className="cv-hint">Drag to explore</div>

      <div
        ref={viewportRef}
        className={`cv-viewport${isDragging ? " cv-viewport--dragging" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="cv-canvas"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        >
          {caseStudyList.map((study, i) => (
            <CanvasCard
              key={study.slug}
              study={study}
              layout={layouts[i % layouts.length]}
              dragging={hasMoved.current && isDragging}
            />
          ))}
        </div>
      </div>

      <div className="cv-footer">
        <a href="/work" className="view-all-link">
          All work &rarr;
        </a>
      </div>
    </section>
  );
}
