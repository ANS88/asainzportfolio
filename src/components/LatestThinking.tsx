import AnimateOnScroll from "./AnimateOnScroll";

const POSTS = [
  {
    title: "What 40 Women Taught Me About Tracking Menopause",
    source: "Women\u2019s Health, Computed",
    summary:
      "What four years of diary studies revealed about how women actually want to track their health.",
    href: "https://womenshealthcomputed.substack.com/p/what-40-women-taught-me-about-tracking",
  },
];

export default function LatestThinking() {
  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Latest writing</div>
        <div className="section-title">From the Substack</div>
      </AnimateOnScroll>
      <div className="thinking-grid">
        {POSTS.map((post) => (
          <AnimateOnScroll key={post.href} animation="fade-up">
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="thinking-card"
            >
              <div className="thinking-date">{post.source}</div>
              <div className="thinking-title">{post.title}</div>
              <p className="thinking-summary">{post.summary}</p>
              <span className="thinking-link">Read on Substack &rarr;</span>
            </a>
          </AnimateOnScroll>
        ))}
        <AnimateOnScroll animation="fade-up">
          <a
            href="https://womenshealthcomputed.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="thinking-card thinking-card-cta"
          >
            <div className="thinking-title">Women&rsquo;s Health, Computed</div>
            <p className="thinking-summary">
              Academic HCI research translated into accessible analysis. Perimenopause wearables, femtech landscape, whose bodies health tech serves.
            </p>
            <span className="thinking-link">Read all posts &rarr;</span>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
