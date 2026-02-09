export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-3xl">
        <h1 className="animate-fade-in-up font-serif text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          About <span className="italic">Me</span>
        </h1>

        <div className="animate-fade-in-up-delay-1 mt-8 space-y-6 text-muted leading-relaxed">
          <p>
            I design technology that meets people where they are—in their
            complexity, not our assumptions. My path into HCI began with a
            simple question: why do digital tools so often fail the people who
            need them most? A decade of research taught me the answer
            isn&apos;t about features or flows—it&apos;s about whose
            experiences we center when we build.
          </p>
          <p>
            At Natera, I lead UX for lab operations and enterprise tools,
            building a centralized research function that demonstrates
            measurable ROI. I balance strategic vision with tactical execution,
            moving from foundational research to shipped products. Beyond
            biotech, I advance women&apos;s health technology as a Dealflow
            Fellow at AthenaDAO, shaping research priorities and funding
            strategy that actually moves the field forward. Through my
            Substack &ldquo;Women&apos;s Health, Computed,&rdquo; I translate
            academic research into accessible analysis—from evaluating
            perimenopause wearables to mapping the femtech landscape—because
            understanding shouldn&apos;t require a PhD.
          </p>
          <p>
            My approach is rapid and rigorous. I don&apos;t wait for perfect
            data when directional insight can shape better decisions today. I
            blend qualitative depth with quantitative validation, thriving in
            ambiguity where 0-to-1 problems demand both systems thinking and
            attention to the details that define experience.
          </p>
        </div>

        {/* Guiding Principles */}
        <div className="animate-fade-in-up-delay-2 mt-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
            Guiding Principles
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                title: "Human-centered",
                description:
                  "Start with lived experience, not technical constraints",
              },
              {
                title: "Evidence-driven",
                description:
                  "Qualitative insight meets quantitative validation",
              },
              {
                title: "Bias toward action",
                description:
                  "Research that doesn\u2019t ship is just documentation",
              },
              {
                title: "Rigorous iteration",
                description: "Test assumptions early, adapt fast",
              },
              {
                title: "Strategic clarity",
                description:
                  "Connect granular decisions to broader impact",
              },
            ].map((principle) => (
              <div
                key={principle.title}
                className="border-b border-border pb-4"
              >
                <p className="font-medium">{principle.title}</p>
                <p className="text-sm text-muted">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="animate-fade-in-up-delay-3 mt-16">
          <p className="text-muted leading-relaxed">
            Feel free to get in touch at{" "}
            <a
              href="mailto:sainz.nag@gmail.com"
              className="text-foreground underline underline-offset-4 hover:text-muted transition-colors"
            >
              sainz.nag@gmail.com
            </a>{" "}
            or find me on{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted transition-colors"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
