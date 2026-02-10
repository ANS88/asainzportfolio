import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import CrissyFieldCam from "@/components/CrissyFieldCam";
import WorkSection from "@/components/WorkSection";
import PublicationsSection from "@/components/PublicationsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CrissyFieldCam />
      <MapSection />
      <WorkSection />
      <PublicationsSection />
    </>
  );
}
