import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <div className="hero">
      {/* Decorative moonflower */}
      <div className="hero-moonflower" aria-hidden="true">
        <svg viewBox="0 0 120 120" width="120" height="120" className="moonflower-spin">
          <circle cx="60" cy="60" r="10" fill="#4b49f7" opacity=".15" />
          <circle cx="60" cy="60" r="6" fill="#4b49f7" opacity=".3" />
          <circle cx="60" cy="60" r="3" fill="#eef0ff" />
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 60 60)`}>
              <ellipse cx="60" cy="28" rx="14" ry="26" fill="white" stroke="#c7d2fe" strokeWidth="1" opacity=".7" />
              <ellipse cx="60" cy="32" rx="7" ry="14" fill="#eef0ff" opacity=".4" />
            </g>
          ))}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <circle
              key={`d${i}`}
              cx={60 + 14 * Math.cos((angle * Math.PI) / 180)}
              cy={60 + 14 * Math.sin((angle * Math.PI) / 180)}
              r="1.5"
              fill="#c7d2fe"
              opacity=".6"
            />
          ))}
        </svg>
      </div>
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
