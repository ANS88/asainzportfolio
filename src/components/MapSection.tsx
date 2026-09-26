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
const STAMP_BG = "#3a2358";
const SCENE_BG = "#110722";

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
const GND = 192;

function Rays({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      {[-50, -30, -10, 10, 30, 50].map((a) => {
        const rad = (a * Math.PI) / 180;
        return (
          <line key={a} x1={cx} y1={cy} x2={cx + Math.sin(rad) * 200} y2={cy - Math.cos(rad) * 200}
            stroke={C} strokeWidth="22" opacity="0.035" />
        );
      })}
    </g>
  );
}

function GuadalajaraScene() {
  return (
    <g>
      <Rays cx={100} cy={100} />
      {/* Sun */}
      <circle cx="155" cy="45" r="14" fill={C} fillOpacity="0.08" />
      <circle cx="155" cy="45" r="10" fill={C} fillOpacity="0.06" />
      {/* Background buildings */}
      <rect x="18" y="152" width="20" height="40" fill={C} fillOpacity="0.1" />
      <rect x="22" y="142" width="12" height="50" fill={C} fillOpacity="0.08" />
      <rect x="160" y="155" width="18" height="37" fill={C} fillOpacity="0.1" />
      <rect x="166" y="145" width="10" height="47" fill={C} fillOpacity="0.08" />
      {/* Cathedral main body - solid fill */}
      <path d="M56,192 L56,118 L62,118 L62,88 L70,68 L78,48 L86,68 L92,88 L92,118 L92,125 Q100,102 108,125 L108,118 L108,88 L114,68 L122,48 L130,68 L138,88 L138,118 L144,118 L144,192Z"
        fill={C} fillOpacity="0.35" />
      <path d="M56,192 L56,118 L62,118 L62,88 L70,68 L78,48 L86,68 L92,88 L92,118 L92,125 Q100,102 108,125 L108,118 L108,88 L114,68 L122,48 L130,68 L138,88 L138,118 L144,118 L144,192"
        fill="none" stroke={C} strokeWidth="1.2" opacity="0.7" />
      {/* Spire crosses */}
      <line x1="78" y1="36" x2="78" y2="48" stroke={C} strokeWidth="2" opacity="0.8" />
      <line x1="73" y1="41" x2="83" y2="41" stroke={C} strokeWidth="2" opacity="0.8" />
      <line x1="122" y1="36" x2="122" y2="48" stroke={C} strokeWidth="2" opacity="0.8" />
      <line x1="117" y1="41" x2="127" y2="41" stroke={C} strokeWidth="2" opacity="0.8" />
      {/* Bell tower arches */}
      <path d="M70,78 Q78,68 86,78" fill={C} fillOpacity="0.06" stroke={C} strokeWidth="0.8" opacity="0.55" />
      <path d="M114,78 Q122,68 130,78" fill={C} fillOpacity="0.06" stroke={C} strokeWidth="0.8" opacity="0.55" />
      {/* Dome detail + cross */}
      <path d="M92,125 Q100,102 108,125" fill="none" stroke={C} strokeWidth="1" opacity="0.6" />
      <line x1="100" y1="95" x2="100" y2="103" stroke={C} strokeWidth="1.2" opacity="0.65" />
      <line x1="97" y1="98" x2="103" y2="98" stroke={C} strokeWidth="1.2" opacity="0.65" />
      {/* Rose windows on towers */}
      <circle cx="78" cy="98" r="5" fill={C} fillOpacity="0.06" stroke={C} strokeWidth="0.7" opacity="0.5" />
      <circle cx="122" cy="98" r="5" fill={C} fillOpacity="0.06" stroke={C} strokeWidth="0.7" opacity="0.5" />
      {/* Facade horizontal lines */}
      <line x1="56" y1="132" x2="144" y2="132" stroke={C} strokeWidth="0.6" opacity="0.3" />
      <line x1="56" y1="152" x2="144" y2="152" stroke={C} strokeWidth="0.5" opacity="0.25" />
      {/* Window row */}
      {[74, 86, 100, 114, 126].map((x) => (
        <circle key={x} cx={x} cy={142} r="3.5" fill={C} fillOpacity="0.08" stroke={C} strokeWidth="0.6" opacity="0.45" />
      ))}
      {/* Rectangular windows */}
      {[70, 84, 116, 130].map((x) => (
        <rect key={x} x={x} y="158" width="6" height="12" rx="1" fill={C} fillOpacity="0.06" stroke={C} strokeWidth="0.5" opacity="0.35" />
      ))}
      {/* Entrance arches */}
      <path d="M86,192 Q93,175 100,192" fill={C} fillOpacity="0.06" stroke={C} strokeWidth="0.9" opacity="0.5" />
      <path d="M100,192 Q107,175 114,192" fill={C} fillOpacity="0.06" stroke={C} strokeWidth="0.9" opacity="0.5" />
      {/* Agave plants - layered */}
      <path d="M32,192 L35,170 L38,192" fill={C} fillOpacity="0.3" />
      <path d="M28,192 L35,162 L42,192" fill={C} fillOpacity="0.18" />
      <path d="M24,192 L35,155 L46,192" fill={C} fillOpacity="0.08" />
      <path d="M162,192 L165,170 L168,192" fill={C} fillOpacity="0.3" />
      <path d="M158,192 L165,162 L172,192" fill={C} fillOpacity="0.18" />
      <path d="M154,192 L165,155 L176,192" fill={C} fillOpacity="0.08" />
      {/* Ground */}
      <rect x={PX} y={GND - 2} width={PW} height="4" fill={C} opacity="0.1" />
      <line x1={PX} y1={GND - 2} x2={PX + PW} y2={GND - 2} stroke={C} strokeWidth="0.5" opacity="0.25" />
    </g>
  );
}

function ValenciaScene() {
  return (
    <g>
      <Rays cx={100} cy={92} />
      {/* Sun */}
      <circle cx="152" cy="42" r="16" fill={C} fillOpacity="0.1" />
      <circle cx="152" cy="42" r="11" fill={C} fillOpacity="0.07" />
      {/* Palm trees */}
      <line x1="34" y1="192" x2="34" y2="130" stroke={C} strokeWidth="2" opacity="0.25" />
      <path d="M34,130 Q20,118 14,108" stroke={C} strokeWidth="1.5" opacity="0.2" fill="none" />
      <path d="M34,130 Q24,120 18,118" stroke={C} strokeWidth="1.2" opacity="0.15" fill="none" />
      <path d="M34,130 Q46,118 54,112" stroke={C} strokeWidth="1.5" opacity="0.2" fill="none" />
      <path d="M34,130 Q44,122 50,122" stroke={C} strokeWidth="1.2" opacity="0.15" fill="none" />
      <line x1="170" y1="192" x2="170" y2="135" stroke={C} strokeWidth="1.8" opacity="0.22" />
      <path d="M170,135 Q158,124 152,116" stroke={C} strokeWidth="1.3" opacity="0.18" fill="none" />
      <path d="M170,135 Q180,124 186,120" stroke={C} strokeWidth="1.3" opacity="0.18" fill="none" />
      {/* Walkway/water edge */}
      <rect x={PX} y="162" width={PW} height="30" fill={C} fillOpacity="0.04" />
      <line x1={PX} y1="162" x2={PX + PW} y2="162" stroke={C} strokeWidth="0.6" opacity="0.2" />
      {/* Hemisfèric - the eye - solid fills */}
      <path d="M32,142 Q100,62 168,142" fill={C} fillOpacity="0.2" />
      <path d="M32,142 Q100,192 168,142" fill={C} fillOpacity="0.15" />
      <path d="M32,142 Q100,62 168,142" fill="none" stroke={C} strokeWidth="1.5" opacity="0.65" />
      <path d="M32,142 Q100,192 168,142" fill="none" stroke={C} strokeWidth="1.5" opacity="0.65" />
      {/* Structural ribs */}
      <path d="M50,142 Q100,88 150,142" fill="none" stroke={C} strokeWidth="0.5" opacity="0.2" />
      <path d="M68,142 Q100,105 132,142" fill="none" stroke={C} strokeWidth="0.4" opacity="0.15" />
      {/* Glass facade panels */}
      <g opacity="0.5">
        <rect x="72" y="125" width="8" height="22" rx="1" fill={C} fillOpacity="0.15" stroke={C} strokeWidth="0.5" />
        <rect x="82" y="121" width="8" height="26" rx="1" fill={C} fillOpacity="0.15" stroke={C} strokeWidth="0.5" />
        <rect x="92" y="119" width="8" height="28" rx="1" fill={C} fillOpacity="0.18" stroke={C} strokeWidth="0.5" />
        <rect x="102" y="119" width="8" height="28" rx="1" fill={C} fillOpacity="0.15" stroke={C} strokeWidth="0.5" />
        <rect x="112" y="121" width="8" height="26" rx="1" fill={C} fillOpacity="0.15" stroke={C} strokeWidth="0.5" />
        <rect x="122" y="125" width="8" height="22" rx="1" fill={C} fillOpacity="0.15" stroke={C} strokeWidth="0.5" />
      </g>
      {/* Entrance arch */}
      <path d="M90,158 Q100,142 110,158" fill={C} fillOpacity="0.12" stroke={C} strokeWidth="0.6" opacity="0.4" />
      {/* Reflections in pool */}
      <path d="M36,168 Q100,178 164,168" stroke={C} strokeWidth="0.7" opacity="0.15" fill="none" />
      <path d="M42,174 Q100,182 158,174" stroke={C} strokeWidth="0.5" opacity="0.1" fill="none" />
      <path d="M48,180 Q100,186 152,180" stroke={C} strokeWidth="0.4" opacity="0.07" fill="none" />
      {/* Orange */}
      <circle cx="152" cy="78" r="8" fill={C} fillOpacity="0.25" stroke={C} strokeWidth="1" opacity="0.55" />
      <path d="M152,70 Q156,64 159,68" stroke={C} strokeWidth="1.2" opacity="0.5" fill="none" />
      <path d="M146,74 Q142,70 145,66" stroke={C} strokeWidth="1" opacity="0.4" fill="none" />
      {/* Ground */}
      <line x1={PX} y1={GND} x2={PX + PW} y2={GND} stroke={C} strokeWidth="0.5" opacity="0.2" />
    </g>
  );
}

function MontrealScene() {
  return (
    <g>
      <Rays cx={76} cy={88} />
      {/* Stars */}
      <circle cx="150" cy="35" r="1.5" fill={C} fillOpacity="0.35" />
      <circle cx="42" cy="48" r="1" fill={C} fillOpacity="0.25" />
      <circle cx="168" cy="62" r="1.2" fill={C} fillOpacity="0.3" />
      <circle cx="130" cy="28" r="0.8" fill={C} fillOpacity="0.2" />
      <circle cx="58" cy="32" r="1" fill={C} fillOpacity="0.22" />
      {/* Moon */}
      <circle cx="158" cy="42" r="10" fill={C} fillOpacity="0.1" />
      <circle cx="162" cy="39" r="9" fill={SCENE_BG} />
      {/* Mountain mass - layered for depth */}
      <path d="M14,194 L28,162 L45,138 L60,125 L72,100 L84,110 L98,118 L115,108 L128,105 L150,120 L175,140 L186,194Z"
        fill={C} fillOpacity="0.18" />
      <path d="M14,194 L42,145 L60,125 L72,100 L98,118 L128,105 L186,194"
        fill="none" stroke={C} strokeWidth="1.2" opacity="0.55" />
      {/* Tree texture on mountain */}
      {[[32, 170], [45, 155], [55, 142], [108, 130], [125, 125], [140, 135], [155, 148], [170, 162]].map(([x, y], i) => (
        <polygon key={i} points={`${x - 4},${y + 8} ${x + 4},${y + 8} ${x},${y}`}
          fill={C} fillOpacity="0.1" />
      ))}
      {/* Snow on peak */}
      <path d="M66,108 L72,100 L80,106" fill={C} fillOpacity="0.1" stroke={C} strokeWidth="0.6" opacity="0.3" />
      {/* Illuminated cross - prominent */}
      <line x1="72" y1="78" x2="72" y2="100" stroke={C} strokeWidth="3" opacity="0.85" />
      <line x1="64" y1="86" x2="80" y2="86" stroke={C} strokeWidth="3" opacity="0.85" />
      {/* Cross glow halos */}
      <circle cx="72" cy="89" r="20" fill={C} fillOpacity="0.04" />
      <circle cx="72" cy="89" r="12" fill={C} fillOpacity="0.06" />
      <circle cx="72" cy="89" r="6" fill={C} fillOpacity="0.08" />
      {/* City skyline - varied heights and detail */}
      <path d="M18,194 L18,174 L24,174 L24,170 L28,170 L28,166 L34,166 L34,172 L38,172 L38,162 L42,162 L42,158 L48,158 L48,165 L52,165 L52,170 L56,170 L56,160 L60,160 L60,168 L65,168 L65,175 L70,175 L70,194"
        fill={C} fillOpacity="0.25" />
      <path d="M106,194 L106,175 L110,175 L110,168 L114,168 L114,172 L120,172 L120,162 L124,162 L124,158 L128,158 L128,165 L132,165 L132,170 L136,170 L136,174 L142,174 L142,180 L148,180 L148,194"
        fill={C} fillOpacity="0.25" />
      {/* Olympic Stadium tower hint */}
      <path d="M46,158 L48,148 L50,158" fill={C} fillOpacity="0.15" stroke={C} strokeWidth="0.5" opacity="0.35" />
      {/* Bridge arch */}
      <path d="M35,194 Q100,176 165,194" fill="none" stroke={C} strokeWidth="1.2" opacity="0.35" strokeDasharray="5,3" />
      {/* Ground */}
      <rect x={PX} y={GND - 2} width={PW} height="4" fill={C} opacity="0.08" />
    </g>
  );
}

function CincinnatiScene() {
  return (
    <g>
      <Rays cx={100} cy={80} />
      {/* Sun */}
      <circle cx="100" cy="38" r="16" fill={C} fillOpacity="0.1" />
      <circle cx="100" cy="38" r="10" fill={C} fillOpacity="0.07" />
      {/* Clouds */}
      <ellipse cx="48" cy="52" rx="18" ry="5" fill={C} fillOpacity="0.06" />
      <ellipse cx="155" cy="46" rx="22" ry="6" fill={C} fillOpacity="0.05" />
      {/* Background skyline */}
      <path d="M18,150 L18,135 L24,135 L24,140 L30,140 L30,130 L36,130 L36,138 L42,138 L42,150"
        fill={C} fillOpacity="0.1" />
      <path d="M158,150 L158,138 L164,138 L164,132 L170,132 L170,140 L176,140 L176,150"
        fill={C} fillOpacity="0.1" />
      {/* Bridge towers - solid with gothic detail */}
      <rect x="50" y="105" width="14" height="87" fill={C} fillOpacity="0.38" />
      <rect x="136" y="105" width="14" height="87" fill={C} fillOpacity="0.38" />
      {/* Gothic arch openings in towers */}
      <path d="M53,120 Q57,112 61,120" fill={SCENE_BG} stroke={C} strokeWidth="0.6" opacity="0.5" />
      <path d="M53,135 Q57,127 61,135" fill={SCENE_BG} stroke={C} strokeWidth="0.6" opacity="0.5" />
      <path d="M139,120 Q143,112 147,120" fill={SCENE_BG} stroke={C} strokeWidth="0.6" opacity="0.5" />
      <path d="M139,135 Q143,127 147,135" fill={SCENE_BG} stroke={C} strokeWidth="0.6" opacity="0.5" />
      {/* Tower outlines */}
      <rect x="50" y="105" width="14" height="87" fill="none" stroke={C} strokeWidth="1" opacity="0.6" />
      <rect x="136" y="105" width="14" height="87" fill="none" stroke={C} strokeWidth="1" opacity="0.6" />
      {/* Gothic tower peaks */}
      <path d="M50,105 L57,88 L64,105" fill={C} fillOpacity="0.38" stroke={C} strokeWidth="1" opacity="0.65" />
      <path d="M136,105 L143,88 L150,105" fill={C} fillOpacity="0.38" stroke={C} strokeWidth="1" opacity="0.65" />
      {/* Finials on tower tops */}
      <line x1="57" y1="82" x2="57" y2="88" stroke={C} strokeWidth="1.5" opacity="0.6" />
      <line x1="143" y1="82" x2="143" y2="88" stroke={C} strokeWidth="1.5" opacity="0.6" />
      {/* Main cable - thick */}
      <path d="M57,92 Q100,148 143,92" fill="none" stroke={C} strokeWidth="2.5" opacity="0.65" />
      {/* Suspender cables */}
      {[[72, 113], [82, 122], [92, 130], [100, 133], [108, 130], [118, 122], [128, 113]].map(([x, y]) => (
        <line key={x} x1={x} y1={y} x2={x} y2={GND} stroke={C} strokeWidth="0.7" opacity="0.3" />
      ))}
      {/* Bridge deck - prominent */}
      <rect x="30" y={GND - 4} width="140" height="6" fill={C} fillOpacity="0.3" />
      <line x1="30" y1={GND - 4} x2="170" y2={GND - 4} stroke={C} strokeWidth="1" opacity="0.5" />
      <line x1="30" y1={GND + 2} x2="170" y2={GND + 2} stroke={C} strokeWidth="0.6" opacity="0.35" />
      {/* Railing detail */}
      {[38, 46, 68, 76, 84, 92, 108, 116, 124, 132, 154, 162].map((x) => (
        <line key={x} x1={x} y1={GND - 4} x2={x} y2={GND - 1} stroke={C} strokeWidth="0.5" opacity="0.25" />
      ))}
      {/* River */}
      <path d="M14,200 Q55,195 100,200 Q145,205 186,200" stroke={C} strokeWidth="1" opacity="0.22" fill="none" />
      <path d="M14,206 Q60,202 100,206 Q140,210 186,206" stroke={C} strokeWidth="0.7" opacity="0.12" fill="none" />
      <path d="M14,212 Q65,208 100,212 Q135,216 186,212" stroke={C} strokeWidth="0.5" opacity="0.07" fill="none" />
    </g>
  );
}

function PortlandScene() {
  return (
    <g>
      <Rays cx={100} cy={78} />
      {/* Sun behind mountain */}
      <circle cx="100" cy="72" r="22" fill={C} fillOpacity="0.08" />
      <circle cx="100" cy="72" r="15" fill={C} fillOpacity="0.06" />
      {/* Clouds */}
      <ellipse cx="45" cy="55" rx="20" ry="5" fill={C} fillOpacity="0.06" />
      <ellipse cx="160" cy="48" rx="16" ry="4" fill={C} fillOpacity="0.05" />
      {/* Distant mountain range */}
      <path d="M14,170 L35,145 L55,155 L70,140 L85,148 L130,142 L148,150 L165,138 L186,155 L186,192 L14,192Z"
        fill={C} fillOpacity="0.08" />
      {/* Mt Hood - bold filled shape */}
      <path d="M35,192 L72,105 L82,118 L92,98 L100,78 L108,95 L118,108 L128,115 L165,192Z"
        fill={C} fillOpacity="0.25" />
      <path d="M35,192 L72,105 L82,118 L92,98 L100,78 L108,95 L118,108 L128,115 L165,192"
        fill="none" stroke={C} strokeWidth="1.2" opacity="0.6" />
      {/* Snow cap - brighter fill */}
      <path d="M72,105 L82,118 L92,98 L100,78 L108,95 L118,108Z" fill={C} fillOpacity="0.12" />
      <path d="M76,110 L84,120 L94,102 L100,84 L106,98 L114,112"
        fill="none" stroke={C} strokeWidth="0.8" opacity="0.35" />
      {/* Ridges on mountain */}
      <path d="M85,130 L100,108 L115,128" fill="none" stroke={C} strokeWidth="0.5" opacity="0.2" />
      <path d="M78,145 L100,118 L122,140" fill="none" stroke={C} strokeWidth="0.4" opacity="0.15" />
      {/* Pine forest - back row (smaller, lighter) */}
      {[[22, 22], [32, 26], [42, 30], [50, 24], [150, 28], [160, 24], [170, 20], [178, 18]].map(([x, h], i) => (
        <polygon key={`b${i}`}
          points={`${x - h * 0.28},${GND} ${x + h * 0.28},${GND} ${x},${GND - h}`}
          fill={C} fillOpacity="0.15" />
      ))}
      {/* Pine forest - front row (larger, darker) */}
      {[[18, 36], [30, 44], [44, 50], [56, 38], [62, 30],
        [138, 34], [148, 48], [162, 42], [174, 32], [182, 26]].map(([x, h], i) => (
        <g key={`f${i}`}>
          <polygon
            points={`${x - h * 0.3},${GND} ${x + h * 0.3},${GND} ${x},${GND - h}`}
            fill={C} fillOpacity="0.28" />
          <polygon
            points={`${x - h * 0.22},${GND - h * 0.35} ${x + h * 0.22},${GND - h * 0.35} ${x},${GND - h}`}
            fill={C} fillOpacity="0.18" />
          <line x1={x} y1={GND} x2={x} y2={GND - h * 0.15} stroke={C} strokeWidth="1" opacity="0.2" />
        </g>
      ))}
      {/* Ground */}
      <rect x={PX} y={GND - 2} width={PW} height="4" fill={C} opacity="0.08" />
      <line x1={PX} y1={GND - 2} x2={PX + PW} y2={GND - 2} stroke={C} strokeWidth="0.4" opacity="0.2" />
    </g>
  );
}

function SanFranciscoScene() {
  return (
    <g>
      <Rays cx={100} cy={75} />
      {/* Sun */}
      <circle cx="155" cy="38" r="14" fill={C} fillOpacity="0.1" />
      <circle cx="155" cy="38" r="9" fill={C} fillOpacity="0.07" />
      {/* Background hills */}
      <path d="M14,165 Q50,135 90,148 Q130,130 186,150 L186,192 L14,192Z"
        fill={C} fillOpacity="0.06" />
      {/* Background city hint */}
      <path d="M18,165 L18,155 L22,155 L22,160 L28,160 L28,150 L32,150 L32,158 L36,158 L36,165"
        fill={C} fillOpacity="0.08" />
      <path d="M162,155 L162,148 L166,148 L166,152 L170,152 L170,145 L174,145 L174,155"
        fill={C} fillOpacity="0.08" />
      {/* Golden Gate towers - solid and bold */}
      <rect x="52" y="82" width="14" height="110" fill={C} fillOpacity="0.42" />
      <rect x="134" y="82" width="14" height="110" fill={C} fillOpacity="0.42" />
      {/* Tower caps */}
      <rect x="50" y="76" width="18" height="8" rx="1" fill={C} fillOpacity="0.45" />
      <rect x="132" y="76" width="18" height="8" rx="1" fill={C} fillOpacity="0.45" />
      {/* Tower outlines */}
      <rect x="52" y="82" width="14" height="110" fill="none" stroke={C} strokeWidth="1" opacity="0.6" />
      <rect x="134" y="82" width="14" height="110" fill="none" stroke={C} strokeWidth="1" opacity="0.6" />
      {/* Tower cross-braces */}
      <line x1="52" y1="115" x2="66" y2="115" stroke={C} strokeWidth="0.8" opacity="0.4" />
      <line x1="52" y1="145" x2="66" y2="145" stroke={C} strokeWidth="0.8" opacity="0.4" />
      <line x1="52" y1="170" x2="66" y2="170" stroke={C} strokeWidth="0.8" opacity="0.4" />
      <line x1="134" y1="115" x2="148" y2="115" stroke={C} strokeWidth="0.8" opacity="0.4" />
      <line x1="134" y1="145" x2="148" y2="145" stroke={C} strokeWidth="0.8" opacity="0.4" />
      <line x1="134" y1="170" x2="148" y2="170" stroke={C} strokeWidth="0.8" opacity="0.4" />
      {/* Tower window openings */}
      {[96, 126, 156].map((y) => (
        <g key={y}>
          <rect x="55" y={y} width="3" height="5" fill={SCENE_BG} opacity="0.7" />
          <rect x="60" y={y} width="3" height="5" fill={SCENE_BG} opacity="0.7" />
          <rect x="137" y={y} width="3" height="5" fill={SCENE_BG} opacity="0.7" />
          <rect x="142" y={y} width="3" height="5" fill={SCENE_BG} opacity="0.7" />
        </g>
      ))}
      {/* Main cables - bold */}
      <path d="M18,82 Q59,132 100,140 Q141,132 182,82" fill="none" stroke={C} strokeWidth="2.5" opacity="0.7" />
      {/* Suspender cables */}
      {[[36, 102], [48, 114], [72, 128], [82, 134], [92, 138], [100, 140],
        [108, 138], [118, 134], [128, 128], [152, 114], [164, 102]].map(([x, y]) => (
        <line key={x} x1={x} y1={y} x2={x} y2={GND} stroke={C} strokeWidth="0.6" opacity="0.25" />
      ))}
      {/* Road deck - thick */}
      <rect x="14" y={GND - 5} width={PW + 4} height="7" fill={C} fillOpacity="0.3" />
      <line x1="14" y1={GND - 5} x2={PX + PW + 4} y2={GND - 5} stroke={C} strokeWidth="1" opacity="0.45" />
      {/* Road markings */}
      <line x1="14" y1={GND - 2} x2={PX + PW + 4} y2={GND - 2} stroke={C} strokeWidth="0.4" opacity="0.2" strokeDasharray="6,4" />
      {/* Fog layers */}
      <path d="M14,164 Q40,154 65,164 Q90,174 115,164 Q140,154 165,164 Q180,170 186,166"
        fill="none" stroke={C} strokeWidth="1.5" opacity="0.12" />
      <path d="M14,172 Q45,164 80,172 Q115,180 150,172 Q175,165 186,172"
        fill="none" stroke={C} strokeWidth="1" opacity="0.08" />
      {/* Water */}
      <path d="M14,200 Q55,195 100,200 Q145,205 186,200" stroke={C} strokeWidth="0.8" opacity="0.18" fill="none" />
      <path d="M14,206 Q60,202 100,206 Q140,210 186,206" stroke={C} strokeWidth="0.6" opacity="0.1" fill="none" />
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
                      <rect x={PX} y={PY} width={PW} height="180" fill={SCENE_BG} rx="2" />
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
                        fontSize="8" fill={C} opacity="0.6"
                        letterSpacing="0.14em"
                      >
                        {loc.country.toUpperCase()}
                      </text>
                      {isCurrent && (
                        <g opacity="0.3" transform="translate(155, 46) rotate(-12)">
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
