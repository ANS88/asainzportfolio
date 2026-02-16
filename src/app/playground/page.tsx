import InterestsMapSection from "@/components/InterestsMapSection";
import CrissyFieldCam from "@/components/CrissyFieldCam";
import MapSection from "@/components/MapSection";
import DreamsSection from "@/components/DreamsSection";
import FavoriteReads from "@/components/FavoriteReads";
import ContactBlock from "@/components/ContactBlock";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const experiments = [
  {
    title: "Generative Art Series",
    description: "Exploring algorithmic art through code — creating visual compositions with mathematical patterns and randomness.",
    tags: ["Creative Coding", "Canvas API"],
  },
  {
    title: "Motion Studies",
    description: "A collection of micro-interactions and animation experiments exploring fluid, natural movement in UI.",
    tags: ["Animation", "Framer Motion"],
  },
  {
    title: "Typography Explorer",
    description: "An interactive tool for pairing and testing typefaces, exploring the relationship between letterforms.",
    tags: ["Typography", "React"],
  },
  {
    title: "Color System Generator",
    description: "A utility that generates accessible color palettes from a single seed color using perceptual color science.",
    tags: ["Color Theory", "Accessibility"],
  },
  {
    title: "3D Interface Concepts",
    description: "Experimental spatial UI concepts using WebGL, exploring depth and dimensionality in interface design.",
    tags: ["Three.js", "WebGL"],
  },
  {
    title: "Sound Visualizer",
    description: "Real-time audio visualization that transforms sound into abstract visual forms using the Web Audio API.",
    tags: ["Audio", "Visualization"],
  },
];

export default function Playground() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <AnimateOnScroll animation="fade-in">
            <div className="label">Experiments</div>
            <h1 className="page-title">Playground</h1>
            <p className="page-desc">Creative experiments, side projects, and explorations where curiosity meets code.</p>
          </AnimateOnScroll>
        </div>

        <hr className="section-line" />

        {/* Experiments grid */}
        <section>
          <AnimateOnScroll>
            <div className="label">Projects</div>
            <div className="section-title">Creative experiments</div>
          </AnimateOnScroll>
          <div className="build-grid">
            {experiments.map((exp, i) => (
              <AnimateOnScroll key={i} animation="scale-in">
                <div className="build-card">
                  <div className="experiment-number">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{exp.title}</h3>
                  <p>{exp.description}</p>
                  <div className="experiment-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="read-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

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
