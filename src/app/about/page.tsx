import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactBlock from "@/components/ContactBlock";

const principles = [
  { title: "Human-centered", description: "Start with lived experience, not technical constraints" },
  { title: "Evidence-driven", description: "Qualitative insight meets quantitative validation" },
  { title: "Bias toward action", description: "Research that doesn\u2019t ship is just documentation" },
  { title: "Rigorous iteration", description: "Test assumptions early, adapt fast" },
  { title: "Strategic clarity", description: "Connect granular decisions to broader impact" },
];

export default function About() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <AnimateOnScroll animation="fade-in">
            <div className="label">Bio</div>
            <h1 className="page-title">About <em>Me</em></h1>
            <p className="page-desc">My path into HCI, guiding principles, and what drives me to build for health.</p>
          </AnimateOnScroll>
        </div>

        <hr className="section-line" />

        <section>
          <AnimateOnScroll animation="fade-up">
            <div className="about-prose">
              <p>
                I design technology that meets people where they are—in their
                complexity, not our assumptions. My path into HCI began with a
                simple question: why do digital tools so often fail the people who
                need them most? A decade of research taught me the answer
                isn&apos;t about features or flows—it&apos;s about whose
                experiences we center when we build.
              </p>
              <p>
                At Natera, I lead UX for lab operations and enterprise tools,
                building a centralized research function that demonstrates
                measurable ROI. I balance strategic vision with tactical execution,
                moving from foundational research to shipped products. Beyond
                biotech, I advance women&apos;s health technology as a Dealflow
                Fellow at AthenaDAO, shaping research priorities and funding
                strategy that actually moves the field forward. Through my
                Substack &ldquo;Women&apos;s Health, Computed,&rdquo; I translate
                academic research into accessible analysis—from evaluating
                perimenopause wearables to mapping the femtech landscape—because
                understanding shouldn&apos;t require a PhD.
              </p>
              <p>
                My approach is rapid and rigorous. I don&apos;t wait for perfect
                data when directional insight can shape better decisions today. I
                blend qualitative depth with quantitative validation, thriving in
                ambiguity where 0-to-1 problems demand both systems thinking and
                attention to the details that define experience.
              </p>
            </div>
          </AnimateOnScroll>
        </section>

        <hr className="section-line" />

        <section>
          <AnimateOnScroll>
            <div className="label">Philosophy</div>
            <div className="section-title">Guiding principles</div>
          </AnimateOnScroll>
          <div className="beliefs-grid">
            {principles.map((p, i) => (
              <AnimateOnScroll key={i} animation="fade-up">
                <div className="belief">
                  <span>
                    <strong>{p.title}</strong> — {p.description}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        <hr className="section-line" />

        <section>
          <AnimateOnScroll animation="fade-up">
            <div className="about-contact">
              <p>
                Feel free to get in touch at{" "}
                <a href="mailto:sainz.nag@gmail.com">sainz.nag@gmail.com</a>{" "}
                or find me on{" "}
                <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
              </p>
            </div>
          </AnimateOnScroll>
        </section>
      </div>
      <ContactBlock />
    </>
  );
}
