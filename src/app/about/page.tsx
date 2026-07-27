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
                    I grew up in <a href="https://visitagdl.com/" target="_blank" rel="noopener noreferrer">Guadalajara</a>, Mexico, where I found an early passion for building. A detour through <a href="https://www.concordia.ca/academics/graduate/calendar/current/fine-arts-programs/digital-technologies-in-design-art-practice-graduate-certificate.html" target="_blank" rel="noopener noreferrer">Montreal</a> showed me that what I wanted to build were digital things. I moved to the US for grad school, earning a <a href="http://rave.ohiolink.edu/etdc/view?acc_num=ucin1746535132778724" target="_blank" rel="noopener noreferrer">PhD in human-computer interaction</a> with research focused on women&apos;s health. From there I joined <a href="https://www.cincinnatichildrens.org/" target="_blank" rel="noopener noreferrer">Cincinnati Children&apos;s Hospital</a> as a UX designer in biomedical informatics, designing tools for patients, physicians, and scientists. Today I&apos;m at <a href="https://www.natera.com/" target="_blank" rel="noopener noreferrer">Natera</a>, the world&apos;s leading genetic testing company, where I lead a team of designers and researchers making the lab experience better. Through it all, women&apos;s health has remained my throughline: the space where I <a href="https://womenshealthcomputed.substack.com/" target="_blank" rel="noopener noreferrer">write</a>, <a href="https://www.athenadao.co/" target="_blank" rel="noopener noreferrer">research, and invest</a>.
                  </p>
                  <p>
                    Outside of work, you&apos;ll find me exploring the <a href="https://www.alltrails.com/poi/us/california/alameda/san-francisco-bay" target="_blank" rel="noopener noreferrer">Bay Area</a> and the world with my <a href="https://www.paulbrendel.com/" target="_blank" rel="noopener noreferrer">husband</a> (by bike whenever possible), <a href="https://www.brian-coffee-spot.com/the-coffee-spot-guide-to/usa-canada/san-francisco/" target="_blank" rel="noopener noreferrer">caf&eacute; hopping</a> with a good book, or scouting the <a href="https://theperfectspotsf.com/2020/03/15/the-best-tacos-in-san-francisco-that-arent-la-taqueria/" target="_blank" rel="noopener noreferrer">best tacos</a> in the area.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <hr className="section-line" />

        {/* Experience */}
        <section>
          <AnimateOnScroll>
            <div className="label">Relevant experience</div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up">
            <div className="experience-block">
              <div className="experience-header">
                <div className="experience-company">Natera</div>
                <div className="experience-role">Senior UX Design &amp; Research Manager</div>
                <div className="experience-dates">2021 &ndash; Present</div>
              </div>
              <ul className="experience-list">
                <li>Established the company&apos;s first team dedicated to lab experience, defining the roles, hiring the designers and researchers, and setting the success metrics and roadmaps for a function that didn&apos;t exist before.</li>
                <li>Led the 0&rarr;1 creation of Natera&apos;s first patient portal, defining the end-to-end patient experience from test order through results.</li>
                <li>Built the company&apos;s first software layer for the lab itself, a product suite spanning every step of sample processing across 50+ laboratories.</li>
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up">
            <div className="experience-block">
              <div className="experience-header">
                <div className="experience-company">Cincinnati Children&apos;s Hospital Medical Center</div>
                <div className="experience-role">UX Designer, Biomedical Informatics</div>
                <div className="experience-dates">2019 &ndash; 2021</div>
              </div>
              <ul className="experience-list">
                <li>Led the 0&rarr;1 design of a patient and caregiver portal for families managing cystic fibrosis, chronic care coordination where missed information has clinical consequences.</li>
                <li>Created a medication adherence app for teens, designing for the hardest adherence population there is: adolescents who don&apos;t want another adult telling them what to do.</li>
                <li>Built a clinical decision support tool helping patients and providers navigate genetic testing decisions.</li>
                <li>Designed a variant interpretation and curation bank, internal tooling for the scientists classifying genetic variants, where interface clarity directly affects diagnostic accuracy.</li>
              </ul>
            </div>
          </AnimateOnScroll>
        </section>

        <hr className="section-line" />

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
