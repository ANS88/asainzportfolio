import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PublicationsSection from "@/components/PublicationsSection";
import ContactBlock from "@/components/ContactBlock";

const beliefs = [
  "I\u2019ve spent ten years watching healthcare technology fail people in predictable ways. That shapes how I work.",
  "AI should augment clinical judgment, not simulate it. The handoff between algorithmic confidence and human decision-making is the central design problem in health, and it\u2019s almost always designed poorly.",
  "Compliance and good UX are not opposites. Regulated environments constrain the solution space, not the quality of thinking.",
  "The best health interfaces disappear. The worst cause harm. The difference is a research decision that happened, or didn\u2019t, before the first wireframe.",
  "Design is a political act. Who gets centered, who gets left out: those are choices whether you make them consciously or not. I try to.",
];

export default function About() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <AnimateOnScroll animation="fade-in">
            <div className="label">About</div>
            <h1 className="page-title">About <em>Me</em></h1>
          </AnimateOnScroll>
        </div>

        <hr className="section-line" />

        <section>
          <AnimateOnScroll>
            <div className="label">My Experience</div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0 }}>
                <Image
                  src="/images/profile.png"
                  alt="Adrian Sainz"
                  width={200}
                  height={200}
                  style={{ borderRadius: "50%", objectFit: "cover", width: 200, height: 200 }}
                />
              </div>
              <div className="about-prose">
              <p>
                I research and I design. I do both.
              </p>
              <p>
                At <a href="https://www.natera.com" target="_blank" rel="noopener noreferrer">Natera</a>, I lead UX for lab operations and enterprise tools, bridging research and product in a space where that gap is rarely closed. At <a href="https://www.athenadao.co/" target="_blank" rel="noopener noreferrer">AthenaDAO</a>, I shape which women&apos;s health research gets funded and why. Through my Substack, &ldquo;Women&apos;s Health, Computed,&rdquo; I write about femtech, perimenopause, and the distance between what science knows and what products actually do with it.
              </p>
              <p>
                That thread runs back to Cincinnati Children&apos;s Hospital, where I worked with investigators on NIH-funded clinical research, and through my PhD, which included a collaboration with Clue on perimenopause symptom tracking.
              </p>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <hr className="section-line" />

        <section>
          <AnimateOnScroll>
            <div className="label">My Approach</div>
            <div className="section-title">What I believe</div>
          </AnimateOnScroll>
          <div className="beliefs-list">
            {beliefs.map((b, i) => (
              <AnimateOnScroll key={i} animation="fade-up">
                <p className="belief-paragraph">{b}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        <hr className="section-line" />

        <section>
          <AnimateOnScroll>
            <div className="label">As a Human</div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="about-prose">
              <p>
                When I&apos;m not working, I&apos;m usually on my bike somewhere in the Bay, deep in a book, or planning the next trip.
              </p>
            </div>
          </AnimateOnScroll>
        </section>

        <hr className="section-line" />

        <PublicationsSection />

        <hr className="section-line" />

        <section>
          <AnimateOnScroll>
            <div className="label">Next</div>
            <div className="section-title">Currently looking for</div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="about-prose">
              <p>
                Hard problems at the intersection of health and AI &mdash; where design decisions are consequential, users are under pressure, and getting it wrong has real costs.
              </p>
              <p className="about-available">
                Available for: keynotes on AI and health UX, advisory roles in femtech and clinical AI, research consulting.
              </p>
            </div>
            <div className="about-contact-links">
              <a href="mailto:sainz.nag@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://calendar.app.google" target="_blank" rel="noopener noreferrer">Calendar</a>
            </div>
          </AnimateOnScroll>
        </section>
      </div>
      <ContactBlock />
    </>
  );
}
