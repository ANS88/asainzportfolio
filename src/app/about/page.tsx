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

        <hr className="section-line" />

        <section>
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
                My work lives in the space between research and making. I ask the hard questions and then I&apos;m the one who sticks around to build the answers.
              </p>
              <p>
                Right now, that means leading UX for lab operations and enterprise tools at Natera, working in the space between what the research says and what actually gets built. I&apos;ve been focused on creating the kind of research infrastructure that makes design decisions legible to the business, and vice versa.
              </p>
              <p>
                Outside of biotech, I work as a Dealflow Fellow at AthenaDAO, where I help shape which women&apos;s health research gets funded and why. Because who decides what gets studied matters just as much as the research itself. And through my Substack, &ldquo;Women&apos;s Health, Computed,&rdquo; I write about the technology meant to serve women&apos;s bodies: perimenopause wearables, the femtech landscape, the distance between what the science says and what ends up in an app. That gap bothers me, and writing is how I think through it.
              </p>
              <p>
                That obsession didn&apos;t start at Natera. At Cincinnati Children&apos;s Hospital, I worked alongside investigators and clinical researchers on NIH-funded projects, learning to move between academic rigor and real clinical environments. My PhD deepened that further, including a collaboration with Clue to study how women actually experience and track perimenopause symptoms. Research that made the distance between what science knows and what products do with that knowledge impossible to ignore.
              </p>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <hr className="section-line" />

        <section>
          <AnimateOnScroll>
            <div className="label">Out of Office</div>
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
