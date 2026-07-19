import Hero from "@/components/Hero";
import InterestsMapSection from "@/components/InterestsMapSection";
import ContactBlock from "@/components/ContactBlock";
import FeaturedWork from "@/components/FeaturedWork";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <hr className="section-line" />

        {/* Currently (single line) */}
        <section>
          <AnimateOnScroll>
            <div className="label">In progress</div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <p className="currently-line">
              Currently: leading lab platform UX at Natera &middot; establishing a cross-org research practice &middot; writing Women&apos;s Health, Computed on Substack
            </p>
          </AnimateOnScroll>
        </section>

        <hr className="section-line" />
        <FeaturedWork />
        <hr className="section-line" />
        <InterestsMapSection />
      </div>
      <ContactBlock />
    </>
  );
}
