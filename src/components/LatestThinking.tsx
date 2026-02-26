import AnimateOnScroll from "./AnimateOnScroll";

const POSTS = [
  {
    title: "What 40 Women Taught Me About Tracking Menopause",
    source: "Women\u2019s Health, Computed",
    summary:
      "Research with 40 perimenopausal women reveals that good usability \u2260 meaningful insights \u2014 women need tools that deliver actionable, personalized health patterns.",
    href: "https://substack.com/@womenshealthcomputed/note/c-196183952?utm_source=notes-share-action&r=4fjw1",
  },
  {
    title: "Building Better: What Good Menopause Technology Would Actually Look Like",
    source: "Women\u2019s Health, Computed",
    summary:
      "The final installment of the symptom tracking series \u2014 exploring feminist HCI design principles for what menopause technology should actually look like.",
    href: "https://substack.com/@womenshealthcomputed/note/c-213629195?utm_source=notes-share-action&r=4fjw1",
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
      </div>
    </section>
  );
}
