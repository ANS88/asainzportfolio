"use client";

import { caseStudyList } from "@/data/case-studies";
import type { CaseStudy } from "@/types/case-study";

export default function MoreWork({ currentSlug }: { currentSlug: string }) {
  const others = caseStudyList.filter((s) => s.slug !== currentSlug);

  return (
    <section className="more-work">
      <h2 className="more-work-heading">Wanna see more?</h2>
      <div className="more-work-grid">
        {others.map((study) => (
          <a
            key={study.slug}
            href={`/work/${study.slug}`}
            className="more-work-card"
          >
            <div className="more-work-thumb">
              <img
                src={study.previewImage}
                alt={study.title}
                loading="lazy"
              />
            </div>
            <div className="more-work-info">
              <span className="more-work-company">{study.company}</span>
              <span className="more-work-title">{study.title}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
