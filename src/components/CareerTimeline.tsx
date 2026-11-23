"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { timelineEntries, type TimelineEntry } from "@/data/timeline";
import { asset } from "@/lib/asset";

// Keep in sync with the horizontal-layout media query in globals.css.
const HORIZONTAL = "(min-width: 900px) and (hover: hover) and (pointer: fine)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function EntryCard({ entry }: { entry: TimelineEntry }) {
  const body = (
    <>
      <span className="orbit-frame tl-media" data-tone={entry.tone} data-fit={entry.fit}>
        <img src={entry.thumbnail} alt="" loading="lazy" draggable={false} />
      </span>
      <span className="tl-when">
        <span className="tl-dot" aria-hidden="true" />
        {entry.year}
      </span>
      <h2 className="tl-headline">{entry.headline}</h2>
      <p className="tl-role">
        {entry.role} &middot; {entry.org}
      </p>
      <p className="tl-summary">{entry.summary}</p>
    </>
  );
  return entry.external ? (
    <a href={entry.href} className="tl-card" target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  ) : (
    <Link href={entry.href} className="tl-card">
      {body}
    </Link>
  );
}

export default function CareerTimeline() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const horizontal = window.matchMedia(HORIZONTAL);
    const reduced = window.matchMedia(REDUCED_MOTION);
    let target = scroller.scrollLeft;
    let raf = 0;

    const max = () => scroller.scrollWidth - scroller.clientWidth;
    const updateProgress = () => {
      const m = max();
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${m > 0 ? scroller.scrollLeft / m : 0})`;
    };

    const glide = () => {
      const current = scroller.scrollLeft;
      const next = current + (target - current) * 0.16;
      // scrollLeft snaps to whole pixels, so finish once the next step would round away.
      if (Math.round(next) === Math.round(current)) {
        scroller.scrollLeft = target;
        raf = 0;
        return;
      }
      scroller.scrollLeft = next;
      raf = requestAnimationFrame(glide);
    };

    // Vertical mouse wheels move the timeline sideways; horizontal trackpad swipes stay native.
    const onWheel = (e: WheelEvent) => {
      if (!horizontal.matches || e.ctrlKey) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) {
        cancelAnimationFrame(raf);
        raf = 0;
        return;
      }
      e.preventDefault();
      const unit = e.deltaMode === 1 ? 32 : e.deltaMode === 2 ? scroller.clientWidth : 1;
      target = Math.max(0, Math.min(max(), (raf ? target : scroller.scrollLeft) + e.deltaY * unit));
      if (reduced.matches) {
        scroller.scrollLeft = target;
      } else if (!raf) {
        raf = requestAnimationFrame(glide);
      }
    };

    const onScroll = () => {
      if (!raf) target = scroller.scrollLeft;
      updateProgress();
    };

    scroller.addEventListener("wheel", onWheel, { passive: false });
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
    return () => {
      scroller.removeEventListener("wheel", onWheel);
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="tl" aria-labelledby="tl-intro-title">
      <div
        ref={scrollerRef}
        className="tl-scroller"
        tabIndex={0}
        role="region"
        aria-label="Career timeline, newest first"
      >
        <div className="tl-track">
          <div className="tl-intro">
            <h1 id="tl-intro-title" className="tl-intro-title">
              I am a systems thinker and builder.
            </h1>
            <p className="tl-intro-text">
              Currently, leading design and research at{" "}
              <a href="https://www.natera.com" target="_blank" rel="noopener noreferrer">
                Natera
              </a>
              , shipping the platform tools that power 50+ genomics labs and millions of patient results.
            </p>
            <p className="tl-intro-links">
              <a href="mailto:sainz.nag@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
              <a href="https://scholar.google.com/citations?user=6ec-wJ8AAAAJ" target="_blank" rel="noopener noreferrer">Scholar</a>
              <a href="https://github.com/ANS88" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
            <p className="tl-hint" aria-hidden="true">
              Scroll through the work <span>&rarr;</span>
            </p>
          </div>

          <ol className="tl-list">
            {timelineEntries.map((entry) => (
              <li key={entry.key} className="tl-item">
                <EntryCard entry={entry} />
              </li>
            ))}
          </ol>

          <div className="tl-contact">
            <h2 className="tl-contact-title">Let&apos;s chat.</h2>
            <p className="tl-contact-links">
              <a href="mailto:sainz.nag@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={asset("/adriana-navarro-sainz-resume.pdf")} target="_blank" rel="noopener noreferrer">
                Resume &darr;
              </a>
            </p>
            <p className="tl-contact-more">
              <Link href="/work">All case studies</Link>
              <Link href="/about">About me</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="tl-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
    </section>
  );
}
