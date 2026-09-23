import type { CaseStudy } from "@/types/case-study";

export const aiDesignPractice: CaseStudy = {
  slug: "ai-design-practice",
  title: "Integrating AI into Design Practice",
  shortTitle: "AI in Design Practice",
  stakesLine:
    "AI changed what a design team can do at its existing size. I defined where it creates leverage, where it creates risk, and built the operating rules that keep those two separated.",
  judgment:
    "Defined the operating model for AI adoption across five practice areas — production accelerates, judgment stays human",
  role: "Senior UX Design & Research Manager",
  timeline: "2024–2025",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",
  previewImage: "/images/case-studies/ai-design-practice/ai-lifecycle.svg",
  previewCrop: { position: "50% 38%", scale: 1.8 },

  impact: [
    { value: "5", metric: "Practice areas with AI integration" },
    { value: "5", metric: "Governance rules operationalized" },
    { value: "~50%", metric: "Synthesis time reduction" },
    { value: "0", metric: "AI outputs shipped unreviewed" },
  ],

  heroImage: {
    src: "/images/case-studies/ai-design-practice/ai-lifecycle.svg",
    alt: "AI lifecycle diagram showing five practice areas orbiting a human judgment core",
  },

  sections: [
    {
      id: "context",
      title: "The premise",
      type: "context",
      content: [
        {
          type: "text",
          data: "<p>The question isn't whether to adopt AI but where in the design lifecycle it creates leverage and where it creates risk.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/ai-design-practice/production-vs-judgment.svg",
            alt: "Two-column diagram: production work (AI accelerates) versus judgment work (humans own)",
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
          data: "<p>I mapped the entire design lifecycle and identified where AI creates genuine leverage versus where it introduces risk. The result is a framework across five practice areas, each with clear boundaries between what AI does and what humans own.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/ai-design-practice/five-areas.svg",
            alt: "Five practice areas showing what AI accelerates versus what humans own in each",
          },
        },
      ],
    },

    {
      id: "research-synthesis",
      title: "Research synthesis",
      type: "research",
      content: [
        {
          type: "text",
          data: "<p>The highest-leverage application. Synthesis has historically been the bottleneck between fieldwork and design direction — two to three weeks per study. AI produces first-pass affinity clusters and traceable quote banks within a day. The researcher's role shifts from mechanical coding to adjudication.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/ai-design-practice/synthesis-flow.svg",
            alt: "Before and after: manual synthesis taking 2-3 weeks versus AI-assisted synthesis in 1-2 days",
          },
        },
      ],
    },

    {
      id: "prototyping",
      title: "Prototyping & exploration",
      type: "design",
      content: [
        {
          type: "text",
          data: "<p>AI-assisted coding collapses the distance between a design idea and an interactive artifact. For state-heavy enterprise workflows, static mockups systematically under-represent the thing being designed. AI makes it economical to build in real code what previously justified only a click-through mockup.</p>",
        },
      ],
    },

    {
      id: "design-systems",
      title: "Design systems & production",
      type: "design",
      content: [
        {
          type: "text",
          data: "<p>AI generates component variants, checks against standards, and drafts documentation. Upstream, designers use AI to read the production codebase before redesigning — eliminating a class of rework. AI lowers the fluency barrier enough that designers can ship small, reviewable production changes directly.</p>",
        },
      ],
    },

    {
      id: "content",
      title: "Content & critique",
      type: "design",
      content: [
        {
          type: "text",
          data: "<p>AI drafts instrumental writing — reports, UX copy variants, annotations — which the team edits with judgment, never forwards. Before design reviews, designers run structured AI prompts as critique partners: heuristic evaluation, accessibility pass, edge-case analysis. This raises the floor of what human critique time gets spent on.</p>",
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
              "Data boundaries are absolute — no PHI or patient data enters any AI tool",
              "AI output is always a draft — requires human review by someone accountable",
              "Provenance is tracked — deliverables note where AI assisted",
              "Tooling is centrally approved but individually explored",
              "Skill-building is deliberate — prompt craft and model-limitation literacy",
            ],
          },
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
          data: "<p>Integrating AI into design practice is an operating-model decision about where machine speed serves human judgment. Done right, it lets a team of fixed size do deeper research, test truer prototypes, and ship quality fixes that previously died in backlogs.</p>",
        },
      ],
    },
  ],

  myRole:
    "Defined the AI integration framework across five practice areas; set the governance rules and data boundaries; led skill-building and adoption across the design and research team.",

  owned:
    "AI integration framework, governance rules, data boundaries, production-vs-judgment operating model, team skill-building.",

  tags: [
    "AI integration",
    "Design operations",
    "Governance",
    "Research methodology",
  ],
};
