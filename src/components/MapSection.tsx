"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const locations = [
  {
    city: "Guadalajara",
    country: "Mexico",
    tags: ["Born", "BS in Integral Design @ ITESO", "+3 yrs as Visual Designer"],
    x: 175,
    y: 262,
  },
  {
    city: "Valencia",
    country: "Spain",
    tags: ["Student exchange @ UPV"],
    x: 488,
    y: 222,
  },
  {
    city: "Montreal",
    country: "Canada",
    tags: ["Computational Design @ Concordia University", "UX Freelancer"],
    x: 250,
    y: 195,
  },
  {
    city: "Cincinnati",
    country: "OH",
    tags: ["Master of Design @ UC", "Doctorate in HCI @ UC", "UX Design @ CCHMC"],
    x: 228,
    y: 218,
  },
  {
    city: "Portland",
    country: "OR",
    tags: ["UX Internship @ Hewlett Packard"],
    x: 137,
    y: 206,
  },
  {
    city: "San Francisco",
    country: "CA",
    tags: ["Currently UX Design + Research @ Natera"],
    x: 130,
    y: 222,
  },
];

function WorldOutline() {
  return (
    <g fill="none" stroke="#4a2d6b" strokeWidth="0.8" opacity="0.5">
      {/* North America */}
      <path d="M60,160 C80,130 120,100 160,95 C200,90 230,85 260,100 C280,110 290,130 285,150 C280,165 270,180 260,190 C250,200 245,210 240,225 C235,240 230,255 225,265 C220,275 210,280 195,278 C180,276 170,270 165,260 C160,250 155,245 145,240 C135,235 120,230 110,220 C100,210 90,200 80,195 C70,190 60,185 55,175 C50,170 55,165 60,160Z" />
      {/* South America */}
      <path d="M225,275 C230,280 240,290 245,300 C250,310 255,325 258,340 C260,355 258,370 252,385 C245,400 235,410 228,420 C222,425 218,415 220,400 C222,385 218,370 215,355 C212,340 210,325 212,310 C214,295 218,285 225,275Z" />
      {/* Europe */}
      <path d="M460,150 C470,135 480,125 495,120 C510,115 525,118 535,128 C540,135 538,145 530,155 C522,165 515,170 510,180 C505,188 500,195 495,200 C490,205 482,205 477,198 C472,192 468,185 465,175 C462,168 458,160 460,150Z" />
      {/* UK/Ireland */}
      <path d="M455,140 C458,135 462,130 468,128 C472,130 473,138 470,145 C467,150 460,152 455,148Z" />
      {/* Africa */}
      <path d="M475,215 C485,210 500,208 515,212 C530,218 540,230 545,248 C548,265 545,285 538,305 C530,325 520,340 510,350 C500,358 490,355 485,345 C478,332 472,315 470,295 C468,275 468,255 470,240 C472,228 473,220 475,215Z" />
      {/* Asia */}
      <path d="M540,120 C560,108 590,95 620,90 C650,85 680,88 710,100 C730,108 745,120 755,135 C762,148 765,165 760,180 C755,195 745,208 730,215 C718,220 705,222 690,218 C680,215 668,210 655,205 C640,200 625,198 610,200 C595,202 580,198 565,190 C555,184 548,175 542,165 C538,155 536,140 540,120Z" />
      {/* India */}
      <path d="M630,210 C640,215 648,225 650,240 C652,255 648,270 640,280 C632,288 625,282 622,270 C620,258 618,245 622,232 C625,222 628,214 630,210Z" />
      {/* Australia */}
      <path d="M715,340 C735,330 760,328 780,335 C795,342 800,358 795,375 C790,390 778,398 762,400 C748,400 735,395 725,385 C718,375 712,362 712,350 C712,345 713,342 715,340Z" />
      {/* Japan/Korea */}
      <path d="M760,155 C765,150 770,148 775,152 C778,158 776,168 772,175 C768,180 763,178 760,172 C758,166 758,160 760,155Z" />
      {/* Indonesia */}
      <path d="M690,300 C700,295 712,293 725,296 C735,300 740,308 738,315 C735,320 725,322 715,318 C705,314 695,308 690,300Z" />
      {/* Greenland */}
      <path d="M330,70 C345,60 365,55 380,58 C392,62 395,75 388,88 C380,98 365,102 350,98 C338,94 330,82 330,70Z" />
      {/* Mediterranean */}
      <path d="M495,195 C505,192 510,195 508,200" />
      {/* Scandinavia */}
      <path d="M490,95 C495,85 502,80 508,82 C515,88 518,100 515,112 C512,120 505,125 498,120 C492,115 488,108 490,95Z" />
    </g>
  );
}

export default function MapSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Places</div>
        <div className="section-title">Places I&apos;ve Called Home</div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-in" delay={100}>
        <div className="topo-container">
          <div className="topo-map-wrap">
            <svg
              viewBox="0 0 900 480"
              className="svg-world-map"
            >
              <defs>
                <radialGradient id="dot-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#c4a8f0" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#c4a8f0" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Graticule lines */}
              <g stroke="#4a2d6b" strokeWidth="0.3" opacity="0.2" fill="none">
                {[120, 180, 240, 300, 360].map(y => (
                  <line key={`h${y}`} x1="0" y1={y} x2="900" y2={y} />
                ))}
                {[150, 300, 450, 600, 750].map(x => (
                  <line key={`v${x}`} x1={x} y1="60" x2={x} y2="440" />
                ))}
              </g>

              <WorldOutline />

              {/* Connection path between cities */}
              <path
                d="M130,222 C140,215 137,206 137,206 M137,206 C170,198 210,195 250,195 M250,195 C240,205 232,215 228,218 M228,218 C200,230 185,250 175,262 M250,195 C350,190 430,200 488,222"
                fill="none"
                stroke="#c4a8f0"
                strokeWidth="0.8"
                opacity="0.2"
                strokeDasharray="4,4"
              />

              {/* City dots */}
              {locations.map((loc, i) => {
                const isActive = active === i;
                const isCurrent = loc.city === "San Francisco";
                return (
                  <g
                    key={loc.city}
                    className="map-city-dot"
                    onClick={() => setActive(active === i ? null : i)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Glow */}
                    {(isActive || isCurrent) && (
                      <circle cx={loc.x} cy={loc.y} r={isActive ? 20 : 12} fill="url(#dot-glow)" />
                    )}
                    {/* Pulse ring */}
                    {isActive && (
                      <circle cx={loc.x} cy={loc.y} r="14" fill="none" stroke="#c4a8f0" strokeWidth="1" opacity="0.4" className="pulse-ring" />
                    )}
                    {/* Dot */}
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r={isActive ? 5 : isCurrent ? 4 : 3}
                      fill={isActive ? "#c4a8f0" : isCurrent ? "#c4a8f0" : "#8a6ebf"}
                      stroke={isActive ? "#ffffff" : "none"}
                      strokeWidth="1"
                    />
                    {/* Label */}
                    <text
                      x={loc.x}
                      y={loc.y - (isActive ? 10 : 8)}
                      textAnchor="middle"
                      fill={isActive ? "#ffffff" : "#9984d4"}
                      fontSize={isActive ? "11" : "9"}
                      fontFamily="Inter, sans-serif"
                      fontWeight={isActive ? "500" : "400"}
                      opacity={isActive ? 1 : 0.7}
                    >
                      {loc.city}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="topo-cities">
            {locations.map((loc, i) => (
              <button
                key={loc.city}
                className={`topo-city-btn${active === i ? " topo-city-btn--active" : ""}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="topo-city-name">{loc.city}</span>
                <span className="topo-city-country">{loc.country}</span>
              </button>
            ))}
          </div>

          {active !== null && (
            <div className="topo-city-detail">
              <div className="topo-city-detail-header">
                {locations[active].city}, {locations[active].country}
              </div>
              <div className="topo-city-tags">
                {locations[active].tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>
          )}

          {active === null && (
            <p className="topo-hint">Select a city to explore</p>
          )}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
