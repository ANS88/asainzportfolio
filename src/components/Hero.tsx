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

const BUILDING = [
  {
    name: "yalp!",
    description: "A lab execution platform unifying +5 legacy systems into one, modernizing lab software to reduce TAT and improve ease of use for lab users.",
    metrics: ["+5 systems unified", "Reduced TAT", "End-to-end lab ops"],
    points: [
      "Replacing fragmented legacy tooling with a single, cohesive platform",
      "Designing for bench scientists — reducing clicks, errors, and cognitive load",
      "Coordinating across eng, science, and ops to align on a shared workflow model",
    ],
  },
  {
    name: "Natera UX research repository",
    description: "A reusable insight library across Natera — making past research findable, actionable, and shared.",
    metrics: ["Cross-org reuse", "Structured tagging", "Faster synthesis"],
    points: [
      "Centralizing scattered research artifacts into one searchable system",
      "Designing a taxonomy that works across product areas and research methods",
      "Reducing duplicated discovery work and surfacing existing evidence faster",
    ],
  },
  {
    name: "Women's Health Computed",
    description: "A Substack on AI, femtech, and the future of women's health — written for people who build in this space.",
    metrics: ["Public writing", "Substack"],
    points: [
      "Covering AI health products, femtech design, and clinical decision support",
      "Written from a researcher-practitioner perspective",
    ],
    href: "https://womenshealthcomputed.substack.com",
  },
];

export default function Hero() {
  const [picking, setPicking] = useState(false);
  const [returning, setReturning] = useState(false);
  const [picked, setPicked] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleClick = () => {
    if (picking || returning) return;

    if (!picked) {
      // Pick the flower
      setPicking(true);
      setTimeout(() => {
        setPicking(false);
        setPicked(true);
        window.dispatchEvent(new CustomEvent("flower-picked"));
      }, 600);
    } else {
      // Return the flower — vibrate + blue waves
      setReturning(true);
      setTimeout(() => {
        setReturning(false);
        setPicked(false);
        window.dispatchEvent(new CustomEvent("flower-returned"));
      }, 800);
    }
  };

  return (
    <div className="hero">
      {/* Hand-drawn arrow + label */}
      <div className={`pick-flower-hint${picked || returning ? " hidden" : ""}`}>
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
        className={`hero-moonflower${picking ? " picking" : ""}${returning ? " returning" : ""}${picked && !returning ? " picked" : ""}`}
        role="button"
        tabIndex={0}
        aria-label={picked ? "Return the moonflower" : "Pick a moonflower to use as cursor"}
        onClick={handleClick}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleClick(); }}
        style={{ cursor: "pointer" }}
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
            stroke="#0909e8"
            strokeWidth=".3"
          />
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <line
              key={`hv${i}`}
              x1="20"
              y1="20"
              x2={20 + 16 * Math.cos(((angle - 90) * Math.PI) / 180)}
              y2={20 + 16 * Math.sin(((angle - 90) * Math.PI) / 180)}
              stroke="#3838e0"
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
        <div className="hero-tag">Adriana Sainz &middot; PhD in HCI &middot; San Francisco</div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="currently-building">
          <div className="status"><span className="status-dot"></span> Currently building</div>
          <div className="building-list">
            {BUILDING.map((item, i) => (
              <div key={i} className={`building-item${expanded === i ? " open" : ""}`}>
                <button
                  className="building-item-header"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  aria-expanded={expanded === i}
                >
                  <span className="building-item-name">{item.name}</span>
                  <span className="building-item-chevron">{expanded === i ? "−" : "+"}</span>
                </button>
                {expanded === i && (
                  <div className="building-item-body">
                    <p className="building-item-desc">{item.description}</p>
                    <div className="building-metrics">
                      {item.metrics.map((m, j) => (
                        <span key={j} className="building-metric">{m}</span>
                      ))}
                    </div>
                    <ul className="building-points">
                      {item.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                    {item.href && (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="building-link">
                        Read on Substack →
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={200}>
        <h1>Hi, I'm Adriana, a design leader who loves building products where patients feel seen and scientists can do their best work.</h1>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={420}>
        <div className="metrics-bar">
          <span>20+ labs served</span>
          <span className="metrics-dot">&middot;</span>
          <span>12 products shipped 0-to-1</span>
          <span className="metrics-dot">&middot;</span>
          <span>6 publications</span>
          <span className="metrics-dot">&middot;</span>
          <span>1 patent</span>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={500}>
        <div className="hero-links">
          <a href="mailto:sainz.nag@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
          <a href="https://scholar.google.com/citations?user=6ec-wJ8AAAAJ" target="_blank" rel="noopener noreferrer">Scholar</a>
          <a href="https://drive.google.com/file/d/11d-LqzwOmtWanQYzoXCLvkrU13Dvfa0d/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume ↓</a>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
