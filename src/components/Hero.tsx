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
          <a href="https://www.natera.com" target="_blank" rel="noopener noreferrer" className="hero-company-link">Natera<svg className="hero-dna" viewBox="0 0 16 24" fill="currentColor" aria-hidden="true"><rect x="2" y="0" width="2" height="2"/><rect x="12" y="0" width="2" height="2"/><rect x="4" y="2" width="2" height="2"/><rect x="10" y="2" width="2" height="2"/><rect x="6" y="4" width="4" height="2"/><rect x="4" y="6" width="2" height="2"/><rect x="10" y="6" width="2" height="2"/><rect x="2" y="8" width="2" height="2"/><rect x="12" y="8" width="2" height="2"/><rect x="2" y="10" width="2" height="2"/><rect x="12" y="10" width="2" height="2"/><rect x="4" y="12" width="2" height="2"/><rect x="10" y="12" width="2" height="2"/><rect x="6" y="14" width="4" height="2"/><rect x="4" y="16" width="2" height="2"/><rect x="10" y="16" width="2" height="2"/><rect x="2" y="18" width="2" height="2"/><rect x="12" y="18" width="2" height="2"/><rect x="2" y="20" width="2" height="2"/><rect x="12" y="20" width="2" height="2"/></svg></a>
          , shipping the platform{" "}
          <span
            className="hero-keyword"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            tools
          </span>
          {" "}that power 50+ genomics labs and millions of patient results.
        </h1>
      </AnimateOnScroll>

      <div className={`hero-stripe${hovering ? " hero-stripe--visible" : ""}`}>
        <div className="hero-stripe-marquee">
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
      <AnimateOnScroll animation="fade-up" delay={450}>
        <div className="hero-links">
          <a href="mailto:sainz.nag@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
          <a href="https://scholar.google.com/citations?user=6ec-wJ8AAAAJ" target="_blank" rel="noopener noreferrer">Scholar</a>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
