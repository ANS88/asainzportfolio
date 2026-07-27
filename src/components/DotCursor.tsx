"use client";

import { useEffect, useRef } from "react";

export default function DotCursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dot.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const show = () => { el.style.opacity = "1"; };
    const hide = () => { el.style.opacity = "0"; };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: -10,
        left: -10,
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "#F0386B",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        transition: "opacity .15s ease",
        willChange: "transform",
      }}
    />
  );
}
