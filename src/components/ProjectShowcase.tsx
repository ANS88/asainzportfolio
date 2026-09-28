"use client";

import { useRef, useEffect } from "react";
import { caseStudyList } from "@/data/case-studies";
import type { CaseStudy } from "@/types/case-study";

type Mode = "shot" | "flat" | "cover";

interface Preview {
  slug: string;
  stage: "light" | "dark";
  mode: Mode;
  src?: string;
}

const previews: Preview[] = [
  { slug: "unified-patient-portal", stage: "light", mode: "shot" },
  { slug: "natera-clinical-review", stage: "light", mode: "shot" },
  { slug: "clinical-trial-screening", stage: "light", mode: "shot" },
  { slug: "identity-portal", stage: "light", mode: "shot", src: "/images/case-studies/identity-portal/overview2.png" },
  { slug: "perimenopause-tracking", stage: "light", mode: "cover", src: "/images/case-studies/perimenopause-tracking/hero.jpg" },
  { slug: "ai-design-practice", stage: "dark", mode: "flat" },
  { slug: "lab-operations-leadership", stage: "dark", mode: "flat" },
  { slug: "histopathology-workflow", stage: "light", mode: "shot" },
];

const studyMap = Object.fromEntries(caseStudyList.map((s) => [s.slug, s]));

function years(timeline: string) {
  const found = Array.from(new Set(timeline.match(/\d{4}/g) ?? []));
  return found.length > 1 ? `${found[0]}–${found[found.length - 1]}` : found[0] ?? "";
}

function mediaFor(study: CaseStudy, preview: Preview) {
  if (preview.src) return { src: preview.src, video: false };
  if (study.previewVideo?.startsWith("/")) return { src: study.previewVideo, video: true };
  return study.previewImage ? { src: study.previewImage, video: false } : null;
}

function WorkCard({ study, preview }: { study: CaseStudy; preview: Preview }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const media = mediaFor(study, preview);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const meta = [study.company, years(study.timeline)].filter(Boolean).join(" · ");

  return (
    <a href={`/work/${study.slug}`} className="work-card">
      <div className={`work-card-media work-card-media--${preview.stage} work-card-media--${preview.mode}`}>
        {media && (
          <div className="work-card-stage">
            {media.video ? (
              <video
                ref={videoRef}
                src={media.src}
                muted
                loop
                playsInline
                preload="metadata"
                className="work-card-shot"
              />
            ) : (
              <img src={media.src} alt="" loading="lazy" className="work-card-shot" />
            )}
          </div>
        )}
      </div>

      <div className="work-card-body">
        <h3 className="work-card-title">{study.title}</h3>
        <div className="work-card-meta">{meta}</div>
      </div>
    </a>
  );
}

export default function ProjectShowcase() {
  return (
    <section className="work-showcase">
      <div className="work-grid">
        {previews.map((preview) => {
          const study = studyMap[preview.slug];
          if (!study) return null;
          return <WorkCard key={preview.slug} study={study} preview={preview} />;
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
