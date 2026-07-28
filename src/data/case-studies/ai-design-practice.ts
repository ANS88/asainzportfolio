import type { CaseStudy } from "@/types/case-study";

export const aiDesignPractice: CaseStudy = {
  slug: "ai-design-practice",
  title: "Integrating AI into Design Practice",
  shortTitle: "AI in Design Practice",
  stakesLine:
    "AI tooling crossed a threshold — it changed what a design team can do at its existing size. I defined where in the lifecycle it creates leverage, where it creates risk, and built the operating rules that keep those two separated. The framework governs how a design and research team incorporates AI from discovery to delivery without compromising rigor, craft, or governance.",
  judgment:
    "Defined the operating model for AI adoption across five practice areas — production accelerates, judgment stays human",
  role: "Senior UX Design & Research Manager",
  timeline: "2024–2025",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",
  previewImage: "/images/case-studies/ai-design-practice/ai-lifecycle.svg",

  impact: [
    { value: "5", metric: "Practice areas with AI integration" },
    { value: "5", metric: "Governance rules operationalized" },
    { value: "~50%", metric: "Synthesis time reduction" },
    { value: "0", metric: "AI outputs shipped unreviewed" },
  ],

  heroImage: {
    src: "/images/case-studies/ai-design-practice/ai-lifecycle.svg",
    alt: "AI lifecycle diagram showing five practice areas — research synthesis, prototyping, design systems, content, and operations — orbiting a human judgment core",
  },

  sections: [
    {
      id: "context",
      title: "The premise",
      type: "context",
      content: [
        {
          type: "text",
          data: "<p>AI tooling has crossed a threshold: it is no longer a novelty layer on top of design work but a capability that changes what a design team can do at its existing size. The question for a design practice is not whether to adopt AI but where in the lifecycle it creates leverage, where it creates risk, and what operating rules keep those two separated.</p>",
        },
        {
          type: "quote",
          data: {
            text: "AI accelerates the parts of design work that are production — transcription, synthesis drafts, variant generation, boilerplate — so that human attention concentrates on the parts that are judgment — what to build, what the evidence means, what quality looks like, what we're willing to ship.",
            attribution: "Framing principle for the practice",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/ai-design-practice/production-vs-judgment.svg",
            alt: "Two-column diagram showing the division between production work (AI accelerates) and judgment work (humans own)",
          },
        },
      ],
    },

    {
      id: "judgment",
      title: "My approach",
      type: "judgment",
      content: [
        {
          type: "text",
          data: "<p>Rather than adopting AI tool-by-tool or use-case-by-use-case, I mapped the entire design lifecycle and identified where AI creates genuine leverage versus where it introduces risk. The result is a framework across five practice areas, each with clear boundaries between what AI does and what humans own.</p>",
        },
        {
          type: "text",
          data: "<p>The framing principle: any use of AI that blurs the line between production and judgment gets rejected, not optimized. This isn't a tooling decision — it's an operating-model decision about where machine speed serves human judgment.</p>",
        },
      ],
    },

    {
      id: "research-synthesis",
      title: "Research synthesis & analysis",
      type: "research",
      content: [
        {
          type: "text",
          data: "<p>The highest-leverage application, and the one with the clearest before/after. Contextual inquiry, shadowing sessions, and interviews generate hours of recordings and pages of notes; synthesis has historically been the bottleneck between fieldwork and design direction — often two to three weeks of researcher time per study.</p>",
        },
        {
          type: "text",
          data: "<p>With AI in the loop, transcripts are generated automatically, and tools like Claude produce first-pass affinity clusters, candidate themes, and traceable quote banks within a day of the last session. The researcher's role shifts from mechanical coding to adjudication: validating themes against their own field memory, catching what the model over-weighted or missed, and pressure-testing interpretations.</p>",
        },
        {
          type: "text",
          data: "<p>The rule that keeps this honest: AI never touches raw data containing PHI or identifying details — recordings are processed through approved, compliant tooling and de-identified before any model sees them — and no theme ships to stakeholders without a human researcher having traced it back to source evidence. AI-generated synthesis is a draft, never a finding.</p>",
        },
      ],
    },

    {
      id: "prototyping",
      title: "Prototyping & design exploration",
      type: "design",
      content: [
        {
          type: "text",
          data: "<p>AI-assisted coding tools collapse the distance between a design idea and an interactive artifact. For state-heavy enterprise workflows — branching logic, role-based views, error and edge states — static mockups systematically under-represent the thing being designed. AI-assisted prototyping makes it economical to build in real code, against the team's actual component library, what previously justified only a click-through mockup.</p>",
        },
        {
          type: "text",
          data: "<p>The practice change: prototypes for usability testing default to interactive builds when the workflow being tested is stateful. Designers use AI tools to scaffold the prototype, then refine the interaction details by hand — the craft judgment stays human; the boilerplate doesn't. This also changes what research can measure: task flows with real branching produce observations that flat prototypes structurally cannot.</p>",
        },
      ],
    },

    {
      id: "design-systems",
      title: "Design systems & production support",
      type: "design",
      content: [
        {
          type: "text",
          data: "<p>AI tooling serves the design system in both directions. Downstream, it generates component variants, checks new designs against token and accessibility standards, and drafts the documentation that design systems chronically lack. Upstream, designers use AI to read the production codebase — understanding how a component is actually implemented before redesigning it, which eliminates a class of \"the design assumed something the code doesn't do\" rework.</p>",
        },
        {
          type: "text",
          data: "<p>Paired with a merge-request workflow, this extends to designers shipping small production changes — spacing, tokens, copy, empty states — as reviewable diffs, with engineering retaining full review authority. AI is what makes this economically viable: it lowers the fluency barrier enough that a designer can produce a small, correct, reviewable change without engineering hand-holding.</p>",
        },
      ],
    },

    {
      id: "content",
      title: "Content & communication",
      type: "design",
      content: [
        {
          type: "text",
          data: "<p>Design work generates enormous amounts of instrumental writing: usability report drafts, stakeholder readouts, UX copy variants, accessibility annotations, release notes for design changes. AI drafts these well and fast. The team treats AI-drafted content the way it treats AI-drafted synthesis — as material to edit with judgment, not to forward.</p>",
        },
        {
          type: "text",
          data: "<p>For UX copy specifically, in clinical-adjacent products, every string that reaches users passes human review with domain context the model doesn't have; AI's contribution is breadth of options and speed of iteration, not final authority.</p>",
        },
        {
          type: "text",
          data: "<p>One under-appreciated application: AI as a critique partner. Before design reviews, designers run their work through structured prompts — heuristic evaluation, accessibility pass, \"what would a first-time lab technician misread here\" — and arrive at critique with the obvious issues already caught. This raises the floor of what human critique time gets spent on.</p>",
        },
      ],
    },

    {
      id: "operations",
      title: "Design operations",
      type: "design",
      content: [
        {
          type: "text",
          data: "<p>The unglamorous wins: meeting notes and decision logs from design reviews, automatically drafted and human-confirmed; research repositories that are actually searchable because AI tags and summarizes studies on ingestion; onboarding materials that stay current because updating them is cheap.</p>",
        },
        {
          type: "text",
          data: "<p>Ops work is where AI adoption faces the least risk and delivers the most immediate time back, which also makes it the right first exposure for team members skeptical of the tooling.</p>",
        },
      ],
    },

    {
      id: "governance",
      title: "Governance: the operating rules",
      type: "research",
      content: [
        {
          type: "image",
          data: {
            src: "/images/case-studies/ai-design-practice/governance-framework.svg",
            alt: "Five governance rules: data boundaries, draft-never-final, provenance tracking, centrally approved tooling, and deliberate skill-building",
          },
        },
        {
          type: "list",
          data: {
            title: "Five rules across all practice areas",
            items: [
              "Data boundaries are absolute: no PHI, patient data, or sensitive lab data enters any AI tool; research data is de-identified before processing",
              "AI output is always a draft: findings, copy, code, and documentation require human review by someone accountable for the result",
              "Provenance is tracked: reports and deliverables note where AI assisted, so review effort can be calibrated honestly",
              "Tooling is centrally approved but individually explored: a short list of sanctioned tools with a lightweight process for proposing new ones",
              "Skill-building is deliberate: prompt craft, AI-assisted prototyping, and model-limitation literacy are treated as team competencies",
            ],
          },
        },
      ],
    },

    {
      id: "impact",
      title: "What success looks like",
      type: "impact",
      content: [
        {
          type: "text",
          data: "<p>Adoption is working if: synthesis-to-insight time drops without a decline in finding quality; usability testing increasingly runs on interactive prototypes for stateful workflows; small design-quality fixes reach production faster; and the team reports that AI removed drudgery rather than added oversight burden.</p>",
        },
        {
          type: "text",
          data: "<p>Adoption is failing if review time balloons, if AI-drafted material starts shipping unedited, or if the tooling narrows exploration to what models suggest first. Both outcomes are measurable, and the practice commits to checking.</p>",
        },
      ],
    },

    {
      id: "beyond",
      title: "The position",
      type: "beyond",
      content: [
        {
          type: "text",
          data: "<p>Integrating AI into design practice is not a tooling decision; it's an operating-model decision about where machine speed serves human judgment. Done with clear data boundaries and draft-never-final discipline, it lets a design team of fixed size do deeper research, test truer prototypes, and ship quality fixes that previously died in backlogs — which, for a team designing high-stakes clinical tools, converts directly into safer, better products.</p>",
        },
      ],
    },
  ],

  myRole:
    "Defined the AI integration framework across five practice areas; set the governance rules and data boundaries; established the production-vs-judgment operating model; led skill-building and adoption across the design and research team.",

  owned:
    "Defined the AI integration framework across five practice areas; set the governance rules and data boundaries; established the production-vs-judgment operating model; led skill-building and adoption across the design and research team.",

  tags: [
    "AI integration",
    "Design operations",
    "Governance",
    "Research methodology",
  ],
};
