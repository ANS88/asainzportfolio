import AnimateOnScroll from "./AnimateOnScroll";

const featured = [
  {
    slug: "natera-clinical-review",
    title: "Clinical Review",
    description:
      "Redesigned the workflow that determines how fast 585,000 patients per year get their genetic test results. 50% reduction in turnaround time.",
    company: "Natera",
    timeline: "2024–2025",
  },
  {
    slug: "unified-patient-portal",
    title: "Unified Patient Portal",
    description:
      "Led research for Natera’s first patient-facing portal, empowering 181K patients to track tests, view results, and manage billing.",
    company: "Natera",
    timeline: "2023–2024",
  },
  {
    slug: "histopathology-workflow",
    title: "Histopathology Lab Workflow",
    description:
      "Designed a unified system replacing spreadsheets and manual tracking across the entire histopathology pipeline.",
    company: "Natera",
    timeline: "2024–2025",
  },
];

export default function FeaturedWork() {
  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Portfolio</div>
        <div className="section-title">Featured Work</div>
      </AnimateOnScroll>
      <div className="cs-card-grid">
        {featured.map((study) => (
          <AnimateOnScroll key={study.slug} animation="fade-up">
            <a href={`/work/${study.slug}`} className="cs-preview-card">
              <div className="cs-preview-label">
                {study.company} &middot; {study.timeline}
              </div>
              <div className="cs-preview-title">{study.title}</div>
              <p className="cs-preview-stakes">{study.description}</p>
              <span className="cs-preview-link">Read case study &rarr;</span>
            </a>
          </AnimateOnScroll>
        ))}
      </div>
      <AnimateOnScroll animation="fade-up">
        <div style={{ marginTop: "1.5rem" }}>
          <a href="/work" className="view-all-link">
            View all work &rarr;
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
