import BuildingSection from "@/components/BuildingSection";
import ShippedSection from "@/components/ShippedSection";
import ContactBlock from "@/components/ContactBlock";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Work() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <AnimateOnScroll animation="fade-in">
            <div className="label">Portfolio</div>
            <h1 className="page-title">Work</h1>
            <p className="page-desc">Case studies from 10 years designing in clinical environments. Every project here involved real users, regulated systems, and decisions that affected patient outcomes.</p>
          </AnimateOnScroll>
        </div>
        <hr className="section-line" />

        {/* Case Studies */}
        <section>
          <AnimateOnScroll>
            <div className="label">Deep dives</div>
            <div className="section-title">Case studies</div>
          </AnimateOnScroll>
          <div className="cs-card-grid">
            <AnimateOnScroll animation="fade-up">
              <a href="/work/manual-review" className="cs-preview-card">
                <div className="cs-preview-label">Natera &middot; 2024&ndash;2025</div>
                <div className="cs-preview-title">Manual Clinical Review Workflow Redesign</div>
                <p className="cs-preview-stakes">When genetic test reports are delayed, treatment decisions are delayed. I redesigned the workflow that determines how fast 585,000 patients per year get their results.</p>
                <div className="cs-preview-metrics">
                  <span>50% faster turnaround</span>
                  <span>585K reports/year</span>
                  <span>4 systems &rarr; 1</span>
                </div>
                <span className="cs-preview-link">Read case study &rarr;</span>
              </a>
            </AnimateOnScroll>
          </div>
        </section>

        <hr className="section-line" />
        <BuildingSection />
        <hr className="section-line" />
        <ShippedSection />
      </div>
      <ContactBlock />
    </>
  );
}
