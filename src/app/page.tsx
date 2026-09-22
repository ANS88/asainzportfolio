import Hero from "@/components/Hero";
import ContactBlock from "@/components/ContactBlock";
import ProjectShowcase from "@/components/ProjectShowcase";
export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <ProjectShowcase />
      </div>
      <ContactBlock />
    </>
  );
}
