import type { Metadata } from "next";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PublicationsSection from "@/components/PublicationsSection";
import ContactBlock from "@/components/ContactBlock";
import FavoriteReads from "@/components/FavoriteReads";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "About, Adriana Navarro Sainz",
  description:
    "Adriana Navarro Sainz. Design and research leader. PhD in HCI, 12 products shipped, 585K patients/yr impacted. Based in San Francisco.",
  openGraph: {
    description:
      "Adriana Navarro Sainz. Design and research leader. PhD in HCI, 12 products shipped, 585K patients/yr impacted. Based in San Francisco.",
  },
  twitter: {
    description:
      "Adriana Navarro Sainz. Design and research leader. PhD in HCI, 12 products shipped, 585K patients/yr impacted. Based in San Francisco.",
  },
};

const beliefs: { belief: string; decision: string }[] = [
  {
    belief: "The best health interfaces disappear. The worst cause harm. The difference is a research decision that happened, or didn’t, before the first wireframe.",
    decision: "At Natera, I replaced 4 legacy review tools with one. Not by adding features, but by eliminating the friction that made clinicians work around the system. Turnaround dropped 50%.",
  },
  {
    belief: "AI should augment clinical judgment, not simulate it. The handoff between algorithmic confidence and human decision-making is the central design problem in health.",
    decision: "I designed the Clinical Review workflow around progressive disclosure, surfacing automated flags only when they were actionable, not as interruptions. The genetic counselors kept their judgment in the loop.",
  },
  {
    belief: "Compliance and good UX are not opposites. Regulated environments constrain the solution space, not the quality of thinking.",
    decision: "When the Cures Act required instant patient access to results, I used the mandate as leverage to fund a proper patient portal, turning a compliance requirement into a patient experience investment that reached 181K users.",
  },
  {
    belief: "Design is a political act. Who gets centered, who gets left out: those are choices whether you make them consciously or not.",
    decision: "I centered perimenopausal women, a population most health apps stop serving at 40, as the subject of my dissertation research. The field was building menstrual trackers that assumed regularity.",
  },
];

const howILead = [
  "I hire for judgment, not just methods. The researchers I want on my team can navigate ambiguity, push back on stakeholders, and know when a scrappy study is better than a perfect one.",
  "I embed research in product teams rather than running a centralized service. Research that lives next to the decisions it’s meant to inform gets used. Research that gets presented two sprints later gets filed.",
  "I make the case for research by showing what it costs to skip it. In regulated environments, the cost is measured in rework, failed validations, and products that clinicians work around instead of with.",
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

        {/* Photo + Bio side by side */}
        <section>
          <AnimateOnScroll animation="fade-up">
            <div className="about-intro">
              <div className="about-intro-photo">
                <Image
                  src="/images/profile-purple.png"
                  alt="Adriana Sainz"
                  width={320}
                  height={320}
                  style={{ borderRadius: 20, objectFit: "cover", width: "100%", height: "auto" }}
                />
              </div>
              <div className="about-intro-text">
                <div className="about-prose">
                  <p>
                    I grew up in Guadalajara, Mexico, where I found an early passion for building. A detour through Montreal showed me that what I wanted to build were digital things. I moved to the US for grad school, earning a PhD in human-computer interaction with research focused on women&apos;s health. From there I joined <a href="https://www.cincinnatichildrens.org/" target="_blank" rel="noopener noreferrer">Cincinnati Children&apos;s Hospital</a> as a UX designer in biomedical informatics, designing tools for patients, physicians, and scientists. Today I&apos;m at <a href="https://www.natera.com" target="_blank" rel="noopener noreferrer">Natera</a>, the world&apos;s leading genetic testing company, where I lead a team of designers and researchers making the lab experience better. Through it all, women&apos;s health has remained my throughline: the space where I write, research, and invest.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <hr className="section-line" />

        {/* What I believe: strongest first, each with a concrete decision */}
        <section>
          <AnimateOnScroll>
            <div className="label">My Approach</div>
            <div className="section-title">What I believe</div>
          </AnimateOnScroll>
          <div className="beliefs-list">
            {beliefs.map((b, i) => (
              <AnimateOnScroll key={i} animation="fade-up">
                <div className="belief-block">
                  <p className="belief-paragraph">{b.belief}</p>
                  <p className="belief-decision">{b.decision}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        <hr className="section-line" />

        {/* How I Lead */}
        <section>
          <AnimateOnScroll>
            <div className="label">Leadership</div>
            <div className="section-title">How I Lead</div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="about-prose">
              <p>I build research practices, not just research projects. Here&apos;s what that looks like:</p>
            </div>
          </AnimateOnScroll>
          <div className="beliefs-list">
            {howILead.map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up">
                <p className="belief-paragraph">{item}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        <hr className="section-line" />

        {/* As a Human */}
        <section>
          <AnimateOnScroll>
            <div className="label">As a Human</div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="about-prose">
              <p>
                When I&apos;m not working, I&apos;m cycling the Bay, hiking, dancing, traveling somewhere new, or deep in a book.
              </p>
            </div>
          </AnimateOnScroll>
        </section>

        <MapSection />

        <hr className="section-line" />

        <FavoriteReads />

        <hr className="section-line" />

        <PublicationsSection />

        <hr className="section-line" />

        {/* Currently looking for: shape of role */}
        <section>
          <AnimateOnScroll>
            <div className="label">Next</div>
            <div className="section-title">Currently looking for</div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="about-prose">
              <p>
                A role where I set research and design direction for an organization building health or AI products. I want to own a domain, build a practice, and shape how evidence gets used in product decisions, not just run studies.
              </p>
              <p className="about-available">
                Available for: design leadership in health/AI, building research teams from zero, advisory roles in femtech and clinical AI.
              </p>
            </div>
            <div className="about-contact-links">
              <a href="mailto:sainz.nag@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/adrianans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </AnimateOnScroll>
        </section>
      </div>
      <ContactBlock />
    </>
  );
}
