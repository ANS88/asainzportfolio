import AnimateOnScroll from "./AnimateOnScroll";

const pages = [
  {
    title: "Work",
    href: "/work",
    description: "Case studies from 10 years designing in clinical environments.",
    tag: "Portfolio",
  },
  {
    title: "Playground",
    href: "/playground",
    description: "Experiments and tools built to understand things I couldn\u2019t learn by reading about them.",
    tag: "Experiments",
  },
  {
    title: "Thinking",
    href: "/thinking",
    description: "Working positions on healthcare design, AI health products, and femtech.",
    tag: "Essays",
  },
  {
    title: "About",
    href: "/about",
    description: "Researcher who ships products, designer who publishes research.",
    tag: "Bio",
  },
];

export default function SiteNav() {
  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Explore</div>
        <div className="section-title">More about me and my work</div>
      </AnimateOnScroll>
      <div className="site-nav-grid">
        {pages.map((page, i) => (
          <AnimateOnScroll key={i} animation="fade-up">
            <a href={page.href} className="site-nav-card">
              <div className="site-nav-tag">{page.tag}</div>
              <div className="site-nav-title">{page.title}</div>
              <div className="site-nav-desc">{page.description}</div>
              <span className="site-nav-arrow">&rarr;</span>
            </a>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
