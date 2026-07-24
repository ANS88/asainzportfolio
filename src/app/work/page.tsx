import type { Metadata } from "next";
import ContactBlock from "@/components/ContactBlock";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { caseStudyList } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work — Adriana Navarro Sainz",
  description:
    "Case studies from 10 years designing clinical tools — genetic testing portals, lab workflows, and clinical decision support at Natera and Cincinnati Children's.",
  openGraph: {
    description:
      "Case studies from 10 years designing clinical tools — genetic testing portals, lab workflows, and clinical decision support at Natera and Cincinnati Children's.",
  },
  twitter: {
    description:
      "Case studies from 10 years designing clinical tools — genetic testing portals, lab workflows, and clinical decision support at Natera and Cincinnati Children's.",
  },
};

export default function Work() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <AnimateOnScroll animation="fade-in">
            <div className="label">Portfolio</div>
            <h1 className="page-title">Work</h1>
            <p className="page-desc">10 years in clinical environments. Real users, regulated systems, patient outcomes.</p>
          </AnimateOnScroll>
        </div>
        <hr className="section-line" />

        <section>
          <div className="cs-card-grid">
            {caseStudyList.map((study) => (
              <AnimateOnScroll key={study.slug} animation="fade-up">
                <a href={`/work/${study.slug}`} className="cs-preview-card">
                  <div className="cs-preview-label">{study.company} &middot; {study.timeline}</div>
                  <div className="cs-preview-title">{study.title}</div>
                  <p className="cs-preview-stakes">{study.stakesLine}</p>
                  <span className="cs-preview-link">Read case study &rarr;</span>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

      </div>
      <ContactBlock />
    </>
  );
}
