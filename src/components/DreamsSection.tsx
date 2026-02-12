import AnimateOnScroll from "./AnimateOnScroll";

export default function DreamsSection() {
  const dreams = [
    { text: "Finish a PhD while working full-time", done: true },
    { text: "Publish in a top HCI venue", done: true },
    { text: "Get a US patent", done: true },
    { text: "Ship a 0-to-1 product", done: true },
    { text: "Start a Substack people actually read", done: true },
    { text: "Build something with AI (Claude Code)", done: true },
    { text: "Evaluate research proposals for a DAO", done: true },
    { text: "Ship a consumer health product", done: false },
    { text: "Keynote a design or health conference", done: false },
    { text: "Work at a company shaping how AI meets health", done: false },
    { text: "Write a book about somaesthetic design", done: false },
    { text: "1,000 Substack subscribers", done: false },
    { text: "Design an experience that makes someone cry (in a good way)", done: false },
    { text: "Get my green card", done: false },
    { text: "Visit all the wine regions of South America", done: false },
  ];

  const doneCount = dreams.filter(d => d.done).length;
  const pct = Math.round((doneCount / dreams.length) * 100);

  return (
    <section>
      <AnimateOnScroll>
        <div className="label">Life dashboard</div>
        <div className="dreams-header">
          <div className="section-title">Things I&apos;m working toward</div>
          <div className="dreams-pct">{pct}%</div>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={100}>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${pct}%`, background: "linear-gradient(90deg, var(--accent), var(--accent2))" }}></div>
      </div>
      </AnimateOnScroll>
      <div style={{ height: ".75rem" }}></div>
      <AnimateOnScroll animation="fade-up" delay={200}>
      <div className="dream-list">
        {dreams.map((dream, i) => (
          <div key={i} className={`dream${dream.done ? " done" : ""}`}>
            <span className="dream-check"></span>
            <span className="dream-text">{dream.text}</span>
          </div>
        ))}
      </div>
      </AnimateOnScroll>
    </section>
  );
}
