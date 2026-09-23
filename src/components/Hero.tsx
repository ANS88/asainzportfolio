"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const STRIPE_ITEMS = [
  "Clinical Decision Support Systems",
  "Patient Portals",
  "Symptom Trackers",
  "Clinical Trials Triage",
  "Wet Lab Process Execution",
  "Genetic Testing Interpretation Tools",
];

function MarqueeTrack() {
  return (
    <span className="hero-stripe-track" aria-hidden="true">
      {STRIPE_ITEMS.map((item, i) => (
        <span key={i} className="hero-stripe-item">
          {item}
          <span className="hero-stripe-sep">/</span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="hero">
      <AnimateOnScroll animation="fade-up">
        <h1>
          I am a systems thinker and builder. Currently, leading design and research at{" "}
          <a href="https://www.natera.com" target="_blank" rel="noopener noreferrer" className="hero-company-link">Natera<svg className="hero-dna" viewBox="0 0 18 32" fill="currentColor" aria-hidden="true">{/* Row 0-1: strands far apart, 2 rungs */}<rect x="1" y="0" width="3" height="2"/><rect x="6" y="0" width="2" height="2"/><rect x="10" y="0" width="2" height="2"/><rect x="14" y="0" width="3" height="2"/><rect x="1" y="2" width="3" height="2"/><rect x="6" y="2" width="2" height="2"/><rect x="10" y="2" width="2" height="2"/><rect x="14" y="2" width="3" height="2"/>{/* Row 2-3: approaching, 1 rung */}<rect x="3" y="4" width="3" height="2"/><rect x="8" y="4" width="2" height="2"/><rect x="12" y="4" width="3" height="2"/><rect x="5" y="6" width="3" height="2"/><rect x="10" y="6" width="3" height="2"/>{/* Row 4: crossing */}<rect x="7" y="8" width="4" height="2"/>{/* Row 5-6: separating, 1 rung */}<rect x="5" y="10" width="3" height="2"/><rect x="10" y="10" width="3" height="2"/><rect x="3" y="12" width="3" height="2"/><rect x="8" y="12" width="2" height="2"/><rect x="12" y="12" width="3" height="2"/>{/* Row 7-8: far apart, 2 rungs */}<rect x="1" y="14" width="3" height="2"/><rect x="6" y="14" width="2" height="2"/><rect x="10" y="14" width="2" height="2"/><rect x="14" y="14" width="3" height="2"/><rect x="1" y="16" width="3" height="2"/><rect x="6" y="16" width="2" height="2"/><rect x="10" y="16" width="2" height="2"/><rect x="14" y="16" width="3" height="2"/>{/* Row 9-10: approaching */}<rect x="3" y="18" width="3" height="2"/><rect x="8" y="18" width="2" height="2"/><rect x="12" y="18" width="3" height="2"/><rect x="5" y="20" width="3" height="2"/><rect x="10" y="20" width="3" height="2"/>{/* Row 11: crossing */}<rect x="7" y="22" width="4" height="2"/>{/* Row 12-13: separating */}<rect x="5" y="24" width="3" height="2"/><rect x="10" y="24" width="3" height="2"/><rect x="3" y="26" width="3" height="2"/><rect x="8" y="26" width="2" height="2"/><rect x="12" y="26" width="3" height="2"/>{/* Row 14-15: far apart */}<rect x="1" y="28" width="3" height="2"/><rect x="6" y="28" width="2" height="2"/><rect x="10" y="28" width="2" height="2"/><rect x="14" y="28" width="3" height="2"/><rect x="1" y="30" width="3" height="2"/><rect x="6" y="30" width="2" height="2"/><rect x="10" y="30" width="2" height="2"/><rect x="14" y="30" width="3" height="2"/></svg></a>
          , shipping the platform{" "}
          <span
            className="hero-keyword"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            tools
          </span>
          {" "}that power 50+ genomics labs and millions of patient results.
          <span className="hero-app-links">
            <a href="mailto:sainz.nag@gmail.com" className="hero-app-icon" aria-label="Email">
              <svg viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="3" width="14" height="10"/><rect x="1" y="3" width="2" height="2" fill="var(--paper)"/><rect x="13" y="3" width="2" height="2" fill="var(--paper)"/><rect x="3" y="5" width="2" height="2" fill="var(--paper)"/><rect x="11" y="5" width="2" height="2" fill="var(--paper)"/><rect x="5" y="7" width="2" height="2" fill="var(--paper)"/><rect x="9" y="7" width="2" height="2" fill="var(--paper)"/><rect x="7" y="9" width="2" height="2" fill="var(--paper)"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer" className="hero-app-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 16 16" fill="currentColor"><rect x="2" y="2" width="3" height="3"/><rect x="2" y="7" width="3" height="7"/><rect x="7" y="7" width="3" height="7"/><rect x="10" y="9" width="2" height="2"/><rect x="12" y="7" width="2" height="4"/><rect x="10" y="7" width="2" height="2"/><rect x="12" y="5" width="2" height="2"/><rect x="10" y="5" width="2" height="2"/></svg>
            </a>
            <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer" className="hero-app-icon" aria-label="Substack">
              <svg viewBox="0 0 16 16" fill="currentColor"><rect x="3" y="2" width="10" height="2"/><rect x="3" y="6" width="10" height="2"/><rect x="3" y="10" width="2" height="4"/><rect x="7" y="8" width="2" height="2"/><rect x="11" y="10" width="2" height="4"/></svg>
            </a>
            <a href="https://scholar.google.com/citations?user=6ec-wJ8AAAAJ" target="_blank" rel="noopener noreferrer" className="hero-app-icon" aria-label="Scholar">
              <svg viewBox="0 0 16 16" fill="currentColor"><rect x="6" y="1" width="4" height="2"/><rect x="4" y="3" width="2" height="2"/><rect x="10" y="3" width="2" height="2"/><rect x="2" y="5" width="2" height="2"/><rect x="12" y="5" width="2" height="2"/><rect x="1" y="7" width="14" height="2"/><rect x="3" y="9" width="10" height="2"/><rect x="5" y="11" width="6" height="2"/><rect x="7" y="13" width="2" height="2"/></svg>
            </a>
            <a href="https://github.com/ANS88" target="_blank" rel="noopener noreferrer" className="hero-app-icon" aria-label="GitHub">
              <svg viewBox="0 0 16 16" fill="currentColor"><rect x="5" y="1" width="6" height="2"/><rect x="3" y="3" width="2" height="2"/><rect x="11" y="3" width="2" height="2"/><rect x="1" y="5" width="2" height="4"/><rect x="13" y="5" width="2" height="4"/><rect x="3" y="9" width="2" height="2"/><rect x="11" y="9" width="2" height="2"/><rect x="5" y="11" width="2" height="2"/><rect x="9" y="11" width="2" height="2"/><rect x="3" y="5" width="2" height="2" fill="var(--paper)"/><rect x="5" y="5" width="2" height="2"/><rect x="9" y="5" width="2" height="2"/><rect x="11" y="5" width="2" height="2" fill="var(--paper)"/><rect x="5" y="13" width="6" height="2"/></svg>
            </a>
          </span>
        </h1>
      </AnimateOnScroll>

      <div className={`hero-stripe${hovering ? " hero-stripe--visible" : ""}`}>
        <div className="hero-stripe-marquee">
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </div>
  );
}
