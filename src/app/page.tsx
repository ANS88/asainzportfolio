import Hero from "@/components/Hero";
import ContactBlock from "@/components/ContactBlock";
import FeaturedWork from "@/components/FeaturedWork";
export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <hr className="section-line" />
        <FeaturedWork />
      </div>
      <ContactBlock />
    </>
  );
}
