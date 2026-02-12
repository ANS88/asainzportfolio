"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const items = [
  {
    title: "Lab workflow system",
    where: "Natera \u00b7 2022\u2013present \u00b7 50+ genetic testing laboratories",
    outcomes: ["-15% turnaround time", "-23% errors", "+50% efficiency"],
    built: "Stateful interruption-and-resume task model, new IA for context-preserving workflows, A/B testing platform (Claude Code), design system components across lab ops products.",
    chain: [
      { label: "Workflow shadowing" }, { label: "Ethnography" },
      { label: "Interruption mapping", b: true }, { label: "IA redesign", b: true },
      { label: "A/B test", b: true }, { label: "Ship", b: true },
    ],
    story: 'Scientists were pulled mid-workflow for priority samples. The system had no concept of \u201cresume.\u201d Invisible in logs, obvious when you stand next to someone working.',
    aside: "You cannot find an interruption architecture problem from dashboards. You find it in the lab.",
  },
  {
    title: "Patient portal",
    where: "Natera \u00b7 2023 \u00b7 First patient-facing product",
    outcomes: ["0\u21921 product", "-30% support calls"],
    built: "Patient-controlled result delivery (not push \u2014 patients choose when to see genetic test results), educational context layers, complete interaction model and emotional pacing.",
    chain: [
      { label: "Patient interviews" }, { label: "Journey mapping" },
      { label: "Control model", b: true }, { label: "Interaction design", b: true },
      { label: "Ship", b: true },
    ],
    story: "Patients didn\u2019t want easier access. They wanted control over timing. Genetic testing anxiety means people need to choose when to receive life-changing info.",
  },
  {
    title: "Somaesthetic design framework",
    where: "PhD Dissertation \u00b7 UC \u00b7 2020\u20132025 \u00b7 40-person diary study",
    outcomes: ["Publishable framework", "DIS 2026"],
    built: "Design principles for health tools that respect embodied experience. Concrete patterns for accommodating ambiguity. Systematic review + MARS evaluation + 40-person diary studies \u2192 framework that changes how I build everything.",
    chain: [],
    story: 'The most clinically top-rated menopause apps were the least used. Women abandoned tools that optimized menopause. The gap between \u201cevidence-based\u201d and \u201cevidence-felt\u201d was the core finding.',
  },
  {
    title: "Genomic data platform (VIVA)",
    where: "Cincinnati Children\u2019s \u00b7 2019\u20132021",
    outcomes: ["Live product", "Dual-entry IA"],
    built: "Dual-entry IA (patient-centric for MDs, dataset-centric for bioinformaticians), pipeline selection interface, full intake flow, personas, style guide, UX packet.",
    chain: [],
    story: "MDs thought in patients. Bioinformaticians thought in datasets. The upload flow assumed one model. I built two front doors into the same data.",
    link: { text: "See live product \u2197", href: "https://viva.research.cchmc.org/" },
  },
  {
    title: "Foster care health portal (IDENTITY)",
    where: "CCHMC + Hamilton County \u00b7 2019\u20132020",
    outcomes: ["Cross-agency IA", "County-wide"],
    built: "Complete IA restructure \u2014 from agency org charts to child-needs navigation (health, legal, placement, education). New interface, 4 personas, card sort-validated structure.",
    chain: [],
    story: "The portal reflected bureaucracy, not user tasks. Foster children\u2019s health data was split across organizational boundaries that meant nothing to social workers.",
  },
];

export default function ShippedSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Shipped</div>
        <div className="section-title">Things that exist in the world because of me</div>
      </AnimateOnScroll>

      {items.map((item, i) => (
        <div
          key={i}
          className={`shipped-item${openIndex === i ? " open" : ""}`}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
        >
          <div>
            <div className="shipped-title">{item.title}</div>
            <div className="shipped-where">{item.where}</div>
            <div className="shipped-outcomes">
              {item.outcomes.map((o) => (
                <span key={o} className="shipped-pill">{o}</span>
              ))}
            </div>
          </div>
          <div className="toggle-hint">details</div>
          <div className="shipped-expand">
            <div className="expand-body">
              <p><strong>Built:</strong> {item.built}</p>
              {item.chain.length > 0 && (
                <div className="chain">
                  {item.chain.map((c, ci) => (
                    <span key={ci}>
                      {ci > 0 && <span className="ca">&rarr;</span>}
                      <span className={`chip${c.b ? " b" : ""}`}>{c.label}</span>
                    </span>
                  ))}
                </div>
              )}
              <p>{item.story}</p>
              {item.aside && <div className="aside">{item.aside}</div>}
              {item.link && (
                <p><a href={item.link.href} target="_blank" rel="noopener noreferrer">{item.link.text}</a></p>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
