import Hero from "@/components/Hero";
import InterestsMapSection from "@/components/InterestsMapSection";
import CrissyFieldCam from "@/components/CrissyFieldCam";
import MapSection from "@/components/MapSection";
import DreamsSection from "@/components/DreamsSection";
import FavoriteReads from "@/components/FavoriteReads";
import SiteNav from "@/components/SiteNav";
import ContactBlock from "@/components/ContactBlock";
import LatestThinking from "@/components/LatestThinking";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <hr className="section-line" />
        <SiteNav />
        <hr className="section-line" />
        <LatestThinking />
        <hr className="section-line" />
        <InterestsMapSection />
        <hr className="section-line" />
        <CrissyFieldCam />
        <hr className="section-line" />
        <MapSection />
        <hr className="section-line" />
        <DreamsSection />
        <hr className="section-line" />
        <FavoriteReads />
      </div>
      <ContactBlock />
    </>
  );
}
