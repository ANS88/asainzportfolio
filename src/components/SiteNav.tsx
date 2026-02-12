import AnimateOnScroll from "./AnimateOnScroll";

const pages = [
  {
    title: "Work",
    href: "/",
    description: "Case studies, shipped products, and impact metrics from healthcare UX leadership.",
    tag: "Portfolio",
  },
  {
    title: "Playground",
    href: "/playground",
    description: "Creative experiments, side projects, and explorations where curiosity meets code.",
    tag: "Experiments",
  },
  {
    title: "About",
    href: "/about",
    description: "My path into HCI, guiding principles, and what drives me to build for health.",
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
