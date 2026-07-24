import Hero from "@/components/Hero";
import ContactBlock from "@/components/ContactBlock";
import FeaturedWork from "@/components/FeaturedWork";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <hr className="section-line" />

        <section>
          <AnimateOnScroll>
            <div className="label">Now</div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up">
            <div className="now-grid">
              <div className="now-item">
                <span className="now-from">From</span>
                <span className="now-to">Natera</span>
              </div>
              <div className="now-item">
                <span className="now-from">Role</span>
                <span className="now-to">UX Research Lead</span>
              </div>
              <div className="now-item">
                <span className="now-from">Focus</span>
                <span className="now-to">Lab platform &middot; Clinical AI</span>
              </div>
              <div className="now-item">
                <span className="now-from">Side</span>
                <span className="now-to">Women&apos;s Health, Computed</span>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <hr className="section-line" />
        <FeaturedWork />
      </div>
      <ContactBlock />
    </>
  );
}
