import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <div className="hero">
      {/* Decorative moonflower */}
      <div className="hero-moonflower" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="120" height="120" className="moonflower-spin">
          <defs>
            <radialGradient id="hmf-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8f0e0" />
              <stop offset="12%" stopColor="#d4a0d4" />
              <stop offset="28%" stopColor="#6848c8" />
              <stop offset="50%" stopColor="#3535d6" />
              <stop offset="100%" stopColor="#1a1a9e" />
            </radialGradient>
            <radialGradient id="hmf-center" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f0f4d8" />
              <stop offset="60%" stopColor="#c8a8d8" />
              <stop offset="100%" stopColor="#8060b8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M20,2 C24,2 28,6 30,10 C33,6 37,5 38,8 C39,12 36,16 34,18 C38,20 40,24 38,27 C36,30 32,30 30,29 C31,33 30,37 27,38 C24,39 21,36 20,33 C19,36 16,39 13,38 C10,37 9,33 10,29 C8,30 4,30 2,27 C0,24 2,20 6,18 C4,16 1,12 2,8 C3,5 7,6 10,10 C12,6 16,2 20,2 Z"
            fill="url(#hmf-grad)"
            stroke="#2020a0"
            strokeWidth=".3"
          />
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <line
              key={`hv${i}`}
              x1="20"
              y1="20"
              x2={20 + 17 * Math.cos(((angle - 90) * Math.PI) / 180)}
              y2={20 + 17 * Math.sin(((angle - 90) * Math.PI) / 180)}
              stroke="#4848d0"
              strokeWidth=".4"
              opacity=".5"
            />
          ))}
          <circle cx="20" cy="20" r="7" fill="url(#hmf-center)" />
          <circle cx="20" cy="20" r="2.2" fill="#e8f0d0" />
          <circle cx="20" cy="20" r="1" fill="#c0d8a0" />
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
