export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* Left column */}
        <div>
          <h1 className="animate-fade-in-up font-serif text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            About <span className="italic">Me</span>
          </h1>
          <div className="animate-fade-in-up-delay-1 mt-8 space-y-6 text-muted leading-relaxed">
            <p>
              I lead healthcare UX, translating clinical complexity into tools
              that improve patient outcomes and accelerate scientific discovery.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="animate-fade-in-up-delay-2">
          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Experience
            </h2>
            <div className="mt-6 space-y-6">
              {[
                {
                  role: "Senior Designer",
                  company: "Company A",
                  period: "2023 — Present",
                },
                {
                  role: "UX Lead",
                  company: "Company B",
                  period: "2021 — 2023",
                },
                {
                  role: "Product Designer",
                  company: "Company C",
                  period: "2019 — 2021",
                },
              ].map((job, i) => (
                <div key={i} className="flex justify-between border-b border-border pb-4">
                  <div>
                    <p className="font-medium">{job.role}</p>
                    <p className="text-sm text-muted">{job.company}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Skills
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "UX Design",
                "UI Design",
                "User Research",
                "Design Systems",
                "Prototyping",
                "Front-end Development",
                "React / Next.js",
                "TypeScript",
                "Figma",
                "Strategy",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-4 py-1.5 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Education
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between border-b border-border pb-4">
                <div>
                  <p className="font-medium">M.S. in Design</p>
                  <p className="text-sm text-muted">University</p>
                </div>
                <span className="font-mono text-xs text-muted">2019</span>
              </div>
              <div className="flex justify-between border-b border-border pb-4">
                <div>
                  <p className="font-medium">B.S. in Computer Science</p>
                  <p className="text-sm text-muted">University</p>
                </div>
                <span className="font-mono text-xs text-muted">2017</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
