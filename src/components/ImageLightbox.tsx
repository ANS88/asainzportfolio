"use client";

import { useState, useCallback, useEffect } from "react";

interface LightboxState {
  src: string;
  alt: string;
}

let openLightbox: (img: LightboxState) => void = () => {};

export function triggerLightbox(src: string, alt: string) {
  openLightbox({ src, alt });
}

export default function ImageLightbox() {
  const [image, setImage] = useState<LightboxState | null>(null);
  const [visible, setVisible] = useState(false);

  openLightbox = useCallback((img: LightboxState) => {
    setImage(img);
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setImage(null), 300);
  }, []);

  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [image, close]);

  if (!image) return null;

  return (
    <div
      className={`lightbox-overlay${visible ? " lightbox-visible" : ""}`}
      onClick={close}
    >
      <button className="lightbox-close" onClick={close} aria-label="Close">
        &times;
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
