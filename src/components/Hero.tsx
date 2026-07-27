"use client";

import { useState, useRef } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const TOOLTIP_TEXT =
  "clinical decision support systems, genetic testing interpretation tools, patient portals, symptom trackers, process execution and automatization software";

export default function Hero() {
  const [show, setShow] = useState(false);
  const wordRef = useRef<HTMLSpanElement>(null);

  return (
    <div className="hero">
      <AnimateOnScroll animation="fade-up">
        <h1>
          I lead design and research for{" "}
          <span
            ref={wordRef}
            className="hero-keyword"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            complex
            {show && (
              <span className="hero-keyword-tooltip">{TOOLTIP_TEXT}</span>
            )}
          </span>
          , high-stakes products.
        </h1>
      </AnimateOnScroll>
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
