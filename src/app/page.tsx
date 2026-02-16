import Hero from "@/components/Hero";
import SiteNav from "@/components/SiteNav";
import ContactBlock from "@/components/ContactBlock";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <hr className="section-line" />
        <SiteNav />
      </div>
      <ContactBlock />
    </>
  );
}
