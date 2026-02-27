"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function DreamsSection() {
  const [showAll, setShowAll] = useState(false);

  const dreams = [
    { text: "Write a book about women's health HCI", done: false },
    { text: "Work at a company shaping how AI meets health", done: false },
    { text: "1,000 Substack subscribers", done: false },
    { text: "Ship a consumer health product", done: true },
    { text: "Publish in a top HCI venue (CHI 2020)", done: true },
    { text: "Get a US patent", done: true },
    { text: "Get a PhD in HCI", done: true },
  ];

  const visible = showAll ? dreams : dreams.slice(0, 5);
  const doneCount = dreams.filter((d) => d.done).length;
  const pct = Math.round((doneCount / dreams.length) * 100);

  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Life dashboard</div>
        <div className="dreams-header">
          <div className="section-title">Things I&apos;m working toward</div>
          <div className="dreams-pct">{pct}%</div>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${pct}%`,
              background:
                "linear-gradient(90deg, var(--accent), var(--accent2))",
            }}
          ></div>
        </div>
      </AnimateOnScroll>
      <div style={{ height: ".75rem" }}></div>
      <AnimateOnScroll animation="fade-up" delay={200}>
        <div className="dream-list">
          {visible.map((dream, i) => (
            <div key={i} className={`dream${dream.done ? " done" : ""}`}>
              <span className="dream-check"></span>
              <span className="dream-text">{dream.text}</span>
            </div>
          ))}
        </div>
        {!showAll && (
          <button
            className="show-all-toggle"
            onClick={() => setShowAll(true)}
          >
            Show all {dreams.length} &darr;
          </button>
        )}
        {showAll && (
          <button
            className="show-all-toggle"
            onClick={() => setShowAll(false)}
          >
            Show fewer &uarr;
          </button>
        )}
      </AnimateOnScroll>
    </section>
  );
}
