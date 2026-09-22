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
          I lead design and research for{" "}
          <span
            className="hero-keyword"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            complex
          </span>
          , high-stakes products.
        </h1>
      </AnimateOnScroll>

      <div className={`hero-stripe${hovering ? " hero-stripe--visible" : ""}`}>
        <div className="hero-stripe-marquee">
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>

      <AnimateOnScroll animation="fade-up" delay={300}>
        <p className="hero-sub">Systems thinker and builder. Currently leading UX for the scientists and lab staff behind millions of patient results, making them faster and more accurate at <a href="https://www.natera.com" target="_blank" rel="noopener noreferrer">Natera</a>.</p>
      </AnimateOnScroll>
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
