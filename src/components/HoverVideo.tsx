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

export function HoverVideoEmbed({ src, poster }: { src: string; poster?: string }) {
  const [hovered, setHovered] = useState(false);

  const mutedSrc = src.includes("muted=1") ? src : src + "&muted=1";

  return (
    <div
      className="cs-preview-video"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <iframe
          src={mutedSrc}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          tabIndex={-1}
        />
      ) : poster ? (
        <img src={poster} alt="" className="cs-preview-poster" />
      ) : (
        <div className="cs-preview-poster-blank" />
      )}
    </div>
  );
}
