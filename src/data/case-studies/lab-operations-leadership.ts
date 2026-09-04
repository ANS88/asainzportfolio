import type { CaseStudy } from "@/types/case-study";

export const labOperationsLeadership: CaseStudy = {
  slug: "lab-operations-leadership",
  title: "Building Design for Lab Operations",
  shortTitle: "From first designer to a design practice across Natera's entire lab pipeline",
  stakesLine:
    "I built the design practice across Natera's lab operations — from the bench to the report. Two domains, different users, different constraints, one connected system. Wet lab: physical sample processing where mistakes affect patient outcomes. Dry lab: computational analysis where cognitive load determines report accuracy. I grew design's role from zero to a functioning practice embedded across both, while shipping the tools that serve 50+ labs and 3.5M+ tests reported a year.",
  metaDescription:
    "How I built the design practice for Natera's lab operations from scratch — across wet lab execution and dry lab analysis — growing the team while shipping tools for 50+ labs.",
  judgment:
    "Built the design function and the products simultaneously — you can't wait for a mature team to start shipping, and you can't ship without understanding the domain deeply enough to earn trust",
  role: "Design Lead, Lab Operations",
  timeline: "2023–2025",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",
  previewImage: "/images/case-studies/natera-clinical-review/workflow-flow.svg",

  impact: [
    { value: "3.5M+", metric: "Tests reported per year across lab operations" },
    { value: "50+", metric: "Labs served by tools I designed" },
    { value: "4→1", metric: "Legacy systems consolidated in clinical review" },
    { value: "50%", metric: "Reduction in report turnaround time" },
  ],

  tags: ["Design Leadership", "Internal Tooling", "Lab Operations", "Regulated Design", "Team Building"],

  sections: [
    {
      id: "two-domains",
      title: "Two worlds, one pipeline",
      type: "context",
      content: [
        {
          type: "text",
          data: `<p>Natera's lab operations spans two fundamentally different design domains. Getting the design practice right meant understanding both — and understanding that they're connected.</p>`,
        },
        {
          type: "text",
          data: `<h4>Wet lab — lab execution</h4>
<p>Physical sample processing: accessioning, preparation, sequencing, histopathology. The users are lab technicians and scientists with gloves on, working at benches. They can't stop to file a bug report. The design constraints are hands-on workflows, physical-digital handoffs, and zero tolerance for sample mix-ups. Every screen competes with a centrifuge for attention.</p>`,
        },
        {
          type: "text",
          data: `<h4>Dry lab — result analysis and reporting</h4>
<p>Computational analysis, variant interpretation, clinical report generation. The users are bioinformaticians, genetic counselors, and clinical scientists. The design challenge is decision support under cognitive load — interpreting complex genomic data and turning it into accurate, defensible patient reports. A missed variant or a misclassified result doesn't crash the app. It reaches a patient.</p>`,
        },
        {
          type: "text",
          data: `<p>Most companies treat these as separate product areas. They're not. A sample that's mishandled in the wet lab produces data that misleads the dry lab. A report format that doesn't surface the right context sends a clinician back to the lab with questions. I designed across both because the pipeline doesn't stop at the boundary between physical and digital.</p>`,
        },
      ],
    },

    {
      id: "go-to-the-lab",
      title: "Go to the lab",
      type: "leadership",
      content: [
        {
          type: "text",
          data: `<p>When I started, Natera had never embedded a designer in a lab. Research happened through interviews and screen recordings. The problem: lab staff describe their work in terms of the system they've adapted to, not the system they need. You can't redesign a five-stage histopathology workflow from a conference room.</p>`,
        },
        {
          type: "text",
          data: `<p>I made the organizational case for in-lab ethnography — shadowing technicians through full shifts, watching the moments where they work around the software instead of with it. Six-plus shadowing sessions across multiple labs. The methodology became Natera's standard for lab-facing design work. It wasn't just a research technique; it was a credibility move. Once the lab staff saw that someone from the product side understood their physical reality, the quality of feedback changed permanently.</p>`,
        },
        {
          type: "quote",
          data: {
            text: "The methodology became the standard — not because I mandated it, but because the work that came out of it was visibly better than the work that didn't.",
            attribution: "",
          },
        },
      ],
    },

    {
      id: "map-the-system",
      title: "Map the system, not the screen",
      type: "leadership",
      content: [
        {
          type: "text",
          data: `<p>Clinical Review started as a usability audit request. The assumption was that the existing tool needed better UI. I reframed it: the problem wasn't one tool's interface. It was that the review process was a distributed system — spanning four separate legacy applications, each owned by a different team, none designed to work together.</p>`,
        },
        {
          type: "text",
          data: `<p>Mapping the review process as a system, not a set of screens, turned a UI polish project into a platform investment. One unified tool replaced four legacy systems. Report turnaround time dropped 50%. The reframing was the design work — the interface followed from understanding the architecture of the problem.</p>`,
        },
        {
          type: "text",
          data: `<p>This became a repeating pattern across lab operations: the first question is never "what should this screen look like?" It's "what is the actual structure of the work, and where does the current tooling break it?"</p>`,
        },
      ],
    },

    {
      id: "replace-dont-patch",
      title: "Replace, don't patch",
      type: "leadership",
      content: [
        {
          type: "text",
          data: `<p>Internal tools accumulate debt faster than products because there's no market pressure to clean them up. Lab staff adapt. Workarounds become training. The pain is invisible because people are too busy to complain — they just work around it and move on.</p>`,
        },
        {
          type: "text",
          data: `<p>In Clinical Review, four legacy systems became one. In Histopathology, two platforms (LabVantage and Philips) were consolidated. The pattern: don't add features to a broken tool. Understand the work well enough to build the right tool, then replace the old ones entirely.</p>`,
        },
        {
          type: "text",
          data: `<p>This is harder to sell internally than incremental improvement. It requires mapping the full workflow, building organizational trust that the new system will actually be better, and managing the transition so that lab operations never stops. The design work is as much organizational as it is interface.</p>`,
        },
      ],
    },

    {
      id: "build-the-team",
      title: "Build the team while shipping the work",
      type: "leadership",
      content: [
        {
          type: "text",
          data: `<p>When I joined, there was no design function for lab operations. No team, no process, no seat at the table. The first job was to prove the value of design by shipping — not by building a team in the abstract and waiting for it to mature. Every hire had to make the work better immediately.</p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/lab-operations-leadership/hiring-journey.svg",
            alt: "Growing the design practice from solo designer to embedded team across wet and dry lab",
            caption: "",
          },
        },
        {
          type: "text",
          data: `<h4>Hiring for domain, not just craft</h4>
<p>Lab operations design requires a specific kind of designer — someone comfortable with ambiguity, regulated environments, and users who can't pause their work to explain what's wrong. I hired for curiosity about the domain and comfort with complexity, not portfolio polish. Every new designer spent their first weeks in the lab, not in Figma.</p>`,
        },
        {
          type: "text",
          data: `<h4>Embedded in squads, connected through practice</h4>
<p>The team structure mirrors the domain split. Designers are embedded directly in wet lab and dry lab squads — sitting with engineers, attending standups, understanding the technical constraints firsthand. But they stay connected through shared rituals: weekly design critiques that cross domain boundaries, paired research sessions, and a shared design system that keeps the visual language coherent across tools that lab staff use back-to-back throughout their day.</p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/lab-operations-leadership/team-structure.svg",
            alt: "Team structure: designers embedded in wet lab and dry lab squads, connected by shared practice",
            caption: "",
          },
        },
        {
          type: "text",
          data: `<h4>Rituals that compound</h4>
<p>The rituals matter more than the org chart. Cross-domain design reviews where wet lab designers pressure-test dry lab flows — and vice versa — catch handoff problems that neither side sees alone. Research share-outs that bring lab observations to the whole product org. Portfolio reviews that ensure consistency across tools that different lab roles touch in sequence. Each ritual exists because it solved a real coordination problem, not because a design maturity model prescribed it.</p>`,
        },
      ],
    },

    {
      id: "earn-the-mandate",
      title: "Earn the mandate",
      type: "leadership",
      content: [
        {
          type: "text",
          data: `<p>In a science-driven organization, design doesn't start with a seat at the table. You earn it by demonstrating that your work changes outcomes — not by arguing for design thinking in the abstract.</p>`,
        },
        {
          type: "text",
          data: `<p>The progression at Natera followed a pattern: start with a narrow scope, deliver something that visibly improves the work, then use that credibility to expand the mandate. The ethnography work in histopathology opened the door to rethinking the entire workflow. The Clinical Review reframe — from UI audit to platform investment — changed how product leadership scoped design work across the org.</p>`,
        },
        {
          type: "text",
          data: `<p>Each project built the case for the next one. Not through presentations about design maturity, but through results that lab directors and clinical scientists could see in their own operations. Design's role grew because the work justified it.</p>`,
        },
      ],
    },

    {
      id: "what-shipped",
      title: "What shipped",
      type: "impact",
      content: [
        {
          type: "text",
          data: `<p>The leadership story is inseparable from the product story. Here's what the practice produced:</p>`,
        },
        {
          type: "list",
          data: {
            title: "Dry lab",
            items: [
              "Clinical Review — unified tool replacing 4 legacy systems, 50% reduction in turnaround time, 3.5M+ tests reported/year",
              "Result analysis workflows redesigned for cognitive load and accuracy",
            ],
          },
        },
        {
          type: "list",
          data: {
            title: "Wet lab",
            items: [
              "Histopathology workflow — 5 stages redesigned end-to-end, 2 legacy systems consolidated",
              "In-lab ethnography established as standard research methodology",
            ],
          },
        },
        {
          type: "list",
          data: {
            title: "Across both",
            items: [
              "Unified Patient Portal — 181K patient accounts, built using a compliance mandate as strategic leverage",
              "Design practice built from zero, embedded across wet and dry lab operations",
            ],
          },
        },
      ],
    },
  ],

  myRole: "Design Lead — sole designer growing into team lead across wet lab and dry lab operations",
  owned: "Design strategy, research methodology, team building, and end-to-end product design across lab operations",
};
