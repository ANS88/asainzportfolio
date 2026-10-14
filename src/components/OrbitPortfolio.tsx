"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  ORBIT_CATEGORIES,
  disciplineMix,
  inLens,
  orbitProjects as projects,
  type OrbitProject,
} from "@/data/orbit";

const TAU = Math.PI * 2;
const DRAG_THRESHOLD_PX = 6;
const IDLE_RESUME_MS = 5000;
const DRIFT_SLOTS_PER_SEC = 0.1;
const INNER_DRIFT_RAD_PER_SEC = 0.05;
const FRICTION = 4;
const MAX_FLICK_SLOTS_PER_SEC = 3.5;
const SNAP_RATE = 9;
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

type Geo = {
  width: number;
  height: number;
  cardW: number;
  cardH: number;
  cx: number;
  rx: number;
  ry: number;
  cy: number;
  innerRx: number;
  innerRy: number;
  innerCy: number;
};

type Sim = {
  pos: number;
  vel: number;
  target: number;
  mode: "idle" | "drag" | "momentum" | "snap";
  innerRot: number;
  angles: number[];
  rings: number[];
  ready: boolean;
  lensId: string;
  outer: number[];
  inner: number[];
  slot: number[];
  geo: Geo;
  reduced: boolean;
  hovered: boolean;
  focused: boolean;
  lastInteraction: number;
  transitionUntil: number;
  frontIdx: number;
  drag: { id: number; startX: number; lastX: number; lastT: number; moved: boolean } | null;
  pointerFront: number | null;
  suppressClick: boolean;
};

const subscribeNothing = () => () => {};
function useHydrated() {
  return useSyncExternalStore(subscribeNothing, () => true, () => false);
}

function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(REDUCED_MOTION);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

const mod = (a: number, n: number) => ((a % n) + n) % n;
const wrapAngle = (a: number) => a - TAU * Math.round(a / TAU);
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

function geometry(width: number): Geo {
  const phone = width < 640;
  const cardW = phone ? 116 : 208;
  const cardH = Math.round(cardW * 0.7);
  const labelSpace = phone ? 40 : 52;
  const topLabel = 30;
  const rx = Math.max(90, Math.min(width / 2 - cardW / 2 - 6, 440));
  const ry = phone ? 52 : Math.min(rx * 0.24, 96);
  const innerRx = rx * 0.58;
  const innerRy = ry * 0.62;
  const innerCy = topLabel + innerRy + cardH * 0.2 + 6;
  const cy = Math.max(innerCy + ry * 0.55, topLabel + ry + cardH * 0.3);
  const height = Math.round(cy + ry + cardH / 2 + labelSpace);
  return { width, height, cardW, cardH, cx: width / 2, rx, ry, cy, innerRx, innerRy, innerCy };
}

function lensSets(lensId: string) {
  const outer: number[] = [];
  const inner: number[] = [];
  projects.forEach((p, i) => (inLens(p, lensId) ? outer : inner).push(i));
  const slot = projects.map((_, i) => {
    const o = outer.indexOf(i);
    return o >= 0 ? o : -1 - inner.indexOf(i);
  });
  return { outer, inner, slot };
}

function createSim(): Sim {
  const sets = lensSets("all");
  return {
    pos: 0,
    vel: 0,
    target: 0,
    mode: "idle",
    innerRot: 0,
    angles: projects.map(() => 0),
    rings: projects.map(() => 1),
    ready: false,
    lensId: "all",
    ...sets,
    geo: geometry(960),
    reduced: false,
    hovered: false,
    focused: false,
    lastInteraction: -Infinity,
    transitionUntil: 0,
    frontIdx: sets.outer[0] ?? 0,
    drag: null,
    pointerFront: null,
    suppressClick: false,
  };
}

const lensLabel = (lensId: string) =>
  lensId === "all" ? "All work" : ORBIT_CATEGORIES.find((c) => c.id === lensId)?.label ?? lensId;

export default function OrbitPortfolio({ showFooter = true }: { showFooter?: boolean }) {
  const hydrated = useHydrated();
  return (
    <section className="orbit-section" aria-labelledby="orbit-heading">
      <h2 id="orbit-heading" className="sr-only">
        Selected work
      </h2>
      {hydrated ? <Orbit /> : <OrbitFallback />}
      {showFooter && (
        <div className="sc-footer">
          <Link href="/work" className="view-all-link">
            Every case study &rarr;
          </Link>
        </div>
      )}
    </section>
  );
}

function Thumb({ project, className }: { project: OrbitProject; className: string }) {
  return (
    <span className={className} data-tone={project.tone ?? "light"} data-fit={project.fit ?? "contain"}>
      <img src={project.thumbnail} alt="" draggable={false} loading="lazy" />
    </span>
  );
}

function OrbitFallback() {
  return (
    <ul className="orbit-fallback">
      {projects.map((p) => (
        <li key={p.slug}>
          <Link href={p.href} className="orbit-fallback-card">
            <Thumb project={p} className="orbit-frame" />
            <span className="orbit-fallback-meta">
              {p.role} &middot; {p.year}
            </span>
            <span className="orbit-fallback-title">{p.title}</span>
            <span className="orbit-fallback-summary">{p.summary}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Orbit() {
  const router = useRouter();
  const reduced = useReducedMotion();
  const [lens, setLens] = useState("all");
  const [width, setWidth] = useState(0);
  const [front, setFront] = useState({ idx: 0, live: false });

  const viewportRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const filterRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ x: 0, w: 0 });

  const geo = useMemo(() => geometry(width || 960), [width]);
  const { outer, inner } = useMemo(() => lensSets(lens), [lens]);

  // Mutable animation state for the rAF loop and event handlers.
  const sim = useRef<Sim>(createSim());

  useEffect(() => {
    sim.current.geo = geo;
    sim.current.reduced = reduced;
  }, [geo, reduced]);

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: projects.length };
    for (const cat of ORBIT_CATEGORIES) c[cat.id] = projects.filter((p) => inLens(p, cat.id)).length;
    return c;
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      const btn = filterRefs.current[lens];
      if (btn) setIndicator({ x: btn.offsetLeft, w: btn.offsetWidth });
    };
    measure();
    document.fonts?.ready.then(measure);
  }, [lens, width]);

  // Animation loop: runs only while the section is on screen and the tab is visible.
  useEffect(() => {
    let raf = 0;
    let last = 0;
    let onScreen = false;

    const tick = (t: number) => {
      const s = sim.current;
      const dt = last ? Math.min(0.05, (t - last) / 1000) : 0;
      last = t;
      const n = s.outer.length;
      const now = t;

      const drifting =
        s.lensId === "all" &&
        !s.reduced &&
        !s.hovered &&
        !s.focused &&
        s.mode === "idle" &&
        now - s.lastInteraction > IDLE_RESUME_MS;

      if (drifting) {
        s.pos += DRIFT_SLOTS_PER_SEC * dt;
      } else if (s.mode === "momentum") {
        s.pos += s.vel * dt;
        s.vel *= Math.exp(-FRICTION * dt);
        if (Math.abs(s.vel) < 0.4) {
          s.target = Math.round(s.pos);
          s.mode = "snap";
        }
      } else if (s.mode === "snap") {
        const diff = s.target - s.pos;
        if (s.reduced || Math.abs(diff) < 0.0008) {
          s.pos = s.target;
          s.mode = "idle";
        } else {
          s.pos += diff * (1 - Math.exp(-SNAP_RATE * dt));
        }
      }
      if (!s.reduced) s.innerRot -= INNER_DRIFT_RAD_PER_SEC * dt;

      const g = s.geo;
      const m = s.inner.length;
      const transitioning = now < s.transitionUntil;
      const angleK = 1 - Math.exp(-(transitioning ? 5 : 22) * dt);
      const ringK = 1 - Math.exp(-5 * dt);
      const frontIdx = n ? s.outer[mod(Math.round(s.pos), n)] : -1;

      projects.forEach((_, i) => {
        const el = cardRefs.current[i];
        if (!el) return;
        const slot = s.slot[i];
        const isOuter = slot >= 0;
        const targetAngle = isOuter ? (TAU * (slot - s.pos)) / n : (TAU * (-1 - slot)) / m + s.innerRot;
        const targetRing = isOuter ? 1 : 0;
        if (!s.ready || s.reduced) {
          s.angles[i] = targetAngle;
          s.rings[i] = targetRing;
        } else {
          s.angles[i] += wrapAngle(targetAngle - s.angles[i]) * angleK;
          s.rings[i] += (targetRing - s.rings[i]) * ringK;
        }
        const a = s.angles[i];
        const r = s.rings[i];
        const sin = Math.sin(a);
        const cos = Math.cos(a);
        const depth = (cos + 1) / 2;
        const x = mix(g.cx + g.innerRx * sin, g.cx + g.rx * sin, r);
        const y = mix(g.innerCy + g.innerRy * cos, g.cy + g.ry * cos, r);
        const scale = mix(0.28 + 0.14 * depth, 0.5 + 0.5 * depth, r);
        const opacity = mix(0.16 + 0.22 * depth, 0.28 + 0.72 * depth ** 1.3, r);
        const blur = mix(2.4 + (1 - depth) * 1.4, (1 - depth) * 3, r);
        el.style.transform = `translate3d(${(x - g.cardW / 2).toFixed(2)}px, ${(y - g.cardH / 2).toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
        el.style.opacity = opacity.toFixed(3);
        el.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : "none";
        el.style.zIndex = String(Math.round(r * 1000 + depth * 100));
        const isFront = i === frontIdx && r > 0.95;
        if (el.dataset.front !== String(isFront)) el.dataset.front = String(isFront);
        const label = labelRefs.current[i];
        if (label) label.style.opacity = (r * clamp01((depth - 0.9) / 0.08)).toFixed(3);
      });
      s.ready = true;

      if (frontIdx !== s.frontIdx && frontIdx >= 0) {
        s.frontIdx = frontIdx;
        setFront({ idx: frontIdx, live: !drifting });
      }
      raf = requestAnimationFrame(tick);
    };

    const sync = () => {
      const run = onScreen && !document.hidden;
      if (run && !raf) {
        last = 0;
        raf = requestAnimationFrame(tick);
      } else if (!run && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    if (viewportRef.current) io.observe(viewportRef.current);
    document.addEventListener("visibilitychange", sync);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      cancelAnimationFrame(raf);
    };
  }, []);

  const touch = (t: number) => {
    sim.current.lastInteraction = t;
  };

  const snapTo = useCallback((target: number) => {
    const s = sim.current;
    s.target = target;
    s.vel = 0;
    s.mode = "snap";
    if (s.reduced) s.pos = target;
  }, []);

  const baseSlot = () => {
    const s = sim.current;
    return Math.round(s.mode === "snap" ? s.target : s.pos);
  };

  const rotateTo = useCallback(
    (idx: number) => {
      const s = sim.current;
      const n = s.outer.length;
      const slot = s.outer.indexOf(idx);
      if (slot < 0 || !n) return;
      const base = baseSlot();
      let d = mod(slot - base, n);
      if (d > n / 2) d -= n;
      snapTo(base + d);
    },
    [snapTo],
  );

  const applyLens = useCallback((lensId: string, t: number, bring?: number) => {
    const s = sim.current;
    const sets = lensSets(lensId);
    const keep = bring ?? s.frontIdx;
    const k = Math.max(0, sets.outer.indexOf(keep));
    Object.assign(s, sets, { lensId, pos: k, target: k, vel: 0, mode: "idle" as const });
    s.transitionUntil = t + 1100;
    s.lastInteraction = t;
    s.frontIdx = sets.outer[k] ?? s.frontIdx;
    setLens(lensId);
    setFront({ idx: s.frontIdx, live: true });
  }, []);

  const step = (dir: 1 | -1, t: number) => {
    touch(t);
    const s = sim.current;
    const target = baseSlot() + dir;
    snapTo(target);
    const n = s.outer.length;
    const active = document.activeElement;
    if (n && active instanceof HTMLElement && active.classList.contains("orbit-card")) {
      cardRefs.current[s.outer[mod(target, n)]]?.focus({ preventScroll: true });
    }
  };

  const onKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      step(e.key === "ArrowRight" ? 1 : -1, e.timeStamp);
    }
  };

  const onPointerDown = (e: ReactPointerEvent) => {
    if (e.button !== 0) return;
    const s = sim.current;
    touch(e.timeStamp);
    s.pointerFront = s.outer[mod(baseSlot(), s.outer.length)] ?? null;
    s.drag = { id: e.pointerId, startX: e.clientX, lastX: e.clientX, lastT: e.timeStamp, moved: false };
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    const s = sim.current;
    const d = s.drag;
    if (!d || d.id !== e.pointerId) return;
    if (!d.moved) {
      if (Math.abs(e.clientX - d.startX) < DRAG_THRESHOLD_PX) return;
      d.moved = true;
      s.mode = "drag";
      s.vel = 0;
      stageRef.current?.setPointerCapture(e.pointerId);
    }
    const n = s.outer.length || 1;
    const slotPx = Math.max(s.geo.cardW * 1.15, (0.8 * s.geo.rx * TAU) / n);
    const now = e.timeStamp;
    const deltaSlots = -(e.clientX - d.lastX) / slotPx;
    s.pos += deltaSlots;
    const dtSec = Math.max(0.008, (now - d.lastT) / 1000);
    s.vel = s.vel * 0.6 + (deltaSlots / dtSec) * 0.4;
    d.lastX = e.clientX;
    d.lastT = now;
    touch(now);
  };

  const endDrag = (e: ReactPointerEvent, cancelled: boolean) => {
    const s = sim.current;
    const d = s.drag;
    if (!d || d.id !== e.pointerId) return;
    s.drag = null;
    touch(e.timeStamp);
    if (!d.moved) return;
    s.suppressClick = true;
    setTimeout(() => (s.suppressClick = false), 0);
    if (stageRef.current?.hasPointerCapture(e.pointerId)) stageRef.current.releasePointerCapture(e.pointerId);
    if (s.reduced || cancelled) snapTo(Math.round(s.pos));
    else {
      s.vel = Math.max(-MAX_FLICK_SLOTS_PER_SEC, Math.min(MAX_FLICK_SLOTS_PER_SEC, s.vel));
      s.mode = "momentum";
    }
  };

  const onCardClick = (idx: number, t: number) => {
    const s = sim.current;
    if (s.suppressClick) return;
    touch(t);
    if (s.slot[idx] < 0) {
      applyLens("all", t, idx);
      return;
    }
    const wasFront = (s.pointerFront ?? s.outer[mod(baseSlot(), s.outer.length)]) === idx;
    s.pointerFront = null;
    if (wasFront) router.push(projects[idx].href);
    else rotateTo(idx);
  };

  const onViewportFocus = (e: React.FocusEvent) => {
    if (!(e.target as HTMLElement).matches(":focus-visible")) return;
    sim.current.focused = true;
    if (sim.current.mode === "idle") snapTo(Math.round(sim.current.pos));
  };
  const onViewportBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      sim.current.focused = false;
      touch(e.timeStamp);
    }
  };
  const onViewportEnter = (e: ReactPointerEvent) => {
    if (e.pointerType !== "mouse") return;
    sim.current.hovered = true;
    if (sim.current.mode === "idle") snapTo(Math.round(sim.current.pos));
  };
  const onViewportLeave = (e: ReactPointerEvent) => {
    sim.current.hovered = false;
    touch(e.timeStamp);
  };

  const frontProject = projects[front.idx];
  const frontSlot = outer.indexOf(front.idx);

  return (
    <div className="orbit">
      <div className="orbit-filters-wrap">
        <div className="orbit-filters" role="group" aria-label="Filter projects by discipline">
          <span
            className="orbit-filter-indicator"
            aria-hidden="true"
            style={{ transform: `translateX(${indicator.x}px)`, width: indicator.w }}
          />
          {[{ id: "all", label: "All work", color: "" }, ...ORBIT_CATEGORIES].map((c) => (
            <button
              key={c.id}
              ref={(el) => {
                filterRefs.current[c.id] = el;
              }}
              type="button"
              className="orbit-filter"
              aria-pressed={lens === c.id}
              disabled={!counts[c.id]}
              onClick={(e) => lens !== c.id && applyLens(c.id, e.timeStamp)}
            >
              {c.color && <span className="orbit-filter-dot" style={{ background: c.color }} aria-hidden="true" />}
              {c.label}
              <span className="orbit-filter-count">{counts[c.id]}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={viewportRef}
        className="orbit-viewport"
        onFocus={onViewportFocus}
        onBlur={onViewportBlur}
        onPointerEnter={onViewportEnter}
        onPointerLeave={onViewportLeave}
      >
        <div
          ref={stageRef}
          className="orbit-stage"
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label={`Projects, ${lensLabel(lens)}`}
          aria-describedby="orbit-hint"
          style={
            {
              height: geo.height,
              "--orbit-card-w": `${geo.cardW}px`,
              "--orbit-card-h": `${geo.cardH}px`,
            } as React.CSSProperties
          }
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={(e) => endDrag(e, false)}
          onPointerCancel={(e) => endDrag(e, true)}
        >
          {inner.length > 0 && (
            <div className="orbit-outside-label" aria-hidden="true">
              Outside this lens &middot; {inner.length}
            </div>
          )}
          {projects.map((p, i) => {
            const isOuter = outer.includes(i);
            const isFront = i === front.idx;
            const label = isOuter
              ? `${p.title}. ${p.role}, ${p.year}. ${isFront ? "Open case study" : "Bring to front"}.`
              : `${p.title}, outside the ${lensLabel(lens)} lens. Show in all work.`;
            return (
              <button
                key={p.slug}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                type="button"
                className="orbit-card"
                data-ring={isOuter ? "outer" : "inner"}
                tabIndex={isOuter ? 0 : -1}
                aria-label={label}
                onFocus={() => isOuter && rotateTo(i)}
                onClick={(e) => onCardClick(i, e.timeStamp)}
              >
                <Thumb project={p} className="orbit-frame" />
                <span
                  ref={(el) => {
                    labelRefs.current[i] = el;
                  }}
                  className="orbit-card-label"
                  aria-hidden="true"
                >
                  {p.cardTitle}
                </span>
              </button>
            );
          })}
        </div>

        <div className="orbit-controls">
          <button type="button" className="orbit-step" aria-label="Previous project" onClick={(e) => step(-1, e.timeStamp)}>
            &larr;
          </button>
          <p id="orbit-hint" className="orbit-hint">
            Drag, or use the arrow keys
          </p>
          <button type="button" className="orbit-step" aria-label="Next project" onClick={(e) => step(1, e.timeStamp)}>
            &rarr;
          </button>
        </div>
      </div>

      <OrbitDetail
        project={frontProject}
        position={frontSlot + 1}
        total={outer.length}
        lens={lensLabel(lens)}
        live={front.live}
        reduced={reduced}
      />
    </div>
  );
}

function OrbitDetail({
  project,
  position,
  total,
  lens,
  live,
  reduced,
}: {
  project: OrbitProject;
  position: number;
  total: number;
  lens: string;
  live: boolean;
  reduced: boolean;
}) {
  const [leaving, setLeaving] = useState<{ id: number; project: OrbitProject }[]>([]);
  const [shown, setShown] = useState({ id: 0, project });
  if (shown.project.slug !== project.slug) {
    setShown({ id: shown.id + 1, project });
    if (!reduced) setLeaving((prev) => [...prev, shown]);
  }

  const pad = (v: number) => String(v).padStart(2, "0");

  return (
    <div className="orbit-detail" aria-live={live ? "polite" : "off"}>
      {leaving.map((entry) => (
        <div
          key={entry.id}
          className="orbit-panel is-leaving"
          aria-hidden="true"
          onAnimationEnd={() => setLeaving((prev) => prev.filter((x) => x.id !== entry.id))}
        >
          <PanelBody project={entry.project} counter={"\u00a0"} />
        </div>
      ))}
      <div key={shown.id} className="orbit-panel">
        <PanelBody project={project} counter={`${pad(position)} / ${pad(total)} · ${project.year} · ${lens}`} />
      </div>
    </div>
  );
}

function PanelBody({ project, counter }: { project: OrbitProject; counter: string }) {
  const parts = disciplineMix(project);
  return (
    <>
      <Thumb project={project} className="orbit-frame orbit-panel-image" />
      <div className="orbit-panel-text">
        <p className="orbit-counter">{counter}</p>
        <p className="orbit-role">{project.role}</p>
        <h3 className="orbit-title">{project.title}</h3>
        <p className="orbit-summary">{project.summary}</p>
        <div className="orbit-mix">
          <div className="orbit-mix-bar" aria-hidden="true">
            {parts
              .filter((c) => c.pct > 0)
              .map((c) => (
                <span key={c.id} style={{ width: `${c.pct}%`, background: c.color }} />
              ))}
          </div>
          <ul className="orbit-mix-legend" aria-label="Discipline mix">
            {parts.map((c) => (
              <li key={c.id}>
                <span className="orbit-mix-dot" style={{ background: c.color }} aria-hidden="true" />
                {c.label} {c.pct}%
              </li>
            ))}
          </ul>
        </div>
        <Link href={project.href} className="orbit-link">
          Read the case study <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </>
  );
}
