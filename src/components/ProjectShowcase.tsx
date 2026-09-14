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
  "lab-operations-leadership": { from: "Zero", to: "Embedded" },
  "clinical-trial-screening": { from: "Tedious", to: "Targeted" },
};

function getSlideStyle(offset: number) {
  if (offset === 0) {
    return {
      transform: "rotate(-1.5deg) scale(1)",
      opacity: 1,
      zIndex: 10,
    };
  }

  const dir = offset > 0 ? 1 : -1;
  const abs = Math.abs(offset);
  const rotate = dir * (abs === 1 ? 3 : 5);
  const scale = Math.max(0.65, 1 - abs * 0.12);
  const opacity = Math.max(0.25, 1 - abs * 0.3);

  return {
    transform: `rotate(${rotate}deg) scale(${scale})`,
    opacity,
    zIndex: 10 - abs,
  };
}

function GalleryCard({ study, active }: { study: CaseStudy; active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const labels = transformLabels[study.slug];

  const isLocalVideo =
    study.previewVideo && study.previewVideo.startsWith("/");
  const isEmbed =
    study.previewVideo && !study.previewVideo.startsWith("/");

  useEffect(() => {
    if (!videoRef.current) return;
    if (active) videoRef.current.play().catch(() => {});
    else videoRef.current.pause();
  }, [active]);

  return (
    <a
      ref={cardRef}
      href={`/work/${study.slug}`}
      className="gallery-card"
    >
      <div className="gallery-media-wrap">
        {study.previewVideos && study.previewVideos.length > 0 ? (
          <div className="sc-video-row">
            {study.previewVideos.map((src, i) => (
              <iframe
                key={i}
                src={src}
                allow="autoplay; encrypted-media"
                tabIndex={-1}
                loading="lazy"
                className="sc-iframe"
              />
            ))}
          </div>
        ) : isLocalVideo ? (
          <video
            ref={videoRef}
            src={study.previewVideo}
            muted
            loop
            playsInline
            className="gallery-media"
          />
        ) : isEmbed ? (
          <iframe
            src={study.previewVideo}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            loading="lazy"
            className="sc-iframe"
          />
        ) : study.previewImage ? (
          <img
            src={study.previewImage}
            alt={study.title}
            loading="lazy"
            className="gallery-media"
          />
        ) : null}
      </div>

      <div className="gallery-overlay" />
      <div className="gallery-label">
        <span className="gallery-meta">
          {study.company} &middot; {study.timeline}
        </span>
        <h3 className="gallery-title">{study.title}</h3>
        {labels && (
          <div className="gallery-transform">
            <span className="gallery-from">{labels.from}</span>
            <span className="gallery-arr">&rarr;</span>
            <span className="gallery-to">{labels.to}</span>
          </div>
        )}
      </div>
    </a>
  );
}

export default function ProjectShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const total = caseStudyList.length;

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const card = track.children[index] as HTMLElement | undefined;
      if (!card) return;
      const trackRect = track.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const offset =
        cardRect.left - trackRect.left + track.scrollLeft - (trackRect.width - cardRect.width) / 2;
      track.scrollTo({ left: offset, behavior: "smooth" });
    },
    []
  );

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex, scrollToIndex]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(advance, 4000);
    return () => clearInterval(timerRef.current);
  }, [paused, advance]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setPaused(true);
    setTimeout(() => setPaused(false), 8000);
  };

  return (
    <section
      className="gallery-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="section-subtitle">
        I do my best work amid ambiguity and entangled systems, in pursuit of
        clarity.
      </p>

      <div className="gallery-wrapper">
        <div className="gallery-track" ref={trackRef}>
          {caseStudyList.map((study, i) => {
            const offset = i - activeIndex;
            const style = getSlideStyle(offset);
            return (
              <div
                key={study.slug}
                className={`gallery-slide${i === activeIndex ? " gallery-slide-active" : ""}`}
                style={{
                  transform: style.transform,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                }}
                onClick={() => goTo(i)}
              >
                <GalleryCard study={study} active={i === activeIndex} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="sc-footer">
        <a href="/work" className="view-all-link">
          All work &rarr;
        </a>
      </div>
    </section>
  );
}
