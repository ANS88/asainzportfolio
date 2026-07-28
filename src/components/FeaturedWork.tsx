import AnimateOnScroll from "./AnimateOnScroll";

const transformations = [
  {
    slug: "natera-clinical-review",
    from: "Fragmented",
    project: "Clinical Review",
    to: "Unified",
  },
  {
    slug: "unified-patient-portal",
    from: "Invisible",
    project: "Patient Portal",
    to: "Empowered",
  },
  {
    slug: "histopathology-workflow",
    from: "Manual",
    project: "Histopathology Redesign",
    to: "Scan-driven",
  },
  {
    slug: "identity-portal",
    from: "Paper",
    project: "IDENTITY Portal",
    to: "Connected",
  },
  {
    slug: "perimenopause-tracking",
    from: "Measured",
    project: "Tracking Perimenopause",
    to: "Understood",
  },
];

export default function FeaturedWork() {
  return (
    <section>
      <AnimateOnScroll animation="fade-in">
        <p className="transform-tagline">
          I redesign the systems behind clinical decisions —<br />
          and the experience changes <em>downstream.</em>
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <div className="transform-table">
          <div className="transform-header">
            <span>From</span>
            <span>Project</span>
            <span>To</span>
          </div>
          {transformations.map((t) => (
            <a key={t.slug} href={`/work/${t.slug}`} className="transform-row">
              <span className="transform-from">{t.from}</span>
              <span className="transform-project">{t.project}</span>
              <span className="transform-to">{t.to}</span>
            </a>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up">
        <div style={{ marginTop: "2rem" }}>
          <a href="/work" className="view-all-link">
            All work &rarr;
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
