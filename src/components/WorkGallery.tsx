"use client";

import { useRef } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { caseStudyList } from "@/data/case-studies";

export default function WorkGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

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
    </section>
  );
}
