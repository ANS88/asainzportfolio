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

function MoonflowerSVG({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <circle cx="20" cy="20" r="4" fill="#4b49f7" opacity=".9" />
      <circle cx="20" cy="20" r="2" fill="#eef0ff" />
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 20 20)`}>
          <ellipse cx="20" cy="8" rx="5.5" ry="10" fill="white" stroke="#c7d2fe" strokeWidth=".5" opacity=".85" />
          <ellipse cx="20" cy="9" rx="3" ry="6" fill="#eef0ff" opacity=".5" />
        </g>
      ))}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <circle
          key={`s${i}`}
          cx={20 + 5.5 * Math.cos((angle * Math.PI) / 180)}
          cy={20 + 5.5 * Math.sin((angle * Math.PI) / 180)}
          r=".8"
          fill="#c7d2fe"
        />
      ))}
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
