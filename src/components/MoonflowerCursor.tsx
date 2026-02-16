"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface DroppedFlower {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
}

// Generate symmetric 5-petal flower path using polar coordinates
// r(θ) = R + amp * cos(5θ), perfectly symmetric
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

const CURSOR_PATH = petalPath(20, 20);

function MoonflowerSVG({ size = 40, idPrefix = "mf" }: { size?: number; idPrefix?: string }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <defs>
        <radialGradient id={`${idPrefix}-grad`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8f0e0" />
          <stop offset="12%" stopColor="#d4a0d4" />
          <stop offset="28%" stopColor="#6848c8" />
          <stop offset="50%" stopColor="#3535d6" />
          <stop offset="100%" stopColor="#1a1a9e" />
        </radialGradient>
        <radialGradient id={`${idPrefix}-center`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0f4d8" />
          <stop offset="60%" stopColor="#c8a8d8" />
          <stop offset="100%" stopColor="#8060b8" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Symmetric 5-petal bloom */}
      <path d={CURSOR_PATH} fill={`url(#${idPrefix}-grad)`} stroke="#2020a0" strokeWidth=".3" />
      {/* Vein lines between petals */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <line
          key={`v${i}`}
          x1="20"
          y1="20"
          x2={20 + 16 * Math.cos(((angle - 90) * Math.PI) / 180)}
          y2={20 + 16 * Math.sin(((angle - 90) * Math.PI) / 180)}
          stroke="#4848d0"
          strokeWidth=".4"
          opacity=".45"
        />
      ))}
      {/* Inner glow */}
      <circle cx="20" cy="20" r="7" fill={`url(#${idPrefix}-center)`} />
      {/* Center pistil */}
      <circle cx="20" cy="20" r="2.2" fill="#e8f0d0" />
      <circle cx="20" cy="20" r="1" fill="#c0d8a0" />
    </svg>
  );
}

export default function MoonflowerCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [flowers, setFlowers] = useState<DroppedFlower[]>([]);
  const nextId = useRef(0);

  const dropFlower = useCallback((e: MouseEvent) => {
    const id = nextId.current++;
    const size = 24 + Math.random() * 28;
    const rotation = Math.random() * 360;
    const speed = 4 + Math.random() * 6;

    setFlowers((prev) => {
      const next = [
        ...prev,
        {
          id,
          x: e.clientX + window.scrollX,
          y: e.clientY + window.scrollY,
          size,
          rotation,
          speed,
        },
      ];
      if (next.length > 30) return next.slice(-30);
      return next;
    });
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.15;
      curY += (mouseY - curY) * 0.15;
      cursor.style.left = `${curX}px`;
      cursor.style.top = `${curY}px`;
      requestAnimationFrame(animate);
    };

    // Double-click to drop flower — single clicks pass through normally
    const onDblClick = (e: MouseEvent) => {
      dropFlower(e);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("dblclick", onDblClick);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("dblclick", onDblClick);
    };
  }, [dropFlower]);

  return (
    <>
      {/* Dropped flowers */}
      {flowers.map((f) => (
        <div
          key={f.id}
          className="dropped-flower"
          style={{
            left: f.x,
            top: f.y,
            animationDuration: `${f.speed}s`,
          }}
        >
          <div style={{ transform: `rotate(${f.rotation}deg)` }}>
            <MoonflowerSVG size={f.size} />
          </div>
        </div>
      ))}

      {/* Cursor */}
      <div ref={cursorRef} className="moonflower-cursor" aria-hidden="true">
        <MoonflowerSVG />
      </div>
    </>
  );
}
