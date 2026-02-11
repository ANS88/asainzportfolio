export default function CrissyFieldCam() {
  return (
    <section>
      <div className="label">Live</div>
      <div className="section-title">Crissy Field, San Francisco</div>
      <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden" }}>
        <div style={{ aspectRatio: "16/9" }}>
          <iframe
            src="https://www.youtube.com/embed/0aF8elLpiMo?autoplay=1&mute=1&loop=1&modestbranding=1&rel=0"
            title="Crissy Field — Golden Gate Bridge Live Camera"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: ".5rem 1rem", borderTop: "1px solid var(--border)" }}>
          <span className="cam-tag">Crissy Field East Beach, San Francisco</span>
          <a
            href="https://www.parksconservancy.org/parks/park-web-cams"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--mono)", fontSize: ".6rem", color: "var(--accent)" }}
          >
            Parks Conservancy ↗
          </a>
        </div>
      </div>
    </section>
  );
}
