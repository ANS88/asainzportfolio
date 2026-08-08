import Hero from "@/components/Hero";
import ContactBlock from "@/components/ContactBlock";
import FeaturedWork from "@/components/FeaturedWork";
import WorkGallery from "@/components/WorkGallery";
export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <hr className="section-line" />
        <FeaturedWork />
        <hr className="section-line" />
        <WorkGallery />
      </div>
      <ContactBlock />
    </>
  );
}
