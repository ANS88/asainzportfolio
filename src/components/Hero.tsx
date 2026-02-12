import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <div className="hero">
      <AnimateOnScroll animation="fade-in">
        <div className="hero-tag">Adriana Navarro Sainz &middot; PhD in HCI &middot; San Francisco</div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="status"><span className="status-dot"></span> Currently building</div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={200}>
        <h1>I build healthcare tools that work because <em>I studied the people using them first.</em></h1>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={350}>
        <p className="hero-sub">
          Designer, researcher, and builder with 10+ years in clinical and biotech environments. At{" "}
          <span className="tip">Natera<span className="tiptext">Genetic testing &amp; biotech &middot; 50+ laboratories</span></span>,
          I design workflows for genetic testing labs. Before that,{" "}
          <span className="tip">Cincinnati Children&apos;s Hospital<span className="tiptext">Pediatric genomics, clinical decision support, NIH-funded</span></span>.
          I don&apos;t hand off research to designers — I am the designer.
        </p>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={500}>
        <div className="hero-links">
          <a href="mailto:sainz.nag@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
          <a href="https://scholar.google.com/citations?user=6ec-wJ8AAAAJ" target="_blank" rel="noopener noreferrer">Scholar</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Resume ↓</a>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
