import type { CaseStudy } from "@/types/case-study";

export const labOperationsLeadership: CaseStudy = {
  slug: "lab-operations-leadership",
  title: "Building Design for Lab Operations",
  shortTitle: "From first designer to a design practice across Natera's entire lab pipeline",
  stakesLine:
    "I built the design practice across Natera's lab operations — wet lab and dry lab, two domains, different users, one connected system. Grew design's role from zero to a functioning practice embedded across both, while shipping tools for 50+ labs and 3.5M+ tests a year.",
  metaDescription:
    "How I built the design practice for Natera's lab operations from scratch — across wet lab execution and dry lab analysis — growing the team while shipping tools for 50+ labs.",
  judgment:
    "Built the design function and the products simultaneously — you can't wait for a mature team to start shipping, and you can't ship without understanding the domain deeply enough to earn trust",
  role: "Design Lead, Lab Operations",
  timeline: "2023–2025",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",
  previewImage: "/images/case-studies/lab-operations-leadership/team-structure.svg",
  previewCrop: { position: "50% 55%", scale: 1.6 },

  impact: [
    { value: "3.5M+", metric: "Tests reported per year across lab operations" },
    { value: "50+", metric: "Labs served by tools I designed" },
    { value: "4→1", metric: "Legacy systems consolidated in clinical review" },
    { value: "50%", metric: "Reduction in report turnaround time" },
  ],

  tags: ["Design Leadership", "Internal Tooling", "Lab Operations", "Regulated Design", "Team Building", "Ethnography"],

  sections: [
    {
      id: "two-domains",
      title: "Two worlds, one pipeline",
      type: "context",
      content: [
        {
          type: "image",
          data: {
            src: "/images/case-studies/lab-operations-leadership/pipeline-flow.svg",
            alt: "Wet lab to dry lab pipeline: sample processing flows into computational analysis and reporting",
          },
        },
        {
          type: "text",
          data: `<p>Wet lab: physical sample processing where mistakes affect patient outcomes. Dry lab: computational analysis where cognitive load determines report accuracy. Most companies treat these as separate. They're not — the pipeline doesn't stop at the boundary between physical and digital.</p>`,
        },
      ],
    },

    {
      id: "go-to-the-lab",
      title: "Go to the lab",
      type: "leadership",
      content: [
        {
          type: "image",
          data: {
            src: "/images/case-studies/lab-operations-leadership/ethnography.svg",
            alt: "Conference room research versus in-lab ethnography: shadowing full shifts to see real workflows",
          },
        },
        {
          type: "text",
          data: `<p>Lab staff describe their work in terms of the system they've adapted to, not the system they need. I made the case for in-lab ethnography — shadowing technicians through full shifts, watching where they work around the software. The methodology became Natera's standard for lab-facing design.</p>`,
        },
      ],
    },

    {
      id: "map-the-system",
      title: "Map the system, not the screen",
      type: "leadership",
      content: [
        {
          type: "image",
          data: {
            src: "/images/case-studies/lab-operations-leadership/four-to-one.svg",
            alt: "Four legacy systems consolidated into one unified Clinical Review platform",
          },
        },
        {
          type: "text",
          data: `<p>Clinical Review started as a UI audit request. I reframed it: the problem wasn't one tool's interface — it was a distributed system spanning four legacy applications. Mapping the process as a system turned a polish project into a platform investment. One tool replaced four, turnaround time dropped 50%.</p>`,
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
          data: `<p>No design function existed for lab operations. The first job was to prove design's value by shipping — not by building a team in the abstract. Every hire had to make the work better immediately.</p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/lab-operations-leadership/hiring-journey.svg",
            alt: "Growing the design practice from solo designer to embedded team across wet and dry lab",
          },
        },
        {
          type: "text",
          data: `<h4>Hiring for domain, not just craft</h4>
<p>Hired for curiosity about the domain and comfort with complexity, not portfolio polish. Every new designer spent their first weeks in the lab, not in Figma.</p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/lab-operations-leadership/team-structure.svg",
            alt: "Designers embedded in wet lab and dry lab squads, connected by shared practice",
          },
        },
        {
          type: "text",
          data: `<h4>Embedded in squads, connected through practice</h4>
<p>Designers sit with engineers in domain squads. They stay connected through cross-domain critiques, paired research, and a shared design system across tools that lab staff use back-to-back.</p>`,
        },
      ],
    },

    {
      id: "what-shipped",
      title: "What shipped",
      type: "impact",
      content: [
        {
          type: "list",
          data: {
            title: "Dry lab",
            items: [
              "Clinical Review — unified tool replacing 4 legacy systems, 50% reduction in turnaround time",
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
              "Unified Patient Portal — 181K patient accounts",
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
