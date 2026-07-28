"use client";

import { useState, useRef } from "react";

export function HoverVideoLocal({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="cs-preview-video"
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      }}
    >
      <video ref={ref} src={src} muted loop playsInline />
    </div>
  );
}

export function HoverVideoEmbed({ src }: { src: string }) {
  const mutedSrc = src.includes("mute=1") ? src : src + "&mute=1";

  return (
    <div className="cs-preview-video" style={{ pointerEvents: "none" }}>
      <iframe
        src={mutedSrc}
        allow="autoplay; encrypted-media"
        tabIndex={-1}
        loading="lazy"
      />
    </div>
  );
}
