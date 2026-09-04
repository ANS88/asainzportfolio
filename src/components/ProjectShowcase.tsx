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
  "lab-operations-leadership": { from: "Zero", to: "Embedded" },
  "clinical-trial-screening": { from: "Tedious", to: "Targeted" },
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
      className="sc-card"
    >
      <div className="sc-visual">
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
        </div>

        <span className="sc-cta">View project &rarr;</span>
      </div>
    </a>
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

      <div className="sc-grid">
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
