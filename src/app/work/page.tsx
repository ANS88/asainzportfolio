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
          </AnimateOnScroll>
        </div>
        <hr className="section-line" />

        <section>
          <div className="cs-card-grid">
            {caseStudyList.map((study) => (
              <AnimateOnScroll key={study.slug} animation="fade-up">
                <a href={`/work/${study.slug}`} className="cs-preview-card">
                  {study.previewVideo && study.previewVideo.startsWith("/") ? (
                    <div className="cs-preview-video">
                      <video
                        src={study.previewVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  ) : study.previewVideo ? (
                    <div className="cs-preview-video">
                      <iframe
                        src={study.previewVideo}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        loading="lazy"
                        tabIndex={-1}
                      />
                    </div>
                  ) : study.previewImage ? (
                    <div className="cs-preview-image">
                      <img src={study.previewImage} alt={study.title} loading="lazy" />
                    </div>
                  ) : null}
                  <div className="cs-preview-body">
                    <div className="cs-preview-label">{study.company} &middot; {study.timeline}</div>
                    <div className="cs-preview-title">{study.title}</div>
                    <p className="cs-preview-stakes">{study.stakesLine}</p>
                    {study.tags && study.tags.length > 0 && (
                      <div className="cs-preview-tags">
                        {study.tags.map((tag) => (
                          <span key={tag} className="cs-hero-tag">{tag}</span>
                        ))}
                      </div>
                    )}
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
