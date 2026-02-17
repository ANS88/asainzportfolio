import AnimateOnScroll from "./AnimateOnScroll";

const PROJECTS = [
  {
    title: "Women\u2019s Health, Computed",
    description:
      "Translating 4 years of menopause app research into insights for designers and skeptical consumers",
    href: "https://womenshealthcomputed.substack.com",
  },
  {
    title: "AI Animation Library",
    description:
      "Interactive tools making tokenization, embeddings, and RAG legible to designers",
  },
  {
    title: "DIS 2026 submission",
    description:
      "Publishing somaesthetic design principles from dissertation research",
  },
  {
    title: "Natera UX ROI framework",
    description:
      "Proving research value in lab operations across 50+ facilities",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section>
      <AnimateOnScroll>
        <div className="label">In progress</div>
        <div className="section-title">Currently building</div>
      </AnimateOnScroll>
      <div className="currently-list">
        {PROJECTS.map((p) => (
          <AnimateOnScroll key={p.title} animation="fade-up">
            <div className="currently-item">
              <span className="currently-arrow">&rarr;</span>
              <div>
                <span className="currently-title">
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </span>
                <span className="currently-sep"> &mdash; </span>
                <span className="currently-desc">{p.description}</span>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
