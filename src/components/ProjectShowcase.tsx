"use client";

import { useRef, useEffect, useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
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

function ProjectVisual({ study }: { study: CaseStudy }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (inView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [inView]);

  const isLocalVideo =
    study.previewVideo && study.previewVideo.startsWith("/");
  const isEmbed =
    study.previewVideo && !study.previewVideo.startsWith("/");

  return (
    <div ref={containerRef} className="showcase-visual">
      {isLocalVideo ? (
        <video
          ref={videoRef}
          src={study.previewVideo}
          muted
          loop
          playsInline
          className="showcase-video"
        />
      ) : isEmbed ? (
        <div className="showcase-embed-wrap">
          <iframe
            src={study.previewVideo}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : study.previewImage ? (
        <img
          src={study.previewImage}
          alt={study.title}
          loading="lazy"
          className="showcase-image"
        />
      ) : null}
    </div>
  );
}

export default function ProjectShowcase() {
  return (
    <section className="showcase">
      <AnimateOnScroll animation="fade-up">
        <p className="section-subtitle">
          I do my best work amid ambiguity and entangled systems, in pursuit of
          clarity.
        </p>
      </AnimateOnScroll>

      <div className="showcase-list">
        {caseStudyList.map((study, idx) => {
          const labels = transformLabels[study.slug];
          return (
            <AnimateOnScroll key={study.slug} animation="fade-up">
              <a href={`/work/${study.slug}`} className="showcase-card">
                <ProjectVisual study={study} />
                <div className="showcase-info">
                  <span className="showcase-meta">
                    {study.company} &middot; {study.timeline}
                  </span>
                  <h3 className="showcase-title">{study.title}</h3>
                  {labels && (
                    <div className="showcase-transform">
                      <span className="showcase-from">{labels.from}</span>
                      <span className="showcase-arrow">&rarr;</span>
                      <span className="showcase-to">{labels.to}</span>
                    </div>
                  )}
                  {study.judgment && (
                    <p className="showcase-judgment">{study.judgment}</p>
                  )}
                  <div className="showcase-metrics">
                    {study.impact.slice(0, 3).map((m, i) => (
                      <div key={i} className="showcase-metric">
                        <span className="showcase-metric-val">{m.value}</span>
                        <span className="showcase-metric-lbl">{m.metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            </AnimateOnScroll>
          );
        })}
      </div>

      <AnimateOnScroll animation="fade-up">
        <div style={{ marginTop: "2rem" }}>
          <a href="/work" className="view-all-link">
            All work &rarr;
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
