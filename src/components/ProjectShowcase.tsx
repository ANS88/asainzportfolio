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

const order = [
  "unified-patient-portal",
  "natera-clinical-review",
  "clinical-trial-screening",
  "identity-portal",
  "perimenopause-tracking",
  "ai-design-practice",
  "lab-operations-leadership",
  "histopathology-workflow",
];

const studyMap = Object.fromEntries(caseStudyList.map((s) => [s.slug, s]));

function WorkCard({
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
    <a href={`/work/${study.slug}`} className="work-card">
      <div className="work-card-media">
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
            className="work-card-img"
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
            alt=""
            loading="lazy"
            className="work-card-img"
            style={study.previewCrop ? {
              objectPosition: study.previewCrop.position || "center",
              ...study.previewCrop.scale ? { '--crop-scale': study.previewCrop.scale } as React.CSSProperties : {},
            } : undefined}
          />
        ) : null}
      </div>

      <div className="work-card-body">
        <h3 className="work-card-title">{study.title}</h3>
        <div className="work-card-meta">
          <span>{study.company}</span>
          {labels && (
            <span className="work-card-transform">
              {labels.from} <span aria-hidden="true">&rarr;</span> {labels.to}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

export default function ProjectShowcase() {
  return (
    <section className="work-showcase">
      <div className="work-grid">
        {order.map((slug) => {
          const study = studyMap[slug];
          if (!study) return null;
          return <WorkCard key={slug} study={study} />;
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
