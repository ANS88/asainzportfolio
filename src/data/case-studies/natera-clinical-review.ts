import type { CaseStudy } from "@/types/case-study";

export const nateraClinicalReview: CaseStudy = {
  slug: "natera-clinical-review",
  title: "Clinical Review",
  stakesLine:
    "When genetic test reports are delayed, treatment decisions are delayed. I found the real bottleneck, built the case for a platform investment, and led a cross-functional team to redesign the workflow that determines how fast 585,000 patients per year get their results.",
  judgment: "Chose distributed cognition framework over standard usability audit, the bottleneck was organizational, not interface",
  role: "UX Research Lead",
  timeline: "Discovery to launch (2024–2025)",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",

  impact: [
    { value: "50%", metric: "Reduction in turnaround time" },
    { value: "585K", metric: "Reports/year affected" },
    { value: "1", metric: "Tool replaced 4 legacy systems" },
    // TODO: add n, e.g. "n=[12] reviewers"
    { value: "88", metric: "SUS score (benchmark: 68)" },
  ],

  sections: [
    {
      id: "video",
      title: "",
      type: "design",
      content: [
        {
          type: "video",
          data: {
            src: "https://player.vimeo.com/video/987351069?h=88b99a7143&autoplay=1&loop=1&muted=1&background=1",
            caption: "Prototype walkthrough: unified manual review workflow (1 of 2)",
          },
        },
      ],
    },

    {
      id: "context",
      title: "585,000 reports were waiting on a workflow",
      type: "context",
      content: [
        {
          type: "text",
          data: "<p><strong>The clinical problem:</strong> In 2024, Natera processed a record 3,064,600 tests. 20% of them, 585,000 reports, required manual review by genetic counselors and lab directors before reaching patients. The existing workflow was fragmented across four tools, creating delays that directly affected patient care timelines.</p>",
        },
        {
          type: "text",
          data: "<p><strong>Why this matters clinically:</strong> In prenatal genetic testing, a delayed result can mean a delayed decision about pregnancy management. In oncology, it can affect treatment timing. The review workflow isn’t just operational efficiency; it’s clinical impact.</p>",
        },
        {
          type: "text",
          data: `<p><strong>Why this mattered to the business:</strong> Turnaround time is a competitive metric in genetic testing. Ordering physicians choose labs partly on how fast results come back, and manual review was the slowest, least scalable stage of the pipeline. Test volume was growing <!-- TODO: X% year over year -->, but review capacity could only grow by hiring genetic counselors, a constrained and expensive talent market. The company was facing a choice between hiring its way out of the bottleneck or redesigning it. This project made the case for the second option.</p>`,
        },
        {
          type: "text",
          data: "<p><strong>The constraint:</strong> Design for expert users in a regulated environment where accuracy cannot be compromised for speed. Every workflow change needed clinical validation, and the system had to keep processing half a million reports a year while we replaced the tools underneath it.</p>",
        },
      ],
    },

    {
      id: "research",
      title: "Finding the real bottleneck",
      type: "research",
      content: [
        {
          type: "text",
          data: "<p>I led discovery with 15 end-users, 8 subject matter experts, and 6 department leaders across Natera’s women’s health, oncology, and organ health divisions.</p>",
        },
        {
          type: "text",
          data: `<p><!-- TODO: I directed a researcher on the team through [which studies they ran], reviewing their analysis and folding it into the synthesis. --></p>`,
        },
        {
          type: "list",
          data: {
            title: "Methods",
            items: [
              // TODO: confirm this is team-total; if it is individual, keep original wording
              "2,000+ team hours of contextual inquiry and live shadowing across the research program",
              "Thematic analysis of interview transcripts to identify workflow pain points",
              "Cross-functional vision workshop to align stakeholders on goals and constraints",
              "Distributed cognition framework analysis to map how information flows across people, tools, and environments",
            ],
          },
        },
        {
          type: "quote",
          data: {
            text: "Clinical workflows don’t exist in individual heads, they’re distributed across multiple people, tools, and handoffs. The framework helped me identify where cognitive load was unnecessarily high and where system design was compensating for (or creating) workflow friction.",
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
      title: "The problem wasn’t any single tool",
      type: "findings",
      content: [
        {
          type: "image",
          data: {
            src: "/images/case-studies/natera-clinical-review/distributed-cognition-map.svg",
            alt: "As-is map of the manual review workflow showing information flowing across two roles, four tools, and the handoffs between them, with friction points marked at the transitions.",
            caption: "Mapping the review process as a distributed system, rather than auditing each tool separately, showed the delays lived in the transitions, not the interfaces. That reframing is what turned a usability project into a platform investment.",
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
          data: "<h3>Finding 3: Role confusion</h3><p>Users didn’t have clear visibility into what tasks were theirs versus someone else’s. This created duplicate work and missed handoffs.</p>",
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
      title: "One system instead of four",
      type: "design",
      content: [
        {
          type: "quote",
          data: {
            text: "Design for the expert user’s mental model, not the system’s data model. Genetic counselors think in terms of clinical cases, not database records.",
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
              "Queue-based workflow, cases route automatically based on type and status",
              "Progressive disclosure, show only information relevant to the current decision",
              "Built-in validations, prevent incomplete handoffs before they happen",
              "Role-based permissions, genetic counselors and lab directors see different views of the same case",
            ],
          },
        },
        {
          type: "text",
          data: "<p><strong>Genetic Counselor:</strong> high-volume review, needs efficiency and accuracy</p><p><strong>Lab Director:</strong> final approval, needs oversight and audit trail</p>",
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
      title: "Tested with the people who’d live in it",
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
      id: "rollout",
      title: "Getting 585,000 reports onto a new system",
      type: "validation",
      content: [
        {
          type: "text",
          data: `<!-- TODO: 3 short paragraphs from the site owner covering: rollout sequencing (which labs or divisions first and why), training approach, and one concrete instance of resistance or a reworked decision during adoption. Do not draft this from imagination. -->`,
        },
      ],
    },

    {
      id: "impact",
      title: "Half the turnaround time",
      type: "impact",
      content: [
        {
          type: "list",
          data: {
            title: "Quantitative impact",
            items: [
              "50% reduction in report turnaround time",
              "4 legacy systems replaced with 1 unified tool, reducing training time for new hires and eliminating context-switching overhead that cost reviewers hours per week",
              "585,000 reports/year processed through the new workflow",
            ],
          },
        },
        {
          type: "text",
          data: `<!-- TODO: baseline and measurement, e.g. "Review-stage turnaround dropped from [X days] to [Y days] in the [N] months post-launch, isolating the workflow's contribution from other pipeline changes." -->`,
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
          data: `<p><strong>What this means for AI:</strong> The next iteration of this workflow will integrate AI-assisted anomaly detection to flag cases that need closer review. The design challenge will be the same one I encountered here: how do we surface AI recommendations in a way that supports clinical judgment rather than replacing it? The handoff between algorithmic confidence and human expertise is the critical design problem.<!-- TODO: one sentence on current involvement, e.g. "I'm currently defining the research program for the anomaly-detection handoff." --></p>`,
        },
      ],
    },

    {
      id: "judgment",
      title: "The bet: reframe, don’t patch",
      type: "judgment",
      content: [
        {
          type: "text",
          data: "<p><strong>The obvious move:</strong> Run a standard usability audit of the existing tools, identify friction points, and recommend incremental fixes. That’s what the team expected when they asked for UX research support.</p>",
        },
        {
          type: "text",
          data: "<p><strong>What I chose instead:</strong> I reframed the problem using a distributed cognition framework. The bottleneck wasn’t any single interface, it was how information flowed across people, tools, and handoffs. That reframing turned a UI improvement project into a platform investment that replaced four systems with one.</p>",
        },
        {
          type: "text",
          data: "<p><strong>The tradeoff:</strong> A distributed cognition analysis takes longer than a usability audit and is harder to sell to stakeholders who want quick wins. I had to spend political capital to get buy-in for a broader scope. But the payoff was a design that addressed the structural problem, not just the surface symptoms.</p>",
        },
      ],
    },

    {
      id: "beyond",
      title: "What outlived the launch",
      type: "beyond",
      content: [
        {
          type: "text",
          data: `<p>The unified review framework became the template for how Natera approaches lab workflow redesign. The discovery methodology I developed, combining contextual inquiry with distributed cognition analysis, is now the standard approach for any new workflow project in the lab operations org.<!-- TODO: how many subsequent projects used the discovery methodology? --> Engineering adopted the role-based queue architecture as a reusable pattern across product lines.<!-- TODO: which product lines adopted the queue architecture? --></p>`,
        },
        {
          type: "text",
          data: `<p>More broadly, this project changed how research is positioned within the team. Before this work, UX research was brought in to validate designs. After, it’s brought in to define the problem. That shift in when research enters the process is the most durable outcome.<!-- TODO: one example of a later project where research entered at problem-definition stage. --></p>`,
        },
      ],
    },

    {
      id: "reflection",
      title: "What I’d do differently",
      type: "reflection",
      content: [
        {
          type: "text",
          data: "<p><strong>What I learned:</strong> Clinical workflows are rarely linear. The documented process and the actual process are often different, and the gap between them is where the design problems live. Shadowing users in their actual environment revealed pain points that interview data alone wouldn’t have surfaced.</p>",
        },
        {
          type: "text",
          data: "<p><strong>What I’d do differently:</strong> I would have involved lab leadership earlier, not just for feedback, but to co-own the change management. Getting the design right is half the work; getting adoption right is the other half, and it starts with stakeholder buy-in before the first prototype. Some of the handoff logic we built had to be reworked because we didn’t fully map the approval hierarchy with the right people early enough.</p>",
        },
        {
          type: "text",
          data: "<p><strong>Next steps:</strong> We’re extending this unified review framework to other product lines and building analytics dashboards that give leadership real-time visibility into review bottlenecks.</p>",
        },
      ],
    },
  ],

  // TODO: add first names or full names and roles for the PM, product designer, engineers, and the researcher managed
  team: [
    "Product Manager",
    "Product Designer",
    "Engineering team (Serbia-based)",
  ],

  myRole:
    "UX Research Lead, defined research strategy, managed 1 researcher, led cross-functional discovery across Women’s Health, Oncology, and Organ Health divisions, presented findings to department leadership, usability testing and post-launch monitoring",

  owned:
    "I owned the research strategy, stakeholder alignment, and the decision to use distributed cognition as the analytical framework. The product designer owned interaction design; the PM owned roadmap prioritization; engineering owned technical feasibility of the queue architecture.",

  tags: [
    "Healthcare UX",
    "Clinical workflows",
    "Regulated design",
    "Lab operations",
    "Genetic testing",
  ],
};
