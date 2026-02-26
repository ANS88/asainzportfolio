import Hero from "@/components/Hero";
import InterestsMapSection from "@/components/InterestsMapSection";
import MapSection from "@/components/MapSection";
import DreamsSection from "@/components/DreamsSection";
import FavoriteReads from "@/components/FavoriteReads";
import SiteNav from "@/components/SiteNav";
import ContactBlock from "@/components/ContactBlock";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import LatestThinking from "@/components/LatestThinking";
import PublicationsSection from "@/components/PublicationsSection";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <hr className="section-line" />
        <CurrentlyBuilding />
        <hr className="section-line" />
        <LatestThinking />
        <hr className="section-line" />
        <PublicationsSection />
        <hr className="section-line" />
        <SiteNav />
        <hr className="section-line" />
        <InterestsMapSection />
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
