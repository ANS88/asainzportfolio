"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
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
    tags: ["Born", "ITESO", "Visual Designer"],
    coordinates: [-103.35, 20.67] as [number, number],
  },
  {
    city: "Valencia",
    country: "Spain",
    tags: ["Student exchange at UPV"],
    coordinates: [-0.38, 39.47] as [number, number],
  },
  {
    city: "Montreal",
    country: "Canada",
    tags: ["Computational Design", "UX Freelancer"],
    coordinates: [-73.57, 45.5] as [number, number],
  },
  {
    city: "Cincinnati",
    country: "OH",
    tags: ["Master of Design", "Doctorate in HCI", "CCHMC"],
    coordinates: [-84.51, 39.1] as [number, number],
  },
  {
    city: "Portland",
    country: "OR",
    tags: ["Hewlett Packard"],
    coordinates: [-122.68, 45.52] as [number, number],
  },
  {
    city: "San Francisco",
    country: "CA",
    tags: ["Currently at Natera"],
    coordinates: [-122.42, 37.77] as [number, number],
  },
];

export default function MapSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Places</div>
        <div className="section-title">Places I&apos;ve Called Home</div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-in" delay={100}>
      <div style={{ background: "white", border: "1.5px solid var(--border)", borderRadius: "10px", overflow: "hidden", transition: "border-color .3s cubic-bezier(.4,0,.2,1)" }}>
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
              <circle
                r={active === i ? 10 : 6}
                fill="none"
                stroke="#0909e8"
                strokeWidth={0.5}
                opacity={active === i ? 0.4 : 0.15}
                style={{ transition: "all 0.3s ease" }}
              />
              <circle
                r={active === i ? 5 : 3.5}
                fill={loc.tags.includes("Born") ? "#0909e8" : "#78716c"}
                stroke="#faf9f6"
                strokeWidth={1}
                style={{ transition: "all 0.3s ease", cursor: "pointer" }}
              />
              <text
                textAnchor="middle"
                y={-12}
                style={{
                  fontSize: active === i ? 11 : 9,
                  fill: "#1c1917",
                  fontWeight: active === i ? 600 : 400,
                  transition: "all 0.3s ease",
                }}
              >
                {loc.city}
              </text>
            </Marker>
          ))}
        </ComposableMap>

        <div style={{ display: "flex", minHeight: "3.5rem", alignItems: "center", justifyContent: "center", borderTop: "1px solid var(--border)", padding: ".5rem 1rem" }}>
          {active !== null ? (
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: ".5rem", fontSize: ".85rem" }}>
              <span style={{ fontWeight: 500 }}>
                {locations[active].city}, {locations[active].country}
              </span>
              <span style={{ color: "var(--ink3)" }}>&mdash;</span>
              {locations[active].tags.map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          ) : (
            <p style={{ fontSize: ".82rem", color: "var(--ink3)" }}>
              Hover over a location to learn more
            </p>
          )}
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
