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

function CarouselCard({ study }: { study: CaseStudy }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  const labels = transformLabels[study.slug];

  const isLocalVideo =
    study.previewVideo && study.previewVideo.startsWith("/");
  const isEmbed =
    study.previewVideo && !study.previewVideo.startsWith("/");

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (visible) videoRef.current.play().catch(() => {});
    else videoRef.current.pause();
  }, [visible]);

  return (
    <a
      ref={cardRef}
      href={`/work/${study.slug}`}
      className="carousel-card"
    >
      <div className="carousel-visual">
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
            className="carousel-media"
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
            className="carousel-media"
          />
        ) : null}
        <div className="carousel-visual-overlay" />
      </div>

      <div className="carousel-content">
        <span className="carousel-meta">
          {study.company} &middot; {study.timeline}
        </span>
        <h3 className="carousel-title">{study.title}</h3>
        {labels && (
          <div className="carousel-transform">
            <span className="carousel-from">{labels.from}</span>
            <span className="carousel-arr">&rarr;</span>
            <span className="carousel-to">{labels.to}</span>
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
    setActiveIndex((prev) => {
      const next = (prev + 1) % total;
      return next;
    });
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

  const prev = () => goTo((activeIndex - 1 + total) % total);
  const next = () => goTo((activeIndex + 1) % total);

  return (
    <section
      className="carousel-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="section-subtitle">
        I do my best work amid ambiguity and entangled systems, in pursuit of
        clarity.
      </p>

      <div className="carousel-wrapper">
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={prev}
          aria-label="Previous project"
        >
          &larr;
        </button>

        <div className="carousel-track" ref={trackRef}>
          {caseStudyList.map((study, i) => (
            <div
              key={study.slug}
              className={`carousel-slide${i === activeIndex ? " carousel-slide-active" : ""}`}
              onClick={() => goTo(i)}
            >
              <CarouselCard study={study} />
            </div>
          ))}
        </div>

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={next}
          aria-label="Next project"
        >
          &rarr;
        </button>
      </div>

      <div className="carousel-dots">
        {caseStudyList.map((study, i) => (
          <button
            key={study.slug}
            className={`carousel-dot${i === activeIndex ? " carousel-dot-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${study.title}`}
          />
        ))}
      </div>

      <div className="sc-footer">
        <a href="/work" className="view-all-link">
          All work &rarr;
        </a>
      </div>
    </section>
  );
}
