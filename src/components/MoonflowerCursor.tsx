"use client";

import { useEffect, useRef } from "react";

export default function MoonflowerCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

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

    window.addEventListener("mousemove", onMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div ref={cursorRef} className="moonflower-cursor" aria-hidden="true">
      <svg
        viewBox="0 0 40 40"
        width="40"
        height="40"
        className="moonflower-spin"
      >
        {/* Center */}
        <circle cx="20" cy="20" r="4" fill="#4b49f7" opacity=".9" />
        <circle cx="20" cy="20" r="2" fill="#eef0ff" />

        {/* 5 petals - trumpet moonflower shape */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 20 20)`}>
            <ellipse
              cx="20"
              cy="8"
              rx="5.5"
              ry="10"
              fill="white"
              stroke="#c7d2fe"
              strokeWidth=".5"
              opacity=".85"
            />
            <ellipse
              cx="20"
              cy="9"
              rx="3"
              ry="6"
              fill="#eef0ff"
              opacity=".5"
            />
          </g>
        ))}

        {/* Inner stamen dots */}
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
    </div>
  );
}
