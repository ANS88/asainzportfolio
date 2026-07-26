import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <div className="hero">
      <AnimateOnScroll animation="fade-in">
        <div className="hero-tag">Adriana Sainz</div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={100}>
        <h1>I lead design and research for complex, high-stakes products.</h1>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={300}>
        <p className="hero-sub">A systems thinker and builder at heart with a decade of experience turning tangled problems into products people trust.</p>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={350}>
        <p className="hero-current">Currently at <a href="https://www.natera.com" target="_blank" rel="noopener noreferrer">Natera</a></p>
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
