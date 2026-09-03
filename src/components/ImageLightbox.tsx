"use client";

import { useState, useCallback, useEffect } from "react";

interface LightboxState {
  src: string;
  alt: string;
  type: "image" | "video" | "embed";
}

let openLightbox: (item: LightboxState) => void = () => {};

export function triggerLightbox(src: string, alt: string) {
  openLightbox({ src, alt, type: "image" });
}

export function triggerVideoLightbox(src: string) {
  openLightbox({ src, alt: "", type: "video" });
}

export function triggerEmbedLightbox(src: string) {
  openLightbox({ src, alt: "", type: "embed" });
}

export default function ImageLightbox() {
  const [item, setItem] = useState<LightboxState | null>(null);
  const [visible, setVisible] = useState(false);

  openLightbox = useCallback((data: LightboxState) => {
    setItem(data);
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setItem(null), 300);
  }, []);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [item, close]);

  if (!item) return null;

  return (
    <div
      className={`lightbox-overlay${visible ? " lightbox-visible" : ""}`}
      onClick={close}
    >
      <button className="lightbox-close" onClick={close} aria-label="Close">
        &times;
      </button>
      {item.type === "image" ? (
        <img
          src={item.src}
          alt={item.alt}
          className="lightbox-img"
          onClick={(e) => e.stopPropagation()}
        />
      ) : item.type === "video" ? (
        <video
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="lightbox-video"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <div className="lightbox-embed" onClick={(e) => e.stopPropagation()}>
          <iframe
            src={item.src}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
