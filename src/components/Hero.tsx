import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <div className="hero">
      <AnimateOnScroll animation="fade-in">
        <div className="hero-tag">Adriana Sainz</div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={100}>
        <h1>All design is a signal-to-noise decision. I&apos;ve spent ten years making it in high-stakes systems.</h1>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={300}>
        <p className="hero-sub">UX research leader. PhD in HCI. 10 years setting research and design direction in regulated clinical environments.</p>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={350}>
        <div className="hero-scope">
          <span>50+ labs</span>
          <span>4 business units</span>
          <span>585K patients/yr</span>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={450}>
        <div className="hero-links">
          <a href="mailto:sainz.nag@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
          <a href="https://scholar.google.com/citations?user=6ec-wJ8AAAAJ" target="_blank" rel="noopener noreferrer">Scholar</a>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
