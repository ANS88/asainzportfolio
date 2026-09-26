"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const locations = [
  {
    city: "Guadalajara",
    country: "Mexico",
    tags: ["Born", "BS in Integral Design @ ITESO", "+3 yrs as Visual Designer"],
  },
  {
    city: "Valencia",
    country: "Spain",
    tags: ["Student exchange @ UPV"],
  },
  {
    city: "Montreal",
    country: "Canada",
    tags: ["Computational Design @ Concordia University", "UX Freelancer"],
  },
  {
    city: "Cincinnati",
    country: "OH",
    tags: ["Master of Design @ UC", "Doctorate in HCI @ UC", "UX Design @ CCHMC"],
  },
  {
    city: "Portland",
    country: "OR",
    tags: ["UX Internship @ Hewlett Packard"],
  },
  {
    city: "San Francisco",
    country: "CA",
    tags: ["Currently UX Design + Research @ Natera"],
  },
];

const W = 200;
const H = 264;
const C = "#c4a8f0";
const STAMP_BG = "#2d1845";
const SCENE_BG = "#100620";

function stampEdge(): string {
  const r = 4;
  const m = 5;
  const iw = W - 2 * m;
  const ih = H - 2 * m;
  const nx = Math.round(iw / (r * 2));
  const ny = Math.round(ih / (r * 2));
  const xs = iw / nx;
  const ys = ih / ny;
  let d = `M${m},${m}`;
  for (let i = 0; i < nx; i++) d += `A${r} ${r} 0 0 0 ${(m + (i + 1) * xs).toFixed(1)} ${m}`;
  for (let i = 0; i < ny; i++) d += `A${r} ${r} 0 0 0 ${W - m} ${(m + (i + 1) * ys).toFixed(1)}`;
  for (let i = nx; i > 0; i--) d += `A${r} ${r} 0 0 0 ${(m + (i - 1) * xs).toFixed(1)} ${H - m}`;
  for (let i = ny; i > 0; i--) d += `A${r} ${r} 0 0 0 ${m} ${(m + (i - 1) * ys).toFixed(1)}`;
  return d + "Z";
}

const EDGE = stampEdge();

const PX = 14;
const PY = 14;
const PW = W - 2 * PX;
const PH = 180;
const PB = PY + PH;

function Rays({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      {[-45, -22, 0, 22, 45].map((a) => {
        const rad = (a * Math.PI) / 180;
        return (
          <line
            key={a}
            x1={cx} y1={cy}
            x2={cx + Math.sin(rad) * 180}
            y2={cy - Math.cos(rad) * 180}
            stroke={C} strokeWidth="18" opacity="0.04"
          />
        );
      })}
    </g>
  );
}

function GuadalajaraScene() {
  return (
    <g>
      <Rays cx={100} cy={105} />
      <path
        d="M64,194 L64,108 L72,80 L78,62 L84,80 L84,108 L88,108 L88,130 Q100,110 112,130 L112,108 L116,108 L116,80 L122,62 L128,80 L136,108 L136,194Z"
        fill={C} fillOpacity="0.22"
      />
      <path
        d="M64,194 L64,108 L72,80 L78,62 L84,80 L84,108 L88,108 L88,130 Q100,110 112,130 L112,108 L116,108 L116,80 L122,62 L128,80 L136,108 L136,194"
        fill="none" stroke={C} strokeWidth="1.2" opacity="0.55"
      />
      <line x1="78" y1="52" x2="78" y2="62" stroke={C} strokeWidth="1.5" opacity="0.65" />
      <line x1="74" y1="56" x2="82" y2="56" stroke={C} strokeWidth="1.5" opacity="0.65" />
      <line x1="122" y1="52" x2="122" y2="62" stroke={C} strokeWidth="1.5" opacity="0.65" />
      <line x1="118" y1="56" x2="126" y2="56" stroke={C} strokeWidth="1.5" opacity="0.65" />
      <circle cx="86" cy="148" r="4" fill={C} fillOpacity="0.08" stroke={C} strokeWidth="0.7" opacity="0.4" />
      <circle cx="100" cy="144" r="4.5" fill={C} fillOpacity="0.08" stroke={C} strokeWidth="0.7" opacity="0.4" />
      <circle cx="114" cy="148" r="4" fill={C} fillOpacity="0.08" stroke={C} strokeWidth="0.7" opacity="0.4" />
      <path d="M90,194 Q96,180 102,194" fill="none" stroke={C} strokeWidth="0.8" opacity="0.4" />
      <path d="M106,194 Q112,180 118,194" fill="none" stroke={C} strokeWidth="0.8" opacity="0.4" />
      <path d="M30,194 Q36,174 42,194" fill={C} fillOpacity="0.18" />
      <path d="M26,194 Q36,168 46,194" fill={C} fillOpacity="0.1" />
      <path d="M158,194 Q164,174 170,194" fill={C} fillOpacity="0.18" />
      <path d="M154,194 Q164,168 174,194" fill={C} fillOpacity="0.1" />
      <rect x={PX} y={PB - 3} width={PW} height="3" fill={C} opacity="0.06" />
    </g>
  );
}

function ValenciaScene() {
  return (
    <g>
      <Rays cx={100} cy={95} />
      <path d="M28,142 Q100,62 172,142" fill={C} fillOpacity="0.12" />
      <path d="M28,142 Q100,222 172,142" fill={C} fillOpacity="0.08" />
      <path d="M28,142 Q100,62 172,142" fill="none" stroke={C} strokeWidth="1.2" opacity="0.55" />
      <path d="M28,142 Q100,222 172,142" fill="none" stroke={C} strokeWidth="1.2" opacity="0.55" />
      <ellipse cx="100" cy="142" rx="40" ry="30" fill={C} fillOpacity="0.06" stroke={C} strokeWidth="1" opacity="0.45" />
      <circle cx="100" cy="142" r="15" fill={C} fillOpacity="0.12" stroke={C} strokeWidth="0.8" opacity="0.5" />
      <circle cx="100" cy="142" r="5" fill={C} fillOpacity="0.2" />
      <path d="M32,165 Q100,180 168,165" stroke={C} strokeWidth="0.7" opacity="0.18" fill="none" />
      <path d="M38,174 Q100,186 162,174" stroke={C} strokeWidth="0.6" opacity="0.1" fill="none" />
      <path d="M44,182 Q100,192 156,182" stroke={C} strokeWidth="0.5" opacity="0.06" fill="none" />
      <circle cx="154" cy="78" r="9" fill={C} fillOpacity="0.18" stroke={C} strokeWidth="0.8" opacity="0.45" />
      <path d="M154,69 Q158,62 161,66" stroke={C} strokeWidth="1" opacity="0.4" fill="none" />
      <path d="M147,73 Q142,68 145,63" stroke={C} strokeWidth="1" opacity="0.35" fill="none" />
    </g>
  );
}

function MontrealScene() {
  return (
    <g>
      <Rays cx={78} cy={92} />
      <path d="M14,194 L48,138 L72,100 L98,118 L128,108 L186,194Z" fill={C} fillOpacity="0.1" />
      <path d="M14,194 L48,138 L72,100 L98,118 L128,108 L186,194" fill="none" stroke={C} strokeWidth="1.2" opacity="0.45" />
      <line x1="72" y1="80" x2="72" y2="100" stroke={C} strokeWidth="2.5" opacity="0.75" />
      <line x1="65" y1="87" x2="79" y2="87" stroke={C} strokeWidth="2.5" opacity="0.75" />
      <circle cx="72" cy="90" r="16" fill={C} fillOpacity="0.05" />
      <circle cx="72" cy="90" r="9" fill={C} fillOpacity="0.06" />
      <path d="M28,194 L28,170 L36,170 L36,175 L43,175 L43,162 L50,162 L50,172 L56,172 L56,164 L63,164 L63,174 L70,174 L70,194" fill={C} fillOpacity="0.16" />
      <path d="M112,194 L112,172 L118,172 L118,176 L124,176 L124,164 L130,164 L130,174 L136,174 L136,180 L144,180 L144,194" fill={C} fillOpacity="0.16" />
      <path d="M38,194 Q100,178 162,194" fill="none" stroke={C} strokeWidth="0.8" opacity="0.25" strokeDasharray="4,3" />
    </g>
  );
}

function CincinnatiScene() {
  return (
    <g>
      <Rays cx={100} cy={82} />
      <rect x="52" y="108" width="12" height="86" fill={C} fillOpacity="0.22" stroke={C} strokeWidth="0.8" opacity="0.45" />
      <rect x="136" y="108" width="12" height="86" fill={C} fillOpacity="0.22" stroke={C} strokeWidth="0.8" opacity="0.45" />
      <path d="M52,108 L58,94 L64,108" fill={C} fillOpacity="0.22" stroke={C} strokeWidth="1" opacity="0.5" />
      <path d="M136,108 L142,94 L148,108" fill={C} fillOpacity="0.22" stroke={C} strokeWidth="1" opacity="0.5" />
      <path d="M58,98 Q100,145 142,98" fill="none" stroke={C} strokeWidth="2" opacity="0.55" />
      {[[74, 113], [87, 120], [100, 125], [113, 120], [126, 113]].map(([x, y]) => (
        <line key={x} x1={x} y1={y} x2={x} y2={194} stroke={C} strokeWidth="0.7" opacity="0.22" />
      ))}
      <line x1="30" y1="194" x2="170" y2="194" stroke={C} strokeWidth="2.5" opacity="0.45" />
      <path d="M14,200 Q60,195 100,200 Q140,205 186,200" stroke={C} strokeWidth="0.7" opacity="0.18" fill="none" />
      <path d="M14,206 Q55,202 100,206 Q145,210 186,206" stroke={C} strokeWidth="0.5" opacity="0.1" fill="none" />
    </g>
  );
}

function PortlandScene() {
  return (
    <g>
      <Rays cx={102} cy={82} />
      <path d="M38,194 L78,98 L88,114 L102,82 L116,110 L162,194Z" fill={C} fillOpacity="0.12" />
      <path d="M38,194 L78,98 L88,114 L102,82 L116,110 L162,194" fill="none" stroke={C} strokeWidth="1.2" opacity="0.45" />
      <path d="M78,98 L88,114 L102,82 L116,110" fill={C} fillOpacity="0.08" />
      <path d="M81,104 L88,117 L106,90" fill="none" stroke={C} strokeWidth="0.7" opacity="0.3" />
      {[
        [26, 38], [42, 46], [56, 32],
        [144, 42], [160, 35], [175, 28],
      ].map(([x, h], i) => (
        <polygon
          key={i}
          points={`${x - h * 0.32},194 ${x + h * 0.32},194 ${x},${194 - h}`}
          fill={C} fillOpacity="0.2" stroke={C} strokeWidth="0.6" opacity="0.25"
        />
      ))}
      <rect x={PX} y={PB + 10} width={PW} height="3" fill={C} opacity="0.05" />
    </g>
  );
}

function SanFranciscoScene() {
  return (
    <g>
      <Rays cx={100} cy={78} />
      <rect x="54" y="85" width="11" height="109" fill={C} fillOpacity="0.28" stroke={C} strokeWidth="0.8" opacity="0.45" />
      <rect x="135" y="85" width="11" height="109" fill={C} fillOpacity="0.28" stroke={C} strokeWidth="0.8" opacity="0.45" />
      <rect x="52" y="80" width="15" height="7" fill={C} fillOpacity="0.3" stroke={C} strokeWidth="0.7" opacity="0.4" />
      <rect x="133" y="80" width="15" height="7" fill={C} fillOpacity="0.3" stroke={C} strokeWidth="0.7" opacity="0.4" />
      <path d="M22,88 Q60,130 100,138 Q140,130 178,88" fill="none" stroke={C} strokeWidth="2" opacity="0.55" />
      {[[72, 126], [86, 133], [100, 138], [114, 133], [128, 126]].map(([x, y]) => (
        <line key={x} x1={x} y1={y} x2={x} y2={194} stroke={C} strokeWidth="0.6" opacity="0.2" />
      ))}
      <line x1="14" y1="194" x2="186" y2="194" stroke={C} strokeWidth="2.5" opacity="0.45" />
      <path d="M14,170 Q50,160 80,170 Q110,180 140,170 Q170,160 186,170" fill="none" stroke={C} strokeWidth="0.8" opacity="0.12" />
      <path d="M14,200 Q60,196 100,200 Q140,204 186,200" stroke={C} strokeWidth="0.7" opacity="0.15" fill="none" />
    </g>
  );
}

const SCENES = [
  GuadalajaraScene,
  ValenciaScene,
  MontrealScene,
  CincinnatiScene,
  PortlandScene,
  SanFranciscoScene,
];

export default function MapSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Places</div>
        <div className="section-title">Places I&apos;ve Called Home</div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-in" delay={100}>
        <div className="stamps-grid">
          {locations.map((loc, i) => {
            const Scene = SCENES[i];
            const isActive = active === i;
            const isCurrent = loc.city === "San Francisco";
            return (
              <div key={loc.city} className="stamp-cell">
                <button
                  className={`stamp-card${isActive ? " stamp-card--active" : ""}`}
                  onClick={() => setActive(active === i ? null : i)}
                  aria-label={`${loc.city}, ${loc.country}`}
                >
                  <svg viewBox={`0 0 ${W} ${H}`} className="stamp-svg" aria-hidden="true">
                    <defs>
                      <clipPath id={`sc${i}`}>
                        <path d={EDGE} />
                      </clipPath>
                    </defs>
                    <g clipPath={`url(#sc${i})`}>
                      <rect width={W} height={H} fill={STAMP_BG} />
                      <rect x={PX} y={PY} width={PW} height={PH} fill={SCENE_BG} rx="2" />
                      <Scene />
                      <text
                        x={W / 2} y={H - 32}
                        textAnchor="middle"
                        fontFamily="'Instrument Serif', Georgia, serif"
                        fontSize="20" fill="#ffffff" fontWeight="400"
                      >
                        {loc.city}
                      </text>
                      <text
                        x={W / 2} y={H - 16}
                        textAnchor="middle"
                        fontFamily="Inter, sans-serif"
                        fontSize="8" fill={C} opacity="0.55"
                        letterSpacing="0.14em"
                      >
                        {loc.country.toUpperCase()}
                      </text>
                      {isCurrent && (
                        <g opacity="0.28" transform="translate(155, 46) rotate(-12)">
                          <circle r="18" fill="none" stroke={C} strokeWidth="1.5" />
                          <circle r="14" fill="none" stroke={C} strokeWidth="0.5" />
                          <text
                            textAnchor="middle" y="4"
                            fontFamily="Inter, sans-serif"
                            fontSize="7" fill={C} fontWeight="700"
                          >
                            NOW
                          </text>
                        </g>
                      )}
                    </g>
                  </svg>
                </button>
                {isActive && (
                  <div className="stamp-detail">
                    {loc.tags.map((tag) => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
