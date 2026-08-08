"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { caseStudyList } from "@/data/case-studies";
import type { CaseStudy } from "@/types/case-study";

export default function WorkGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<CaseStudy | null>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [phase, setPhase] = useState<"idle" | "measure" | "animate">("idle");
  const overlayRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  const handleCardClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, study: CaseStudy) => {
      e.preventDefault();
      const card = e.currentTarget;
      const r = card.getBoundingClientRect();
      setRect(r);
      setExpanded(study);
      setPhase("measure");
    },
    []
  );

  useEffect(() => {
    if (phase === "measure") {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPhase("animate"));
      });
    }
  }, [phase]);

  const handleClose = useCallback(() => {
    setPhase("idle");
    setTimeout(() => {
      setExpanded(null);
      setRect(null);
    }, 400);
  }, []);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [expanded, handleClose]);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [expanded]);

  const isOpen = phase === "animate";

  return (
    <section className="work-gallery">
      <AnimateOnScroll animation="fade-up">
        <div className="work-gallery-header">
          <h2 className="work-gallery-title">Work</h2>
          <div className="work-gallery-nav">
            <button
              onClick={() => scroll(-1)}
              className="work-gallery-arrow"
              aria-label="Scroll left"
            >
              &larr;
            </button>
            <button
              onClick={() => scroll(1)}
              className="work-gallery-arrow"
              aria-label="Scroll right"
            >
              &rarr;
            </button>
          </div>
        </div>
      </AnimateOnScroll>

      <div className="work-gallery-track" ref={trackRef}>
        {caseStudyList.map((study) => (
          <a
            key={study.slug}
            href={`/work/${study.slug}`}
            className="work-gallery-card"
            onClick={(e) => handleCardClick(e, study)}
          >
            {study.previewImage && (
              <div className="work-gallery-thumb">
                <img src={study.previewImage} alt="" loading="lazy" />
              </div>
            )}
            <div className="work-gallery-card-body">
              <span className="work-gallery-meta">
                {study.company} &middot; {study.timeline}
              </span>
              <h3 className="work-gallery-card-title">
                {study.shortTitle || study.title}
              </h3>
              {study.judgment && (
                <p className="work-gallery-judgment">{study.judgment}</p>
              )}
              <div className="work-gallery-metric">
                <span className="work-gallery-metric-value">
                  {study.impact[0].value}
                </span>
                <span className="work-gallery-metric-label">
                  {study.impact[0].metric}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <AnimateOnScroll animation="fade-up">
        <div style={{ marginTop: "1.5rem" }}>
          <a href="/work" className="view-all-link">All work &rarr;</a>
        </div>
      </AnimateOnScroll>

      {/* Blow-out overlay */}
      {expanded && rect && (
        <div
          className={`blowout-backdrop${isOpen ? " blowout-backdrop--open" : ""}`}
          onClick={handleClose}
        >
          <div
            ref={overlayRef}
            className={`blowout-panel${isOpen ? " blowout-panel--open" : ""}`}
            style={
              !isOpen
                ? {
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height,
                  }
                : undefined
            }
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="blowout-close"
              onClick={handleClose}
              aria-label="Close"
            >
              &times;
            </button>

            {expanded.previewImage && (
              <div className="blowout-hero">
                <img
                  src={expanded.previewImage}
                  alt={expanded.title}
                />
              </div>
            )}

            <div className="blowout-body">
              <span className="blowout-meta">
                {expanded.company} &middot; {expanded.timeline} &middot;{" "}
                {expanded.role}
              </span>
              <h2 className="blowout-title">{expanded.title}</h2>
              <p className="blowout-stakes">{expanded.stakesLine}</p>

              <div className="blowout-metrics">
                {expanded.impact.map((m, i) => (
                  <div key={i} className="blowout-metric-item">
                    <span className="blowout-metric-value">{m.value}</span>
                    <span className="blowout-metric-label">{m.metric}</span>
                  </div>
                ))}
              </div>

              {expanded.tags && expanded.tags.length > 0 && (
                <div className="blowout-tags">
                  {expanded.tags.map((tag) => (
                    <span key={tag} className="blowout-tag">{tag}</span>
                  ))}
                </div>
              )}

              <a
                href={`/work/${expanded.slug}`}
                className="blowout-cta"
              >
                Read case study &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
