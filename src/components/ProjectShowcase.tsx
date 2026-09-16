"use client";

import { useRef, useEffect } from "react";
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

interface GridSlot {
  slug: string;
  gridArea: string;
}

const gridSlots: GridSlot[] = [
  { slug: "clinical-trial-screening", gridArea: "a" },
  { slug: "unified-patient-portal", gridArea: "b" },
  { slug: "histopathology-workflow", gridArea: "c" },
  { slug: "identity-portal", gridArea: "d" },
  { slug: "perimenopause-tracking", gridArea: "e" },
  { slug: "ai-design-practice", gridArea: "f" },
  { slug: "lab-operations-leadership", gridArea: "g" },
  { slug: "natera-clinical-review", gridArea: "h" },
];

const studyMap = Object.fromEntries(caseStudyList.map((s) => [s.slug, s]));

function CollageCard({
  study,
}: {
  study: CaseStudy;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const labels = transformLabels[study.slug];

  const isLocalVideo =
    study.previewVideo && study.previewVideo.startsWith("/");
  const isEmbed =
    study.previewVideo && !study.previewVideo.startsWith("/");

  useEffect(() => {
    if (!videoRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) videoRef.current?.play().catch(() => {});
        else videoRef.current?.pause();
      },
      { threshold: 0.3 }
    );
    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={`/work/${study.slug}`}
      className="collage-card"
    >
      <div className="collage-media-wrap">
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
            className="collage-media"
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
            className="collage-media"
          />
        ) : null}
      </div>

      <div className="collage-overlay" />
      <div className="collage-label">
        <span className="collage-meta">
          {study.company} &middot; {study.timeline}
        </span>
        <h3 className="collage-title">{study.title}</h3>
        {labels && (
          <div className="collage-transform">
            <span className="collage-from">{labels.from}</span>
            <span className="collage-arr">&rarr;</span>
            <span className="collage-to">{labels.to}</span>
          </div>
        )}
      </div>
    </a>
  );
}

export default function ProjectShowcase() {
  return (
    <section className="collage-section">
      <p className="section-subtitle">
        I do my best work amid ambiguity and entangled systems, in pursuit of
        clarity.
      </p>

      <div className="collage-grid">
        {gridSlots.map((slot) => {
          const study = studyMap[slot.slug];
          if (!study) return null;
          return (
            <div
              key={slot.slug}
              className="collage-cell"
              data-slug={slot.slug}
              style={{ gridArea: slot.gridArea }}
            >
              <CollageCard study={study} />
            </div>
          );
        })}
      </div>

      <div className="sc-footer">
        <a href="/work" className="view-all-link">
          All work &rarr;
        </a>
      </div>
    </section>
  );
}
