const publications = [
  {
    title: "Designing for Trust in Healthcare Digital Experiences",
    source: "UX Collective",
    year: "2025",
  },
  {
    title: "The Role of Empathy in Clinical Software Design",
    source: "Smashing Magazine",
    year: "2024",
  },
  {
    title: "Bridging the Gap Between Research and Design Practice",
    source: "ACM Conference on Human Factors",
    year: "2024",
  },
  {
    title: "Patient-Centered Design Patterns for Health Portals",
    source: "Journal of Digital Health",
    year: "2023",
  },
];

export default function PublicationsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 md:mb-16">
        <h2 className="font-serif text-4xl font-semibold tracking-tight md:text-5xl">
          Writing & Publications
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          Thoughts on design, technology, and the intersection of healthcare
          and user experience.
        </p>
      </div>

      <div className="divide-y divide-border">
        {publications.map((pub, index) => (
          <article
            key={index}
            className="group flex cursor-pointer items-center justify-between py-6 transition-colors hover:bg-white/50 md:py-8"
          >
            <div className="flex-1">
              <h3 className="font-serif text-lg font-medium tracking-tight group-hover:underline md:text-xl">
                {pub.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{pub.source}</p>
            </div>
            <div className="ml-4 flex items-center gap-4">
              <span className="hidden font-mono text-xs text-muted sm:block">
                {pub.year}
              </span>
              <svg
                className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-foreground"
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
