import AnimateOnScroll from "./AnimateOnScroll";

const featured = [
  {
    slug: "natera-clinical-review",
    title: "Clinical Review",
    result: "50% faster turnaround for 585K patients/yr",
    judgment: "Chose distributed cognition over standard usability audit, the bottleneck was organizational, not interface",
    company: "Natera",
  },
  {
    slug: "perimenopause-tracking",
    title: "Perimenopause Symptom Tracking",
    result: "40-person diary study, 88.3 SUS, paper in review",
    judgment: "Chose diary study over usability test, the question was about lived experience, not task completion",
    company: "UC & Clue",
  },
  {
    slug: "unified-patient-portal",
    title: "Unified Patient Portal",
    result: "First patient-facing portal across 4 business units",
    judgment: "Used the Cures Act mandate as leverage to fund a patient-centered portal instead of bolting results onto the physician system",
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
              <span className="work-row-judgment">{study.judgment}</span>
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
