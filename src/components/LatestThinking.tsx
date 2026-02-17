import AnimateOnScroll from "./AnimateOnScroll";

const POSTS = [
  {
    title: "Building Better",
    date: "Feb 12, 2026",
    summary:
      "Synthesizing four years of menopause app research into design principles for technology that genuinely supports women through hormonal transitions.",
    href: "https://womenshealthcomputed.substack.com/p/building-better",
  },
  {
    title: "The Menopause Tech Moment: What CES 2026 Reveals About Women\u2019s Health Innovation",
    date: "Jan 21, 2026",
    summary:
      "Examining breakthrough menopause technologies unveiled at CES 2026 and questioning whether these innovations represent genuine empowerment or new medicalization.",
    href: "https://womenshealthcomputed.substack.com/p/the-menopause-tech-moment-what-ces",
  },
];

export default function LatestThinking() {
  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Latest thinking</div>
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
              <div className="thinking-date">{post.date}</div>
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
