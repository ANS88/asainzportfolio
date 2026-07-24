import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <div className="hero">
      <AnimateOnScroll animation="fade-in">
        <div className="hero-tag">Adriana Sainz &middot; PhD in HCI &middot; SF, CA</div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="status"><span className="status-dot"></span> Currently building</div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={200}>
        <h1>Hi, I&apos;m Adriana. I build and lead UX research in healthcare &mdash; shaping how clinical products get designed, tested, and shipped in regulated environments.</h1>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={420}>
        <div className="metrics-bar">
          <span>4 product areas owned</span>
          <span className="metrics-dot">&middot;</span>
          <span>12 products shipped 0-to-1</span>
          <span className="metrics-dot">&middot;</span>
          <span>585K patients/yr impacted</span>
          <span className="metrics-dot">&middot;</span>
          <span>6 publications</span>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={500}>
        <div className="hero-links">
          <a href="mailto:sainz.nag@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
          <a href="https://scholar.google.com/citations?user=6ec-wJ8AAAAJ" target="_blank" rel="noopener noreferrer">Scholar</a>
          <a href="https://drive.google.com/file/d/11d-LqzwOmtWanQYzoXCLvkrU13Dvfa0d/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume ↓</a>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
