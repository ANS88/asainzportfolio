"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import dynamic from "next/dynamic";

const locations = [
  {
    city: "Guadalajara",
    country: "Mexico",
    tags: ["Born", "BS in Integral Design @ ITESO", "+3 yrs as Visual Designer"],
    coordinates: [20.67, -103.35] as [number, number],
    zoom: 12,
  },
  {
    city: "Valencia",
    country: "Spain",
    tags: ["Student exchange @ UPV"],
    coordinates: [39.47, -0.38] as [number, number],
    zoom: 13,
  },
  {
    city: "Montreal",
    country: "Canada",
    tags: ["Computational Design @ Concordia University", "UX Freelancer"],
    coordinates: [45.5, -73.57] as [number, number],
    zoom: 12,
  },
  {
    city: "Cincinnati",
    country: "OH",
    tags: ["Master of Design @ UC", "Doctorate in HCI @ UC", "UX Design @ CCHMC"],
    coordinates: [39.1, -84.51] as [number, number],
    zoom: 12,
  },
  {
    city: "Portland",
    country: "OR",
    tags: ["UX Internship @ Hewlett Packard"],
    coordinates: [45.52, -122.68] as [number, number],
    zoom: 12,
  },
  {
    city: "San Francisco",
    country: "CA",
    tags: ["Currently UX Design + Research @ Natera"],
    coordinates: [37.77, -122.42] as [number, number],
    zoom: 13,
  },
];

const WORLD_VIEW = {
  center: [30, -40] as [number, number],
  zoom: 2,
};

function LeafletMap() {
  const mapRef = useRef<any>(null);
  const [active, setActive] = useState<number | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [L, setL] = useState<any>(null);
  const [RL, setRL] = useState<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    Promise.all([
      import("leaflet"),
      import("react-leaflet"),
    ]).then(([leaflet, reactLeaflet]) => {
      setL(leaflet.default || leaflet);
      setRL(reactLeaflet);
      setMapReady(true);
    });
  }, []);

  const flyToCity = useCallback((index: number) => {
    const map = mapRef.current;
    if (!map) return;
    const loc = locations[index];
    setActive(index);
    map.flyTo(loc.coordinates, loc.zoom, {
      duration: 1.8,
      easeLinearity: 0.25,
    });
  }, []);

  const flyToWorld = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;
    setActive(null);
    map.flyTo(WORLD_VIEW.center, WORLD_VIEW.zoom, {
      duration: 1.5,
      easeLinearity: 0.25,
    });
  }, []);

  if (!mapReady || !L || !RL) {
    return (
      <div className="topo-map-placeholder">
        <div className="topo-map-loading">Loading map...</div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker: LeafletMarker, Tooltip, useMap } = RL;

  const pulseIcon = (isActive: boolean, isBorn: boolean) =>
    L.divIcon({
      className: "topo-marker-icon",
      html: `<span class="topo-marker-dot${isActive ? " topo-marker-dot--active" : ""}${isBorn ? " topo-marker-dot--born" : ""}"></span>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

  function MapEvents() {
    const map = useMap();
    useEffect(() => {
      mapRef.current = map;
    }, [map]);
    return null;
  }

  return (
    <>
      <div className="topo-map-wrap">
        <MapContainer
          center={WORLD_VIEW.center}
          zoom={WORLD_VIEW.zoom}
          minZoom={2}
          maxZoom={16}
          scrollWheelZoom={true}
          zoomControl={false}
          style={{ width: "100%", height: "100%" }}
          attributionControl={false}
        >
          <MapEvents />
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <TileLayer
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            opacity={0.15}
          />

          {locations.map((loc, i) => (
            <LeafletMarker
              key={loc.city}
              position={loc.coordinates}
              icon={pulseIcon(active === i, loc.tags.includes("Born"))}
              eventHandlers={{
                click: () => flyToCity(i),
              }}
            >
              <Tooltip
                direction="top"
                offset={[0, -14]}
                className="topo-tooltip"
                permanent={false}
              >
                {loc.city}
              </Tooltip>
            </LeafletMarker>
          ))}
        </MapContainer>

        <div className="topo-zoom-controls">
          <button
            className="topo-zoom-btn"
            onClick={() => mapRef.current?.zoomIn()}
            aria-label="Zoom in"
          >+</button>
          <button
            className="topo-zoom-btn"
            onClick={() => mapRef.current?.zoomOut()}
            aria-label="Zoom out"
          >&minus;</button>
        </div>

        {active !== null && (
          <button className="topo-back-btn" onClick={flyToWorld}>
            &larr; World view
          </button>
        )}
      </div>

      <div className="topo-cities">
        {locations.map((loc, i) => (
          <button
            key={loc.city}
            className={`topo-city-btn${active === i ? " topo-city-btn--active" : ""}`}
            onClick={() => active === i ? flyToWorld() : flyToCity(i)}
          >
            <span className="topo-city-name">{loc.city}</span>
            <span className="topo-city-country">{loc.country}</span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="topo-city-detail">
          <div className="topo-city-detail-header">
            {locations[active].city}, {locations[active].country}
          </div>
          <div className="topo-city-tags">
            {locations[active].tags.map((tag) => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>
        </div>
      )}

      {active === null && (
        <p className="topo-hint">Select a city to explore</p>
      )}
    </>
  );
}

export default function MapSection() {
  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Places</div>
        <div className="section-title">Places I&apos;ve Called Home</div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-in" delay={100}>
        <div className="topo-container">
          <LeafletMap />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
