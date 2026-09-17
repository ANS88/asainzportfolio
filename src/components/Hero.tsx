"use client";

import { useState, useRef } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const TOOLTIP_ITEMS = [
  "clinical decision support systems",
  "genetic testing interpretation tools",
  "patient portals",
  "symptom trackers",
  "process execution & automatization software",
];

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
              <span className="hero-keyword-tooltip">
                <svg className="hero-tooltip-border" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6,4 C20,1 50,5 75,2 C88,3 95,2 97,7 C99,28 98,55 97,78 C98,90 96,97 92,98 C70,100 45,97 22,99 C10,98 3,100 2,95 C0,75 1,48 2,25 C1,12 2,6 6,4Z" fill="#F0386B" stroke="#F0386B" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                <span className="hero-tooltip-items">
                  {TOOLTIP_ITEMS.map((item, i) => (
                    <span key={i} className="hero-tooltip-item">{item}</span>
                  ))}
                </span>
              </span>
            )}
          </span>
          <span className="hero-after-keyword">, high-stakes products.</span>
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
