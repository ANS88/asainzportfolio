"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { caseStudyList } from "@/data/case-studies";
import type { CaseStudy } from "@/types/case-study";

interface CardLayout {
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  rot: number;
}

// Art gallery: mixed sizes — tall portraits, wide landscapes, small squares
const layouts: CardLayout[] = [
  { x: 60,   y: 40,   w: 260, h: 340, z: 6, rot: -2.5 },   // tall portrait
  { x: 380,  y: 100,  w: 320, h: 180, z: 5, rot: 1.2  },   // wide landscape
  { x: 760,  y: 30,   w: 180, h: 180, z: 4, rot: -1.0 },   // small square
  { x: 1000, y: 60,   w: 280, h: 360, z: 3, rot: 2.0  },   // tall portrait
  { x: 160,  y: 440,  w: 340, h: 200, z: 2, rot: -1.5 },   // wide landscape
  { x: 580,  y: 400,  w: 200, h: 260, z: 1, rot: 1.8  },   // medium portrait
  { x: 850,  y: 460,  w: 280, h: 160, z: 7, rot: -0.5 },   // wide small
  { x: 1180, y: 420,  w: 160, h: 210, z: 8, rot: 2.5  },   // small portrait
];

const CANVAS_W = 1420;
const CANVAS_H = 720;

function CanvasCard({
  study,
  layout,
  dragging,
}: {
  study: CaseStudy;
  layout: CardLayout;
  dragging: boolean;
}) {
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
      <div className="cv-card-label">
        <span className="cv-card-title">{study.title}</span>
        <span className="cv-card-meta">{study.company}</span>
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
    setOffset(clampOffset(-(CANVAS_W - vw) / 2, -(CANVAS_H - vh) / 2));
  }, [clampOffset]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
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
