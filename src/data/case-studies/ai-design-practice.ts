import type { CaseStudy } from "@/types/case-study";

export const aiDesignPractice: CaseStudy = {
  slug: "ai-design-practice",
  title: "Integrating AI into Design Practice",
  shortTitle: "AI in Design Practice",
  stakesLine:
    "Contextual inquiry across 3 clinical divisions generates 40+ hours of session recordings per quarter. Synthesis was the bottleneck — 2–3 weeks of manual transcription, affinity diagramming, and thematic coding before a single finding reached a product team. I built the framework for where AI enters that pipeline and where it doesn't.",
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
          data: "<p>A 6-person design and research team covers clinical review, lab workflows, patient portal, and histopathology across Natera's pipeline. The constraint isn't talent — it's hours. AI changes the arithmetic on transcription, affinity clustering, prototype scaffolding, and documentation, but in a HIPAA-regulated environment processing PHI-adjacent data, every integration point needs explicit data boundaries.</p>",
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
          data: "<p>Audited every repeating task across five practice areas — research, prototyping, design systems, content, ops — and classified each as production (volume-bound, pattern-matchable) or judgment (requires domain context, clinical accuracy, or design intent). The classification determines what AI touches and what it doesn't.</p>",
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
          data: "<p>Before: a contextual inquiry study across 15 lab technicians produces ~20 hours of recordings and 80+ pages of field notes. Manual transcription, open coding in Dovetail, affinity diagramming in FigJam, thematic analysis writeup — 2–3 weeks before findings reach stakeholders. After: recordings run through compliant transcription (de-identified before any model sees them), Claude generates candidate affinity clusters and quote banks with source timestamps. The researcher validates clusters against their field memory, catches over-weighted themes, and traces every finding back to raw evidence. Synthesis-to-insight: 1–2 days. No AI-generated theme ships without a human researcher having verified the source trail.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/ai-design-practice/synthesis-flow.svg",
            alt: "Before: 2-3 weeks manual transcription, coding, diagramming. After: 1-2 days with AI-assisted clustering and human validation",
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
          data: "<p>Clinical Review has 12 workflow states, 4 user roles (genetic counselor, lab director, clinical scientist, medical director), and conditional branching on variant pathogenicity classification. A Figma click-through can't represent that — it flattens the state machine into a linear happy path. AI-assisted prototyping (Claude Code building against our React component library) produces interactive builds with real branching logic, role-based views, and edge states. Usability testing on these prototypes catches issues — like the GC-to-lab-director escalation flow breaking on multi-gene panels — that flat mockups structurally cannot surface.</p>",
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
          data: "<p>Downstream: AI generates button/input/table variants from design tokens, runs WCAG 2.1 AA contrast checks against our purple-on-dark palette, and drafts component API documentation that the system chronically lacked. Upstream: designers use AI to read the Vue.js production codebase — understanding how a LabVantage integration component actually handles barcode scan events before redesigning the scan-confirm flow. This eliminates \"the design assumed something the code doesn't do\" rework. Designers now ship spacing, token, and copy fixes as merge requests reviewed by engineering — AI makes the diffs small enough to be correct and reviewable without hand-holding.</p>",
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
          data: "<p>Clinical-adjacent UX copy goes through human review with domain context: \"heterozygous\" vs. \"carrier\" vs. \"one copy detected\" each land differently for a genetic counselor versus a patient. AI generates 8–10 copy variants in seconds; the content designer selects and edits with clinical literacy the model doesn't have. Before design reviews, designers run structured prompts — Nielsen's heuristics against the current screen, WCAG audit, \"what would a first-time lab tech misread here\" — and arrive at critique with the surface issues already caught, so human review time focuses on workflow logic and domain accuracy.</p>",
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
              "Data boundaries are absolute — no PHI, patient identifiers, or lab sample data enters any AI tool; research recordings are de-identified through approved HIPAA-compliant transcription before processing",
              "AI output is always a draft — affinity clusters, code, copy, and documentation require sign-off by the accountable researcher or designer before leaving the team",
              "Provenance is tracked — research reports and design specs note which sections used AI-assisted drafting so review calibration is honest",
              "Tooling is centrally approved (Claude, GitHub Copilot, Whisper) with a lightweight RFC process for proposing additions",
              "Skill-building is deliberate — prompt engineering, model-limitation literacy, and AI-assisted prototyping are tracked team competencies with quarterly assessment",
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
          data: "<p>For a team designing clinical tools where a missed variant classification or a confusing patient result has downstream consequences, the framework converts AI speed into research depth and prototype fidelity — not into skipping steps. Synthesis that took 3 weeks now takes 2 days. Prototypes that were flat mockups now have real state machines. Small production fixes that died in sprint backlogs now ship as designer-authored MRs. The team size didn't change; the work it can do did.</p>",
        },
      ],
    },
  ],

  myRole:
    "Defined the AI integration framework across five practice areas; set governance rules and HIPAA-compliant data boundaries; led adoption across the design and research team; established prompt engineering and model-limitation literacy as team competencies.",

  owned:
    "AI integration framework, governance rules, data boundaries, production-vs-judgment operating model, team skill-building and quarterly competency assessment.",

  tags: [
    "AI integration",
    "Design operations",
    "Governance",
    "Research methodology",
  ],
};
