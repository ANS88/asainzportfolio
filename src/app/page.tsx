import Hero from "@/components/Hero";
import BuildingSection from "@/components/BuildingSection";
import ShippedSection from "@/components/ShippedSection";
import BeliefsSection from "@/components/BeliefsSection";
import InterestsMapSection from "@/components/InterestsMapSection";
import CrissyFieldCam from "@/components/CrissyFieldCam";
import MapSection from "@/components/MapSection";
import DreamsSection from "@/components/DreamsSection";
import PublicationsSection from "@/components/PublicationsSection";
import FavoriteReads from "@/components/FavoriteReads";
import SiteNav from "@/components/SiteNav";
import ContactBlock from "@/components/ContactBlock";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <hr className="section-line" />
        <BuildingSection />
        <hr className="section-line" />
        <ShippedSection />
        <hr className="section-line" />
        <BeliefsSection />
        <hr className="section-line" />
        <InterestsMapSection />
        <hr className="section-line" />
        <CrissyFieldCam />
        <hr className="section-line" />
        <MapSection />
        <hr className="section-line" />
        <DreamsSection />
        <hr className="section-line" />
        <PublicationsSection />
        <hr className="section-line" />
        <FavoriteReads />
        <hr className="section-line" />
        <SiteNav />
      </div>
      <ContactBlock />
    </>
  );
}
