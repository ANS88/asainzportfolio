import AnimateOnScroll from "./AnimateOnScroll";

const featured = [
  {
    slug: "natera-clinical-review",
    title: "Clinical Review",
    result: "50% faster turnaround for 585K patients/yr",
    company: "Natera",
  },
  {
    slug: "unified-patient-portal",
    title: "Unified Patient Portal",
    result: "First patient-facing portal across 4 business units",
    company: "Natera",
  },
  {
    slug: "histopathology-workflow",
    title: "Histopathology Lab Workflow",
    result: "Replaced spreadsheets across the entire pipeline",
    company: "Natera",
  },
];

export default function FeaturedWork() {
  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Selected work</div>
      </AnimateOnScroll>
      <div className="work-list">
        {featured.map((study) => (
          <AnimateOnScroll key={study.slug} animation="fade-up">
            <a href={`/work/${study.slug}`} className="work-row">
              <span className="work-row-company">{study.company}</span>
              <span className="work-row-title">{study.title}</span>
              <span className="work-row-result">{study.result}</span>
            </a>
          </AnimateOnScroll>
        ))}
      </div>
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
