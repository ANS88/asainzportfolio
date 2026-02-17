import BuildingSection from "@/components/BuildingSection";
import ShippedSection from "@/components/ShippedSection";
import BeliefsSection from "@/components/BeliefsSection";
import PublicationsSection from "@/components/PublicationsSection";
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
        <BuildingSection />
        <hr className="section-line" />
        <ShippedSection />
        <hr className="section-line" />
        <BeliefsSection />
        <hr className="section-line" />
        <PublicationsSection />
      </div>
      <ContactBlock />
    </>
  );
}
