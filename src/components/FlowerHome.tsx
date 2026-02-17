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
            <stop offset="0%" stopColor="#e8f0e0" />
            <stop offset="12%" stopColor="#d4a0d4" />
            <stop offset="28%" stopColor="#6848c8" />
            <stop offset="50%" stopColor="#3535d6" />
            <stop offset="100%" stopColor="#1a1a9e" />
          </radialGradient>
          <radialGradient id="fh-center" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0f4d8" />
            <stop offset="60%" stopColor="#c8a8d8" />
            <stop offset="100%" stopColor="#8060b8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d={FLOWER_PATH} fill="url(#fh-grad)" stroke="#0909e8" strokeWidth=".3" />
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <line
            key={`fhv${i}`}
            x1="20"
            y1="20"
            x2={20 + 16 * Math.cos(((angle - 90) * Math.PI) / 180)}
            y2={20 + 16 * Math.sin(((angle - 90) * Math.PI) / 180)}
            stroke="#3838e0"
            strokeWidth=".4"
            opacity=".45"
          />
        ))}
        <circle cx="20" cy="20" r="7" fill="url(#fh-center)" />
        <circle cx="20" cy="20" r="2.2" fill="#e8f0d0" />
        <circle cx="20" cy="20" r="1" fill="#c0d8a0" />
      </svg>
    </Link>
  );
}
