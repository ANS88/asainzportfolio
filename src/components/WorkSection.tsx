const projects = [
  {
    title: "Healthcare UX Redesign",
    category: "UX Design / Research",
    description:
      "Redesigned the patient portal experience for a genetic testing platform, improving task completion rates by 40%.",
    year: "2025",
  },
  {
    title: "Design System Architecture",
    category: "Design Systems",
    description:
      "Built a comprehensive design system serving 12 product teams, reducing design-to-development handoff time by 60%.",
    year: "2024",
  },
  {
    title: "Mobile Health App",
    category: "Product Design",
    description:
      "Led end-to-end design for a health tracking application, from user research through launch with 50K+ downloads.",
    year: "2024",
  },
  {
    title: "Data Visualization Platform",
    category: "UI Engineering",
    description:
      "Developed interactive dashboards for clinical data analysis, enabling researchers to identify patterns 3x faster.",
    year: "2023",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 md:mb-16">
        <h2 className="font-serif text-4xl font-semibold tracking-tight md:text-5xl">
          Selected Work
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          A curated selection of projects showcasing my approach to design,
          research, and development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={index}
            className="project-card group cursor-pointer rounded-2xl border border-border bg-white p-8 md:p-10"
          >
            <div className="flex items-start justify-between">
              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                {project.category}
              </span>
              <span className="font-mono text-xs text-muted">
                {project.year}
              </span>
            </div>
            <h3 className="mt-4 font-serif text-2xl font-semibold tracking-tight group-hover:underline md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium">
              <span>View Project</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
