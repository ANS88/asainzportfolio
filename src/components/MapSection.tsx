"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json";

const locations = [
  {
    city: "Guadalajara",
    country: "Mexico",
    tags: ["Born", "Worked", "Lived"],
    coordinates: [-103.35, 20.67] as [number, number],
  },
  {
    city: "Mexico City",
    country: "Mexico",
    tags: ["Worked", "Lived"],
    coordinates: [-99.13, 19.43] as [number, number],
  },
  {
    city: "Cincinnati",
    country: "OH",
    tags: ["Worked", "Lived", "Studied"],
    coordinates: [-84.51, 39.1] as [number, number],
  },
  {
    city: "Portland",
    country: "OR",
    tags: ["Worked", "Lived"],
    coordinates: [-122.68, 45.52] as [number, number],
  },
  {
    city: "San Francisco",
    country: "CA",
    tags: ["Worked", "Lived"],
    coordinates: [-122.42, 37.77] as [number, number],
  },
  {
    city: "Montreal",
    country: "Canada",
    tags: ["Worked", "Lived"],
    coordinates: [-73.57, 45.5] as [number, number],
  },
  {
    city: "Valencia",
    country: "Spain",
    tags: ["Studied", "Lived"],
    coordinates: [-0.38, 39.47] as [number, number],
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
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{
            scale: 160,
            center: [-40, 30],
          }}
          width={900}
          height={400}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rpiProperties?.name || geo.id || Math.random()}
                  geography={geo}
                  fill="#e7e5e4"
                  stroke="#d6d3d1"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {locations.map((loc, i) => (
            <Marker
              key={loc.city}
              coordinates={loc.coordinates}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Outer ring */}
              <circle
                r={active === i ? 10 : 6}
                fill="none"
                stroke="#1a1a1a"
                strokeWidth={0.5}
                opacity={active === i ? 0.4 : 0.15}
                style={{ transition: "all 0.3s ease" }}
              />
              {/* Dot */}
              <circle
                r={active === i ? 5 : 3.5}
                fill={loc.tags.includes("Born") ? "#1a1a1a" : "#78716c"}
                stroke="#faf9f6"
                strokeWidth={1}
                style={{ transition: "all 0.3s ease", cursor: "pointer" }}
              />
              {/* Label */}
              <text
                textAnchor="middle"
                y={-12}
                style={{
                  fontSize: active === i ? 11 : 9,
                  fill: "#1a1a1a",
                  fontWeight: active === i ? 600 : 400,
                  transition: "all 0.3s ease",
                }}
              >
                {loc.city}
              </text>
            </Marker>
          ))}
        </ComposableMap>

        {/* Active location detail */}
        <div className="flex min-h-14 items-center justify-center border-t border-border px-6 py-3">
          {active !== null ? (
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="font-medium">
                {locations[active].city}, {locations[active].country}
              </span>
              <span className="text-muted">&mdash;</span>
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
