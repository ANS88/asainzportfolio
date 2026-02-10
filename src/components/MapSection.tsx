"use client";

import { useState } from "react";

const locations = [
  {
    city: "Guadalajara",
    country: "Mexico",
    tags: ["Born", "Worked", "Lived"],
    x: 21.3,
    y: 55.2,
  },
  {
    city: "Mexico City",
    country: "Mexico",
    tags: ["Worked", "Lived"],
    x: 22.5,
    y: 58.8,
  },
  {
    city: "Cincinnati",
    country: "OH",
    tags: ["Worked", "Lived", "Studied"],
    x: 26.5,
    y: 39.5,
  },
  {
    city: "Portland",
    country: "OR",
    tags: ["Worked", "Lived"],
    x: 15.9,
    y: 34.0,
  },
  {
    city: "San Francisco",
    country: "CA",
    tags: ["Worked", "Lived"],
    x: 14.8,
    y: 40.5,
  },
  {
    city: "Montreal",
    country: "Canada",
    tags: ["Worked", "Lived"],
    x: 29.6,
    y: 33.0,
  },
  {
    city: "Valencia",
    country: "Spain",
    tags: ["Studied", "Lived"],
    x: 49.9,
    y: 39.8,
  },
];

export default function MapSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
        Places I&apos;ve Called Home
      </h2>

      <div className="relative mt-10 overflow-hidden rounded-2xl border border-border bg-stone-50">
        <svg
          viewBox="0 0 100 60"
          className="h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid lines */}
          {Array.from({ length: 11 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 10}
              y1={0}
              x2={i * 10}
              y2={60}
              stroke="#e5e5e5"
              strokeWidth={0.1}
            />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1={0}
              y1={i * 10}
              x2={100}
              y2={i * 10}
              stroke="#e5e5e5"
              strokeWidth={0.1}
            />
          ))}

          {/* Connection lines between locations */}
          {locations.map((loc, i) =>
            locations.slice(i + 1).map((loc2, j) => (
              <line
                key={`line-${i}-${j}`}
                x1={loc.x}
                y1={loc.y}
                x2={loc2.x}
                y2={loc2.y}
                stroke="#d6d3d1"
                strokeWidth={0.08}
                strokeDasharray="0.3 0.3"
              />
            ))
          )}

          {/* Location markers */}
          {locations.map((loc, i) => (
            <g
              key={loc.city}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="cursor-pointer"
            >
              {/* Pulse ring */}
              <circle
                cx={loc.x}
                cy={loc.y}
                r={active === i ? 1.8 : 1.2}
                fill="none"
                stroke="#1a1a1a"
                strokeWidth={0.08}
                opacity={active === i ? 0.3 : 0.1}
                className="transition-all duration-300"
              />
              {/* Dot */}
              <circle
                cx={loc.x}
                cy={loc.y}
                r={active === i ? 0.7 : 0.5}
                fill={loc.tags.includes("Born") ? "#1a1a1a" : "#6b6b6b"}
                className="transition-all duration-300"
              />
              {/* Label */}
              <text
                x={loc.x}
                y={loc.y - 1.5}
                textAnchor="middle"
                fontSize={active === i ? 1.6 : 1.3}
                fill="#1a1a1a"
                fontWeight={active === i ? 600 : 400}
                className="transition-all duration-300"
              >
                {loc.city}
              </text>
            </g>
          ))}
        </svg>

        {/* Active location detail */}
        <div className="flex min-h-14 items-center justify-center border-t border-border px-6 py-3">
          {active !== null ? (
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="font-medium">
                {locations[active].city}, {locations[active].country}
              </span>
              <span className="text-muted">—</span>
              {locations[active].tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-0.5 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted">
              Hover over a location to learn more
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
