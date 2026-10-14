import Hero from "@/components/Hero";
import ContactBlock from "@/components/ContactBlock";
import OrbitPortfolio from "@/components/OrbitPortfolio";
import FemswarmFeature from "@/components/FemswarmFeature";
export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <OrbitPortfolio />
        <FemswarmFeature />
      </div>
      <ContactBlock />
    </>
  );
}
