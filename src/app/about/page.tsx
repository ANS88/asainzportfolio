import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PublicationsSection from "@/components/PublicationsSection";
import ContactBlock from "@/components/ContactBlock";

const beliefs = [
  "Healthcare technology fails people in predictable ways. I\u2019ve spent 10 years studying those patterns.",
  "AI should augment clinical judgment, not simulate it. The interaction design problem at the center of AI health right now is the handoff between algorithmic confidence and human decision-making. That handoff is almost always designed poorly.",
  "Compliance and good UX are not opposites. Regulated environments constrain the solution space. They don\u2019t constrain the quality of thinking.",
  "The best health interfaces disappear. The worst ones cause harm. The difference is almost always a research decision that happened \u2014 or didn\u2019t \u2014 before the first wireframe.",
];

export default function About() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <AnimateOnScroll animation="fade-in">
            <div className="label">Bio</div>
            <h1 className="page-title">About <em>Me</em></h1>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fade-in" delay={100}>
          <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
            <Image
              src="/images/profile.png"
              alt="Adrian Sainz"
              width={300}
              height={300}
              style={{ borderRadius: "50%", objectFit: "cover", width: 300, height: 300 }}
            />
          </div>
        </AnimateOnScroll>

        <hr className="section-line" />

        <section>
          <AnimateOnScroll animation="fade-up">
            <div className="about-prose">
              <p>
                I&apos;m a researcher who ships products and a designer who publishes research. In healthcare, that combination is rare. It&apos;s also necessary.
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
                academic research into accessible analysis&mdash;from evaluating
                perimenopause wearables to mapping the femtech landscape&mdash;because
                understanding shouldn&apos;t require a PhD.
              </p>
            </div>
          </AnimateOnScroll>
        </section>

        <hr className="section-line" />

        <section>
          <AnimateOnScroll>
            <div className="label">Philosophy</div>
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
