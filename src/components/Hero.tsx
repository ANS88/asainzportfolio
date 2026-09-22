"use client";

import { useState, useEffect } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const STRIPE_ITEMS = [
  "Clinical Decision Support Systems",
  "Patient Portals",
  "Symptom Trackers",
  "Clinical Trials Triage",
  "Wet Lab Process Execution",
  "Genetic Testing Interpretation Tools",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % STRIPE_ITEMS.length);
        setAnimating(false);
      }, 400);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <AnimateOnScroll animation="fade-up">
        <h1>
          I lead design and research for{" "}
          <span className="hero-keyword">complex</span>, high-stakes products.
        </h1>
      </AnimateOnScroll>

      <div className="hero-stripe">
        <div className={`hero-stripe-item ${animating ? "hero-stripe-exit" : "hero-stripe-enter"}`}>
          {STRIPE_ITEMS[activeIndex]}
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
