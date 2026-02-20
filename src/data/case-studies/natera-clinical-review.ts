import type { CaseStudy } from "@/types/case-study";

export const nateraClinicalReview: CaseStudy = {
  slug: "natera-clinical-review",
  title: "Manual Clinical Review Workflow Redesign",
  stakesLine:
    "When genetic test reports are delayed, treatment decisions are delayed. I redesigned the workflow that determines how fast 585,000 patients per year get their results.",
  role: "Lead Designer & Researcher",
  timeline: "Discovery to launch (2024\u20132025)",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",

  impact: [
    { value: "50%", metric: "Reduction in turnaround time" },
    { value: "585K", metric: "Reports/year affected" },
    { value: "1", metric: "Tool replaced 4 legacy systems" },
    { value: "88", metric: "SUS usability scores from users" },
  ],

  sections: [
    {
      id: "context",
      title: "Context & Challenge",
      type: "context",
      content: [
        {
          type: "text",
          data: "<p><strong>The clinical problem:</strong> In 2024, Natera processed a record 3,064,600 tests. 20% (585,000 reports) required manual review by genetic counselors and lab directors before reaching patients. The existing workflow was fragmented across multiple tools, creating delays that directly affected patient care timelines.</p>",
        },
        {
          type: "text",
          data: "<p><strong>Why this matters:</strong> In prenatal genetic testing, a delayed result can mean a delayed decision about pregnancy management. In oncology, it can affect treatment timing. The review workflow isn\u2019t just operational efficiency \u2014 it\u2019s clinical impact.</p>",
        },
        {
          type: "text",
          data: "<p><strong>The constraint:</strong> Design for expert users (genetic counselors, lab directors) in a regulated environment where accuracy cannot be compromised for speed. Every workflow change needed clinical validation.</p>",
        },
      ],
    },

    {
      id: "research",
      title: "Research Approach",
      type: "research",
      content: [
        {
          type: "text",
          data: "<p>I led discovery with 15 end-users, 8 subject matter experts, and 6 department leaders across Natera\u2019s women\u2019s health, oncology, and organ health divisions.</p>",
        },
        {
          type: "list",
          data: {
            title: "Methods",
            items: [
              "2,000+ hours of contextual inquiry and live shadowing with genetic counselors and lab directors in their actual work environments",
              "Thematic analysis of interview transcripts to identify workflow pain points",
              "Cross-functional vision workshop to align stakeholders on goals and constraints",
              "Distributed cognition framework analysis to map how information flows across people, tools, and environments",
            ],
          },
        },
        {
          type: "quote",
          data: {
            text: "Clinical workflows don\u2019t exist in individual heads \u2014 they\u2019re distributed across multiple people, tools, and handoffs. The framework helped me identify where cognitive load was unnecessarily high and where system design was compensating for (or creating) workflow friction.",
            attribution: "Why distributed cognition",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/natera-clinical-review/discovery-workshop.png",
            alt: "Cross-functional workshop capturing pain points and feature priorities through sticky note exercises",
            caption: "Stakeholder workshop: identifying pain points in the manual review process",
          },
        },
      ],
    },

    {
      id: "findings",
      title: "Key Findings",
      type: "findings",
      content: [
        {
          type: "image",
          data: {
            src: "/images/case-studies/natera-clinical-review/findings-summary.png",
            alt: "Three key findings illustrated with memes: Repetitive and tedious work (automation needed), Fragmented task completion (too many tools), Inconsistent change of command (unclear ownership)",
            caption: "Core findings from discovery: repetitive work, fragmented tools, unclear ownership",
          },
        },
        {
          type: "text",
          data: "<h3>Finding 1: Underutilized expertise</h3><p>Genetic counselors were spending time on repetitive administrative tasks rather than complex clinical decisions. Their domain expertise was being wasted on workflow friction.</p>",
        },
        {
          type: "text",
          data: "<h3>Finding 2: Error-prone handoffs</h3><p>The transition point between genetic counselor review and lab director approval had no automated validation. Manual handoffs created risk of errors that could affect patient results.</p>",
        },
        {
          type: "text",
          data: "<h3>Finding 3: Role confusion</h3><p>Users didn\u2019t have clear visibility into what tasks were theirs versus someone else\u2019s. This created duplicate work and missed handoffs.</p>",
        },
        {
          type: "text",
          data: "<h3>Finding 4: Context switching</h3><p>Reviewers toggled between 4 different tools to complete a single review. Each context switch increased cognitive load and time to completion.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/natera-clinical-review/thematic-analysis.png",
            alt: "Affinity diagram with coded themes including variants, decision logic, save/edit flows, gene handling, notes, and templates",
            caption: "Thematic analysis: coding pain points into actionable design themes",
          },
        },
      ],
    },

    {
      id: "design",
      title: "Design Strategy",
      type: "design",
      content: [
        {
          type: "quote",
          data: {
            text: "Design for the expert user\u2019s mental model, not the system\u2019s data model. Genetic counselors think in terms of clinical cases, not database records.",
            attribution: "Design principle",
          },
        },
        {
          type: "text",
          data: "<p><strong>What we built:</strong> A unified review interface with role-specific queues, automated validations at handoff points, and consolidated case views that eliminated the need for multiple tools.</p>",
        },
        {
          type: "list",
          data: {
            title: "Key design decisions",
            items: [
              "Queue-based workflow \u2014 cases route automatically based on type and status",
              "Progressive disclosure \u2014 show only information relevant to the current decision",
              "Built-in validations \u2014 prevent incomplete handoffs before they happen",
              "Role-based permissions \u2014 genetic counselors and lab directors see different views of the same case",
            ],
          },
        },
        {
          type: "text",
          data: "<h3>Personas</h3><p><strong>Genetic Counselor:</strong> high-volume review, needs efficiency and accuracy</p><p><strong>Lab Director:</strong> final approval, needs oversight and audit trail</p>",
        },
        {
          type: "images",
          data: [
            {
              src: "/images/case-studies/natera-clinical-review/personas-gc.png",
              alt: "Persona card for Jane, the Genetic Counselor: responsibilities, motivations, challenges, tools, and collaboration patterns",
              caption: "Jane — Genetic Counselor",
            },
            {
              src: "/images/case-studies/natera-clinical-review/personas-ld.png",
              alt: "Persona card for Mia, the Lab Director: responsibilities, motivations, challenges, tools, and collaboration patterns",
              caption: "Mia — Lab Director",
            },
          ],
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/natera-clinical-review/workflow-flow.png",
            alt: "End-to-end flow diagram showing the manual review process from GC login through case booking, editing, flag escalation, LD review, and report release",
            caption: "Redesigned end-to-end workflow: GC review through LD approval to report release",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/natera-clinical-review/user-journey-gc.png",
            alt: "User journey map for Jane the Genetic Counselor showing journey phases, jobs to be done, context and touchpoints, gains, pains, and emotional curve",
            caption: "Genetic Counselor journey map: from case queue to report submission",
          },
        },
      ],
    },

    {
      id: "validation",
      title: "Validation & Iteration",
      type: "validation",
      content: [
        {
          type: "text",
          data: "<p><strong>Testing approach:</strong> Conducted iterative usability testing throughout the design process, not just at the end. Tested with actual genetic counselors and lab directors using real case examples.</p>",
        },
        {
          type: "text",
          data: "<p><strong>What we learned:</strong> Early prototypes assumed too much knowledge of the new system. We added contextual help and status indicators that made the workflow learnable without formal training.</p>",
        },
        {
          type: "quote",
          data: {
            text: "It feels like it was designed for how we actually work.",
            attribution: "Genetic counselor, UAT feedback",
          },
        },
      ],
    },

    {
      id: "impact",
      title: "Impact & Outcomes",
      type: "impact",
      content: [
        {
          type: "list",
          data: {
            title: "Quantitative impact",
            items: [
              "50% reduction in report turnaround time",
              "4 legacy systems replaced with 1 unified tool",
              "585,000 reports/year processed through the new workflow",
            ],
          },
        },
        {
          type: "list",
          data: {
            title: "Qualitative impact",
            items: [
              "Higher user satisfaction from counselors and lab directors",
              "Reduced training time for new hires",
              "Eliminated context-switching overhead",
            ],
          },
        },
        {
          type: "text",
          data: "<p><strong>What this means for AI:</strong> The next iteration of this workflow will integrate AI-assisted anomaly detection to flag cases that need closer review. The design challenge will be the same one I encountered here: how do we surface AI recommendations in a way that supports clinical judgment rather than replacing it? The handoff between algorithmic confidence and human expertise is the critical design problem.</p>",
        },
      ],
    },

    {
      id: "reflection",
      title: "Reflection",
      type: "reflection",
      content: [
        {
          type: "text",
          data: "<p><strong>What I learned:</strong> Clinical workflows are rarely linear. The documented process and the actual process are often different, and the gap between them is where the design problems live. Shadowing users in their actual environment revealed pain points that interview data alone wouldn\u2019t have surfaced.</p>",
        },
        {
          type: "text",
          data: "<p><strong>What I\u2019d do differently:</strong> I would have involved lab leadership earlier in the design process. Some of the handoff logic we built had to be reworked because we didn\u2019t fully understand the approval hierarchy until later in the project.</p>",
        },
        {
          type: "text",
          data: "<p><strong>Next steps:</strong> We\u2019re extending this unified review framework to other product lines and building analytics dashboards that give leadership real-time visibility into review bottlenecks.</p>",
        },
      ],
    },
  ],

  team: [
    "Product Manager",
    "Product Designer",
    "Engineering team (Serbia-based)",
  ],

  myRole:
    "Lead Designer & Researcher \u2014 discovery, synthesis, persona development, workflow mapping, usability testing",

  tags: [
    "Healthcare UX",
    "Clinical workflows",
    "Regulated design",
    "Lab operations",
    "Genetic testing",
  ],
};
