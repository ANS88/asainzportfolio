"use client";

import { useState, useMemo } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

interface NodeInfo {
  id: string;
  cx: number;
  cy: number;
  label: string[];
  href: string;
  desc: string;
}

const PRIMARY_NODES: NodeInfo[] = [
  { id: "hc", cx: 200, cy: 130, label: ["Healthcare"], href: "https://www.linkedin.com/in/adrianans/", desc: "10+ years designing clinical workflows, EHR integrations, and lab systems at Natera & CCHMC" },
  { id: "hci", cx: 600, cy: 130, label: ["HCI"], href: "https://scholar.google.com/citations?user=6ec-wJ8AAAAJ", desc: "Research at the intersection of people, interfaces, and digital systems" },
  { id: "ai", cx: 650, cy: 320, label: ["AI"], href: "https://ux-ab-testing-tool-9e3xgawoz47zjwcsdjrzwv.streamlit.app/", desc: "Building with AI: rapid prototyping, design tools, and decision support systems" },
  { id: "wr", cx: 260, cy: 450, label: ["Writing"], href: "https://womenshealthcomputed.substack.com", desc: "Academic HCI translated to accessible essays on health, tech, and Latin American identity" },
  { id: "ds", cx: 540, cy: 450, label: ["Design"], href: "https://www.linkedin.com/in/adrianans/", desc: "UX and product design for complex systems, from clinical tools to productivity interfaces" },
];

const SATELLITE_NODES = [
  { cx: 710, cy: 55, label: ["UX", "Research"] as string[] },
  { cx: 630, cy: 505, label: "Data Viz" },
  { cx: 150, cy: 320, label: ["Women's", "Health"] as string[] },
  { cx: 48, cy: 380, label: ["Quantified", "Self"] as string[] },
  { cx: 752, cy: 250, label: "CDSS" },
  { cx: 445, cy: 505, label: ["Observ-", "ability"] as string[] },
  { cx: 80, cy: 215, label: ["Consumer", "Health"] as string[] },
  { cx: 700, cy: 180, label: ["Cognitive", "Science"] as string[] },
  { cx: 768, cy: 300, label: "HITL" },
  { cx: 750, cy: 415, label: "VUIs" },
];

const FULL_VIEWBOX = "0 0 800 520";
const ZOOM_SIZE = 280; // viewport size when zoomed

export default function InterestsMapSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleNode = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setExpanded(expanded === id ? null : id);
  };

  // Compute viewBox: zoom into selected node or show full map
  const viewBox = useMemo(() => {
    if (!expanded) return FULL_VIEWBOX;
    const node = PRIMARY_NODES.find((n) => n.id === expanded);
    if (!node) return FULL_VIEWBOX;
    const half = ZOOM_SIZE / 2;
    // Clamp so we don't go outside the SVG bounds
    const x = Math.max(0, Math.min(800 - ZOOM_SIZE, node.cx - half));
    const y = Math.max(0, Math.min(520 - ZOOM_SIZE, node.cy - half));
    return `${x} ${y} ${ZOOM_SIZE} ${ZOOM_SIZE}`;
  }, [expanded]);

  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Interests map</div>
        <div className="section-title">How my worlds connect</div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="scale-in">
      <div className="map-wrap">
        <svg
          viewBox={viewBox}
          className="interests-map-svg"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          {/* Connection lines */}
          <g stroke="#e7e5e4" strokeWidth="1.5" fill="none">
            <line x1="400" y1="260" x2="200" y2="130" /><line x1="400" y1="260" x2="600" y2="130" />
            <line x1="400" y1="260" x2="650" y2="320" />
            <line x1="400" y1="260" x2="260" y2="450" /><line x1="400" y1="260" x2="540" y2="450" />
            <line x1="600" y1="130" x2="650" y2="320" strokeDasharray="4,4" />
            <line x1="200" y1="130" x2="600" y2="130" strokeDasharray="4,4" />
            <line x1="650" y1="320" x2="540" y2="450" strokeDasharray="4,4" />
            <line x1="260" y1="450" x2="540" y2="450" strokeDasharray="4,4" />
            {/* Satellites */}
            <line x1="600" y1="130" x2="630" y2="505" stroke="#f0ebe3" />
            <line x1="630" y1="505" x2="200" y2="130" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="630" y1="505" x2="540" y2="450" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="630" y1="505" x2="445" y2="505" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="600" y1="130" x2="710" y2="55" stroke="#f0ebe3" />
            <line x1="710" y1="55" x2="540" y2="450" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="200" y1="130" x2="150" y2="320" stroke="#f0ebe3" />
            <line x1="150" y1="320" x2="48" y2="380" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="150" y1="320" x2="260" y2="450" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="80" y1="215" x2="260" y2="450" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="260" y1="450" x2="600" y2="130" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="200" y1="130" x2="80" y2="215" stroke="#f0ebe3" />
            <line x1="80" y1="215" x2="48" y2="380" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="600" y1="130" x2="48" y2="380" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="650" y1="320" x2="48" y2="380" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="200" y1="130" x2="48" y2="380" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="600" y1="130" x2="700" y2="180" stroke="#f0ebe3" />
            <line x1="700" y1="180" x2="710" y2="55" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="700" y1="180" x2="650" y2="320" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="700" y1="180" x2="540" y2="450" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="650" y1="320" x2="768" y2="300" stroke="#f0ebe3" />
            <line x1="768" y1="300" x2="540" y2="450" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="768" y1="300" x2="600" y2="130" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="650" y1="320" x2="750" y2="415" stroke="#f0ebe3" />
            <line x1="750" y1="415" x2="540" y2="450" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="750" y1="415" x2="600" y2="130" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="650" y1="320" x2="752" y2="250" stroke="#f0ebe3" />
            <line x1="600" y1="130" x2="752" y2="250" stroke="#f0ebe3" />
            <line x1="540" y1="450" x2="752" y2="250" stroke="#f0ebe3" />
            <line x1="200" y1="130" x2="752" y2="250" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="540" y1="450" x2="445" y2="505" stroke="#f0ebe3" />
            <line x1="600" y1="130" x2="445" y2="505" stroke="#f0ebe3" strokeDasharray="4,4" />
            <line x1="650" y1="320" x2="445" y2="505" stroke="#f0ebe3" />
            <line x1="200" y1="130" x2="445" y2="505" stroke="#f0ebe3" strokeDasharray="4,4" />
          </g>

          {/* Satellite nodes */}
          {SATELLITE_NODES.map((s) => (
            <g key={Array.isArray(s.label) ? s.label.join(" ") : s.label} className="satellite-node" style={{ transformOrigin: `${s.cx}px ${s.cy}px` }}>
              <circle cx={s.cx} cy={s.cy} r="28" fill="white" stroke="#e7e5e4" />
              {Array.isArray(s.label) ? (
                <>
                  <text x={s.cx} y={s.cy - 3} textAnchor="middle" fill="#78716c" fontSize="10" fontFamily="Inter, sans-serif">{s.label[0]}</text>
                  <text x={s.cx} y={s.cy + 9} textAnchor="middle" fill="#78716c" fontSize="10" fontFamily="Inter, sans-serif">{s.label[1]}</text>
                </>
              ) : (
                <text x={s.cx} y={s.cy + 4} textAnchor="middle" fill="#78716c" fontSize="10" fontFamily="Inter, sans-serif">{s.label}</text>
              )}
            </g>
          ))}

          {/* Primary nodes */}
          {PRIMARY_NODES.map((node) => {
            const isExpanded = expanded === node.id;
            const r = isExpanded ? 54 : 42;
            return (
              <g
                key={node.id}
                className={`primary-node${isExpanded ? " expanded" : ""}`}
                style={{ transformOrigin: `${node.cx}px ${node.cy}px`, cursor: "pointer" }}
                onClick={(e) => toggleNode(node.id, e)}
              >
                {/* Pulse ring on expand */}
                {isExpanded && (
                  <circle cx={node.cx} cy={node.cy} r={r + 10} fill="none" stroke="#0909e8" strokeWidth="1.5" opacity=".3" className="pulse-ring" />
                )}
                <circle cx={node.cx} cy={node.cy} r={r} fill={isExpanded ? "#0909e8" : "#f0f0fe"} stroke="#0909e8" strokeWidth="2" className="node-circle" />
                {node.label.length === 2 ? (
                  <>
                    <text x={node.cx} y={node.cy - 8} textAnchor="middle" fill={isExpanded ? "white" : "#0909e8"} fontSize="13" fontWeight="400" fontFamily="Inter, sans-serif">{node.label[0]}</text>
                    <text x={node.cx} y={node.cy + 8} textAnchor="middle" fill={isExpanded ? "white" : "#0909e8"} fontSize="13" fontWeight="400" fontFamily="Inter, sans-serif">{node.label[1]}</text>
                  </>
                ) : (
                  <text x={node.cx} y={node.cy + 5} textAnchor="middle" fill={isExpanded ? "white" : "#0909e8"} fontSize="13" fontWeight="400" fontFamily="Inter, sans-serif">{node.label[0]}</text>
                )}
                {/* Description on expand */}
                {isExpanded && (
                  <foreignObject x={node.cx - 100} y={node.cy + r + 8} width="200" height="100">
                    <div className="node-tooltip">
                      <p>{node.desc}</p>
                      <a href={node.href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Explore →</a>
                    </div>
                  </foreignObject>
                )}
              </g>
            );
          })}

          {/* Center node */}
          <g className="center-node" style={{ transformOrigin: "400px 260px" }}>
            <circle cx="400" cy="260" r="56" fill="#0909e8" stroke="#0707b8" strokeWidth="2.5" />
            <text x="400" y="253" textAnchor="middle" fill="white" fontSize="16" fontWeight="400" fontFamily="Inter, sans-serif">Adriana</text>
            <text x="400" y="273" textAnchor="middle" fill="#b8b8f4" fontSize="11" fontFamily="Inter, sans-serif">PhD &middot; Builder &middot; SF</text>
          </g>
        </svg>

        {/* Zoom out button when zoomed in */}
        {expanded && (
          <button
            className="map-zoom-out"
            onClick={() => setExpanded(null)}
            aria-label="Zoom out to full map"
          >
            Zoom out
          </button>
        )}
      </div>
      </AnimateOnScroll>

      {/* Social network cards */}
      <div className="social-grid">
        <AnimateOnScroll animation="fade-up">
        <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer" className="social-card">
          <div className="sc-icon" style={{ background: "#0909e8" }}>in</div>
          <div className="sc-body">
            <div className="sc-name">LinkedIn</div>
            <div className="sc-handle">@adrianans</div>
            <div className="sc-desc">Healthcare UX, career, industry connections</div>
          </div>
        </a>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up">
        <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer" className="social-card">
          <div className="sc-icon" style={{ background: "#0909e8" }}>✎</div>
          <div className="sc-body">
            <div className="sc-name">Substack</div>
            <div className="sc-handle">Women&apos;s Health, Computed</div>
            <div className="sc-desc">Academic HCI → accessible health tech analysis</div>
          </div>
        </a>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up">
        <a href="https://scholar.google.com/citations?user=6ec-wJ8AAAAJ" target="_blank" rel="noopener noreferrer" className="social-card">
          <div className="sc-icon" style={{ background: "#0909e8" }}>G</div>
          <div className="sc-body">
            <div className="sc-name">Google Scholar</div>
            <div className="sc-handle">6 papers &middot; 1 patent</div>
            <div className="sc-desc">Peer-reviewed HCI and health research</div>
          </div>
        </a>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up">
        <a href="https://www.athenadao.co/" target="_blank" rel="noopener noreferrer" className="social-card">
          <div className="sc-icon" style={{ background: "#7c3aed" }}>Ξ</div>
          <div className="sc-body">
            <div className="sc-name">AthenaDAO</div>
            <div className="sc-handle">Dealflow Fellow</div>
            <div className="sc-desc">Evaluating women&apos;s health research proposals</div>
          </div>
        </a>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up">
        <a href="mailto:sainz.nag@gmail.com" className="social-card">
          <div className="sc-icon" style={{ background: "#1c1917" }}>@</div>
          <div className="sc-body">
            <div className="sc-name">Email</div>
            <div className="sc-handle">sainz.nag@gmail.com</div>
            <div className="sc-desc">Best way to reach me</div>
          </div>
        </a>
        </AnimateOnScroll>
      </div>

      <div style={{ marginTop: "1rem", fontFamily: "var(--sans)", fontSize: "1.05rem", color: "var(--accent)", textAlign: "center" as const }}>
        Click any node to explore. The dashed lines are where the interesting work happens.
      </div>
    </section>
  );
}
