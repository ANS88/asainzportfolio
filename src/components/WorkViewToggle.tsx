"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { HoverVideoLocal, HoverVideoEmbed, HoverVideoEmbedRow } from "./HoverVideo";
import type { CaseStudy } from "@/types/case-study";

function extractYear(timeline: string): string {
  const match = timeline.match(/(\d{4})/);
  return match ? match[1] : "";
}

function groupByCompany(studies: CaseStudy[]): { company: string; items: CaseStudy[] }[] {
  const map = new Map<string, CaseStudy[]>();
  for (const s of studies) {
    const list = map.get(s.company) || [];
    list.push(s);
    map.set(s.company, list);
  }
  return Array.from(map.entries()).map(([company, items]) => ({ company, items }));
}

export default function WorkViewToggle({ studies }: { studies: CaseStudy[] }) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const groups = groupByCompany(studies);

  return (
    <>
      <div className="work-view-toggle">
        <button
          className={`work-view-btn${view === "grid" ? " work-view-btn--active" : ""}`}
          onClick={() => setView("grid")}
          aria-label="Grid view"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <button
          className={`work-view-btn${view === "list" ? " work-view-btn--active" : ""}`}
          onClick={() => setView("list")}
          aria-label="List view"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="1" y1="3" x2="15" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="1" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {view === "grid" ? (
        <div className="cs-card-grid">
          {studies.map((study) => (
            <AnimateOnScroll key={study.slug} animation="fade-up">
              <a href={`/work/${study.slug}`} className="cs-preview-card">
                {study.previewVideos && study.previewVideos.length > 0 ? (
                  <HoverVideoEmbedRow sources={study.previewVideos} />
                ) : study.previewVideo && study.previewVideo.startsWith("/") ? (
                  <HoverVideoLocal src={study.previewVideo} />
                ) : study.previewVideo ? (
                  <HoverVideoEmbed src={study.previewVideo} />
                ) : study.previewImage ? (
                  <div className="cs-preview-image">
                    <img
                      src={study.previewImage}
                      alt={study.title}
                      loading="lazy"
                      style={study.previewCrop ? {
                        objectPosition: study.previewCrop.position || "center",
                        ...study.previewCrop.scale ? { '--crop-scale': study.previewCrop.scale } as React.CSSProperties : {},
                      } : undefined}
                    />
                  </div>
                ) : null}
                <div className="cs-preview-body">
                  <div className="cs-preview-label">{study.company} &middot; {study.timeline}</div>
                  <div className="cs-preview-title">{study.title}</div>
                  <p className="cs-preview-stakes">{study.stakesLine}</p>
                  {study.tags && study.tags.length > 0 && (
                    <div className="cs-preview-tags">
                      {study.tags.map((tag) => (
                        <span key={tag} className="cs-hero-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      ) : (
        <div className="work-list">
          {groups.map((group) => (
            <div key={group.company} className="work-list-group">
              <div className="work-list-company">{group.company}</div>
              {group.items.map((study) => (
                <a key={study.slug} href={`/work/${study.slug}`} className="work-list-row">
                  <span className="work-list-title">{study.title}</span>
                  <span className="work-list-dot" />
                  <span className="work-list-role">{study.role}</span>
                  <span className="work-list-year">{extractYear(study.timeline)}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
