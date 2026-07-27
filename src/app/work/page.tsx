import type { Metadata } from "next";
import ContactBlock from "@/components/ContactBlock";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { caseStudyList } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work, Adriana Navarro Sainz",
  description:
    "Case studies from 10 years designing complex, high-stakes products: genetic testing portals, lab workflows, and clinical decision support at Natera and Cincinnati Children's.",
  openGraph: {
    description:
      "Case studies from 10 years designing complex, high-stakes products: genetic testing portals, lab workflows, and clinical decision support at Natera and Cincinnati Children's.",
  },
  twitter: {
    description:
      "Case studies from 10 years designing complex, high-stakes products: genetic testing portals, lab workflows, and clinical decision support at Natera and Cincinnati Children's.",
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
            <p className="page-desc">The gap between what science knows and what products do with it. That&rsquo;s where my work lives.</p>
          </AnimateOnScroll>
        </div>
        <hr className="section-line" />

        <section>
          <div className="cs-card-grid">
            {caseStudyList.map((study) => (
              <AnimateOnScroll key={study.slug} animation="fade-up">
                <a href={`/work/${study.slug}`} className="cs-preview-card">
                  {study.previewImage && (
                    <div className="cs-preview-image">
                      <img src={study.previewImage} alt={study.title} loading="lazy" />
                    </div>
                  )}
                  <div className="cs-preview-body">
                    <div className="cs-preview-label">{study.company} &middot; {study.timeline}</div>
                    <div className="cs-preview-title">{study.title}</div>
                    <p className="cs-preview-stakes">{study.stakesLine}</p>
                    <span className="cs-preview-link">Read case study &rarr;</span>
                  </div>
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
