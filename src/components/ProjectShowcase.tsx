"use client";

import { useRef, useEffect, useState } from "react";
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

function ProjectCard({
  study,
  index,
  total,
}: {
  study: CaseStudy;
  index: number;
  total: number;
}) {
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
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (visible) videoRef.current.play().catch(() => {});
    else videoRef.current.pause();
  }, [visible]);

  const stickyTop = 80 + index * 12;

  return (
    <div
      className="sc-card-wrap"
      style={{ zIndex: index + 1 }}
    >
      <a
        ref={cardRef}
        href={`/work/${study.slug}`}
        className="sc-card"
        style={{ top: `${stickyTop}px` }}
      >
        <div className="sc-visual">
          {isLocalVideo ? (
            <video
              ref={videoRef}
              src={study.previewVideo}
              muted
              loop
              playsInline
              className="sc-media"
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
              className="sc-media"
            />
          ) : null}
          <div className="sc-visual-overlay" />
        </div>

        <div className="sc-content">
          <div className="sc-content-inner">
            <span className="sc-index">
              {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
            </span>

            <div className="sc-text">
              <span className="sc-meta">
                {study.company} &middot; {study.timeline}
              </span>
              <h3 className="sc-title">{study.title}</h3>
              {labels && (
                <div className="sc-transform">
                  <span className="sc-from">{labels.from}</span>
                  <span className="sc-arr">&rarr;</span>
                  <span className="sc-to">{labels.to}</span>
                </div>
              )}
              {study.judgment && (
                <p className="sc-judgment">{study.judgment}</p>
              )}
            </div>

            <div className="sc-stats">
              {study.impact.slice(0, 3).map((m, i) => (
                <div key={i} className="sc-stat">
                  <span className="sc-stat-val">{m.value}</span>
                  <span className="sc-stat-lbl">{m.metric}</span>
                </div>
              ))}
            </div>
          </div>

          <span className="sc-cta">View project &rarr;</span>
        </div>
      </a>
    </div>
  );
}

export default function ProjectShowcase() {
  const total = caseStudyList.length;

  return (
    <section className="sc-section">
      <p className="section-subtitle">
        I do my best work amid ambiguity and entangled systems, in pursuit of
        clarity.
      </p>

      <div className="sc-stack">
        {caseStudyList.map((study, i) => (
          <ProjectCard
            key={study.slug}
            study={study}
            index={i}
            total={total}
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
