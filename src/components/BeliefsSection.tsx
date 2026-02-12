import AnimateOnScroll from "./AnimateOnScroll";

export default function BeliefsSection() {
  const beliefs = [
    "The handoff between research and design is where most insights go to die. Skip it.",
    "If you can\u2019t stand next to someone while they work, you don\u2019t understand the problem well enough to design for it.",
    "The best health tools accommodate ambiguity. The worst ones optimize it away.",
    "Research that doesn\u2019t ship is just documentation.",
    "Every interface assumes a body. Most assume the wrong one.",
    "\u201CEvidence-based\u201D and \u201Cevidence-felt\u201D are different. Both matter.",
  ];

  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Principles</div>
        <div className="section-title">Things I believe about building</div>
      </AnimateOnScroll>
      <div className="beliefs-grid">
        {beliefs.map((b, i) => (
          <AnimateOnScroll key={i} animation="fade-up">
            <div className="belief"><span>{b}</span></div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
