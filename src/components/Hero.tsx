"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

// Generate symmetric 5-petal flower path using polar coordinates
function petalPath(cx: number, cy: number) {
  const R = 16, amp = 1.8, petals = 5, pts = 80;
  let d = "";
  for (let i = 0; i <= pts; i++) {
    const t = (i / pts) * Math.PI * 2 - Math.PI / 2;
    const r = R + amp * Math.cos(petals * t);
    const x = cx + r * Math.cos(t);
    const y = cy + r * Math.sin(t);
    d += (i === 0 ? "M" : "L") + x.toFixed(2) + "," + y.toFixed(2);
  }
  return d + "Z";
}

const HERO_FLOWER_PATH = petalPath(20, 20);

export default function Hero() {
  const [picking, setPicking] = useState(false);
  const [picked, setPicked] = useState(false);

  const handlePick = () => {
    if (picked || picking) return;
    setPicking(true);
    // Vibrate for 600ms, then complete the pick
    setTimeout(() => {
      setPicking(false);
      setPicked(true);
      window.dispatchEvent(new CustomEvent("flower-picked"));
    }, 600);
  };

  return (
    <div className="hero">
      {/* Hand-drawn arrow + label */}
      <div className={`pick-flower-hint${picked ? " hidden" : ""}`}>
        <span className="pick-flower-label">pick a moonflower</span>
        {/* Hand-drawn dashed line with arrowhead at the end */}
        <svg className="pick-flower-arrow" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dashed line */}
          <path
            d="M2 18 C8 16, 14 13, 22 14 C30 15, 36 17, 44 14"
            stroke="var(--accent)"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="2 3"
          />
          {/* Arrowhead at end */}
          <path
            d="M42 9 L48 14 L42 19"
            stroke="var(--accent)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Pickable moonflower */}
      <div
        className={`hero-moonflower${picking ? " picking" : ""}${picked ? " picked" : ""}`}
        role="button"
        tabIndex={0}
        aria-label="Pick a moonflower to use as cursor"
        onClick={handlePick}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handlePick(); }}
        style={{ cursor: picked ? "default" : "pointer" }}
      >
        <svg viewBox="0 0 40 40" width="120" height="120" className="moonflower-spin">
          <defs>
            <radialGradient id="hmf-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8f0e0" />
              <stop offset="12%" stopColor="#d4a0d4" />
              <stop offset="28%" stopColor="#6848c8" />
              <stop offset="50%" stopColor="#3535d6" />
              <stop offset="100%" stopColor="#1a1a9e" />
            </radialGradient>
            <radialGradient id="hmf-center" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f0f4d8" />
              <stop offset="60%" stopColor="#c8a8d8" />
              <stop offset="100%" stopColor="#8060b8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d={HERO_FLOWER_PATH}
            fill="url(#hmf-grad)"
            stroke="#2020a0"
            strokeWidth=".3"
          />
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <line
              key={`hv${i}`}
              x1="20"
              y1="20"
              x2={20 + 16 * Math.cos(((angle - 90) * Math.PI) / 180)}
              y2={20 + 16 * Math.sin(((angle - 90) * Math.PI) / 180)}
              stroke="#4848d0"
              strokeWidth=".4"
              opacity=".45"
            />
          ))}
          <circle cx="20" cy="20" r="7" fill="url(#hmf-center)" />
          <circle cx="20" cy="20" r="2.2" fill="#e8f0d0" />
          <circle cx="20" cy="20" r="1" fill="#c0d8a0" />
        </svg>
      </div>
      <AnimateOnScroll animation="fade-in">
        <div className="hero-tag">Adriana Navarro Sainz &middot; PhD in HCI &middot; San Francisco</div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="status"><span className="status-dot"></span> Currently building</div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={200}>
        <h1>I build healthcare tools that work because <em>I studied the people using them first.</em></h1>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={350}>
        <p className="hero-sub">
          Designer, researcher, and builder with 10+ years in clinical and biotech environments. At{" "}
          <span className="tip">Natera<span className="tiptext">Genetic testing &amp; biotech &middot; 50+ laboratories</span></span>,
          I design workflows for genetic testing labs. Before that,{" "}
          <span className="tip">Cincinnati Children&apos;s Hospital<span className="tiptext">Pediatric genomics, clinical decision support, NIH-funded</span></span>.
          I don&apos;t hand off research to designers — I am the designer.
        </p>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={500}>
        <div className="hero-links">
          <a href="mailto:sainz.nag@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
          <a href="https://scholar.google.com/citations?user=6ec-wJ8AAAAJ" target="_blank" rel="noopener noreferrer">Scholar</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Resume ↓</a>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
