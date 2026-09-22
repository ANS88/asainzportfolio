import type { Metadata } from "next";
import ContactBlock from "@/components/ContactBlock";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WorkViewToggle from "@/components/WorkViewToggle";
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
          <WorkViewToggle studies={caseStudyList} />
        </section>

      </div>
      <ContactBlock />
    </>
  );
}
