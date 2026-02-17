"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function DreamsSection() {
  const [showAll, setShowAll] = useState(false);

  const dreams = [
    { text: "Publish in a top HCI venue (DIS 2026)", done: false },
    { text: "Ship a consumer health product", done: false },
    { text: "1,000 Substack subscribers", done: false },
    { text: "Keynote a design or health conference", done: false },
    { text: "Work at a company shaping how AI meets health", done: false },
    { text: "Finish a PhD while working full-time", done: true },
    { text: "Publish in a top HCI venue", done: true },
    { text: "Get a US patent", done: true },
    { text: "Ship a 0-to-1 product", done: true },
    { text: "Start a Substack people actually read", done: true },
    { text: "Build something with AI (Claude Code)", done: true },
    { text: "Evaluate research proposals for a DAO", done: true },
    { text: "Write a book about somaesthetic design", done: false },
    { text: "Design an experience that makes someone cry (in a good way)", done: false },
    { text: "Get my green card", done: false },
    { text: "Visit all the wine regions of South America", done: false },
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
