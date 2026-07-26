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

        {/* Photo */}
        <section>
          <AnimateOnScroll>
            <div style={{ flexShrink: 0, marginBottom: "1.25rem" }}>
              <Image
                src="/images/profile.png"
                alt="Adriana Sainz"
                width={150}
                height={150}
                style={{ borderRadius: "50%", objectFit: "cover", width: 150, height: 150 }}
              />
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

        {/* My Experience */}
        <section>
          <AnimateOnScroll>
            <div className="label">My Experience</div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="about-prose">
              <p>
                Building research practices in healthcare.
              </p>
              <p>
                I&apos;ve spent ten years building UX research into healthcare organizations that didn&apos;t have it: establishing practices, growing researchers, and proving that user evidence changes what gets shipped.
              </p>
              <p>
                Currently at <a href="https://www.natera.com" target="_blank" rel="noopener noreferrer">Natera</a>, where I lead UX research across lab operations and enterprise tools, and my team&apos;s work shapes product decisions for systems serving 585K patients a year. At <a href="https://www.athenadao.co/" target="_blank" rel="noopener noreferrer">AthenaDAO</a>, I evaluate which women&apos;s health research proposals get funded and why. Through my Substack, <a href="https://womenshealthcomputed.substack.com" target="_blank" rel="noopener noreferrer">&ldquo;Women&apos;s Health, Computed,&rdquo;</a> I write about femtech, perimenopause, and the distance between what science knows and what products actually do with it.
              </p>
              <p>
                That thread runs back to <a href="https://www.cincinnatichildrens.org/" target="_blank" rel="noopener noreferrer">Cincinnati Children&apos;s Hospital</a>, where I worked with investigators on NIH-funded clinical research (<a href="https://www.rarediseasesnetwork.org/" target="_blank" rel="noopener noreferrer">1</a>, <a href="https://www.nhlbi.nih.gov/news/2019/lungmap-nhlbi-project-breathes-life-first-depth-atlas-human-lung" target="_blank" rel="noopener noreferrer">2</a>, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4888111/" target="_blank" rel="noopener noreferrer">3</a>), and through my PhD, which included a collaboration with <a href="https://helloclue.com/" target="_blank" rel="noopener noreferrer">Clue</a> on perimenopause symptom tracking.
              </p>
            </div>
          </AnimateOnScroll>
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
