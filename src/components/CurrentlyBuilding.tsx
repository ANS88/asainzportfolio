"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const PROJECTS = [
  {
    name: "yalp!",
    description: "A lab execution platform unifying +5 legacy systems into one, modernizing lab software to reduce TAT and improve ease of use for lab users.",
    metrics: ["+5 systems unified", "Reduced TAT", "End-to-end lab ops"],
    points: [
      "Replacing fragmented legacy tooling with a single, cohesive platform",
      "Designing for bench scientists — reducing clicks, errors, and cognitive load",
      "Coordinating across eng, science, and ops to align on a shared workflow model",
    ],
  },
  {
    name: "Natera UX research repository",
    description: "A reusable insight library across Natera — making past research findable, actionable, and shared.",
    metrics: ["Cross-org reuse", "Structured tagging", "Faster synthesis"],
    points: [
      "Centralizing scattered research artifacts into one searchable system",
      "Designing a taxonomy that works across product areas and research methods",
      "Reducing duplicated discovery work and surfacing existing evidence faster",
    ],
  },
  {
    name: "Women's Health, Computed",
    description: "Translating 4 years of menopause app research into insights for designers and skeptical consumers.",
    metrics: ["Public writing", "Substack"],
    points: [
      "Covering AI health products, femtech design, and clinical decision support",
      "Written from a researcher-practitioner perspective",
    ],
    href: "https://womenshealthcomputed.substack.com",
  },
];

export default function CurrentlyBuilding() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section>
      <AnimateOnScroll>
        <div className="label">In progress</div>
        <div className="section-title">Currently building</div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <div className="building-list">
          {PROJECTS.map((item, i) => (
            <div key={i} className={`building-item${expanded === i ? " open" : ""}`}>
              <button
                className="building-item-header"
                onClick={() => setExpanded(expanded === i ? null : i)}
                aria-expanded={expanded === i}
              >
                <span className="building-item-name">{item.name}</span>
                <span className="building-item-chevron">{expanded === i ? "−" : "+"}</span>
              </button>
              {expanded === i && (
                <div className="building-item-body">
                  <p className="building-item-desc">{item.description}</p>
                  <div className="building-metrics">
                    {item.metrics.map((m, j) => (
                      <span key={j} className="building-metric">{m}</span>
                    ))}
                  </div>
                  <ul className="building-points">
                    {item.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                  {item.href && (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="building-link">
                      Read on Substack →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
