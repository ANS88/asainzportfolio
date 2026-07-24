"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Same petal path as MoonflowerCursor
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

const FLOWER_PATH = petalPath(20, 20);

export default function FlowerHome() {
  const pathname = usePathname();

  // Only show on inner pages, not homepage
  if (pathname === "/") return null;

  return (
    <Link href="/" className="flower-home" aria-label="Back to home">
      <svg viewBox="0 0 40 40" width="36" height="36" className="moonflower-spin">
        <defs>
          <radialGradient id="fh-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0e0d0" />
            <stop offset="12%" stopColor="#d4a088" />
            <stop offset="28%" stopColor="#c87060" />
            <stop offset="50%" stopColor="#a04830" />
            <stop offset="100%" stopColor="#8b3a2a" />
          </radialGradient>
          <radialGradient id="fh-center" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0e4d8" />
            <stop offset="60%" stopColor="#d8a890" />
            <stop offset="100%" stopColor="#b87060" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d={FLOWER_PATH} fill="url(#fh-grad)" stroke="#8b3a2a" strokeWidth=".3" />
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <line
            key={`fhv${i}`}
            x1="20"
            y1="20"
            x2={20 + 16 * Math.cos(((angle - 90) * Math.PI) / 180)}
            y2={20 + 16 * Math.sin(((angle - 90) * Math.PI) / 180)}
            stroke="#a04830"
            strokeWidth=".4"
            opacity=".45"
          />
        ))}
        <circle cx="20" cy="20" r="7" fill="url(#fh-center)" />
        <circle cx="20" cy="20" r="2.2" fill="#f0e4d0" />
        <circle cx="20" cy="20" r="1" fill="#d8c0a0" />
      </svg>
    </Link>
  );
}
