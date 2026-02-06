const experiments = [
  {
    title: "Generative Art Series",
    description:
      "Exploring algorithmic art through code — creating visual compositions with mathematical patterns and randomness.",
    tags: ["Creative Coding", "Canvas API"],
  },
  {
    title: "Motion Studies",
    description:
      "A collection of micro-interactions and animation experiments exploring fluid, natural movement in UI.",
    tags: ["Animation", "Framer Motion"],
  },
  {
    title: "Typography Explorer",
    description:
      "An interactive tool for pairing and testing typefaces, exploring the relationship between letterforms.",
    tags: ["Typography", "React"],
  },
  {
    title: "Color System Generator",
    description:
      "A utility that generates accessible color palettes from a single seed color using perceptual color science.",
    tags: ["Color Theory", "Accessibility"],
  },
  {
    title: "3D Interface Concepts",
    description:
      "Experimental spatial UI concepts using WebGL, exploring depth and dimensionality in interface design.",
    tags: ["Three.js", "WebGL"],
  },
  {
    title: "Sound Visualizer",
    description:
      "Real-time audio visualization that transforms sound into abstract visual forms using the Web Audio API.",
    tags: ["Audio", "Visualization"],
  },
];

export default function Playground() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="mb-12 md:mb-16">
        <h1 className="animate-fade-in-up font-serif text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Playground
        </h1>
        <p className="animate-fade-in-up-delay-1 mt-6 max-w-lg text-lg text-muted leading-relaxed">
          A space for creative experiments, side projects, and explorations
          outside of client work. Where curiosity meets code.
        </p>
      </div>

      <div className="animate-fade-in-up-delay-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiments.map((experiment, index) => (
          <article
            key={index}
            className="project-card group cursor-pointer rounded-2xl border border-border bg-white p-6"
          >
            {/* Placeholder visual */}
            <div className="mb-5 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-stone-100 to-stone-200">
              <span className="font-serif text-4xl italic text-stone-300">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-serif text-lg font-semibold tracking-tight group-hover:underline">
              {experiment.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {experiment.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {experiment.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
