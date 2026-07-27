import type { CaseStudy } from "@/types/case-study";

export const nateraClinicalReview: CaseStudy = {
  slug: "natera-clinical-review",
  title: "Clinical Review",
  stakesLine:
    "When genetic test reports are delayed, treatment decisions are delayed. I found the real bottleneck, built the case for a platform investment, and led the design and research behind the workflow that determines how fast 585,000 patients a year get their results.",
  judgment: "Chose distributed cognition framework over standard usability audit, the bottleneck was organizational, not interface",
  role: "Product Design & Research Lead",
  timeline: "Discovery to launch (2024–2025)",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",
  previewImage: "/images/case-studies/natera-clinical-review/workflow-flow.png",

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
          data: "<p>In 2024, Natera processed a record 3,064,600 tests. One in five needed manual review by genetic counselors and lab directors before reaching patients, and that review ran across four disconnected tools. In prenatal testing, the resulting delays can push back decisions about pregnancy management; in oncology, treatment timing.</p>",
        },
        {
          type: "text",
          data: "<p>Turnaround is also a competitive metric: ordering physicians choose labs partly on speed, and manual review was the slowest, least scalable stage of the pipeline. Volume was growing but review capacity could only grow by hiring genetic counselors, a constrained and expensive market. The company could hire its way out of the bottleneck or redesign it. This project made the case for redesigning it, inside a regulated environment where accuracy could not be traded for speed and the system had to keep processing half a million reports a year while we replaced the tools underneath it.</p>",
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
          data: "<p>The team asked for a usability audit of the existing tools. I proposed something different: mapping the review process as a distributed system, because early shadowing suggested the delays lived in the transitions between people and tools, not inside any single interface.</p>",
        },
        {
          type: "text",
          // TODO: confirm this is team-total; if it is individual, keep original wording
          data: `<p>Discovery covered 15 end users, 8 subject matter experts, and 6 department leaders across the women's health, oncology, and organ health divisions, with 2,000+ team hours of contextual inquiry and live shadowing.<!-- TODO: one line crediting the researcher you managed and what they ran. --></p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/natera-clinical-review/distributed-cognition-map.svg",
            alt: "As-is map of the manual review workflow showing information flowing across two roles, four tools, and the handoffs between them, with friction points marked at the transitions.",
            caption: "Mapping the review as a distributed system, rather than auditing each tool separately, showed the delays lived in the transitions, not the interfaces. That reframing turned a usability project into a platform investment.",
          },
        },
        {
          type: "text",
          data: "<p>What the map surfaced:</p><ol><li><strong>Expert time lost to admin.</strong> Counselors spent their scarcest resource, clinical judgment, on repetitive administrative work.</li><li><strong>A handoff with no guardrails.</strong> The transition from counselor review to lab director approval had no automated validation, creating error risk on patient results.</li><li><strong>No clear ownership.</strong> Reviewers couldn't see which tasks were theirs, producing duplicate work and missed handoffs.</li><li><strong>Four tools per review.</strong> Every case required toggling across four systems, each switch adding load and time.</li></ol>",
        },
        {
          type: "text",
          data: "<p>The tradeoff was real: this analysis takes longer than an audit and is harder to sell to stakeholders who want quick wins. I spent political capital on the broader scope. It bought a design that addressed the structure instead of the symptoms.</p>",
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
            text: "Design for the expert user's mental model, not the system's data model. Genetic counselors think in clinical cases, not database records.",
          },
        },
        {
          type: "text",
          data: `<p>I set the design direction from the discovery findings: a unified review interface where cases route automatically into role-specific queues, validations block incomplete handoffs before they happen, and counselors and lab directors see role-appropriate views of the same consolidated case.<!-- TODO: one clause on the split between your direction and the product designer's execution, consistent with the ownership boundary below. --></p>`,
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
          type: "text",
          data: "<p>We tested iteratively throughout, with real counselors and lab directors on real cases. Early prototypes assumed too much knowledge of the new system, so we added contextual help and status indicators that made it learnable without formal training.</p>",
        },
        {
          type: "quote",
          data: {
            text: "“It feels like it was designed for how we actually work.”",
            attribution: "Genetic counselor, UAT",
          },
        },
      ],
    },

    {
      id: "impact",
      title: "Half the turnaround time",
      type: "impact",
      content: [
        {
          type: "text",
          data: `<p>Report turnaround dropped 50%<!-- TODO: from X days to Y days over N months, and how the workflow's contribution was isolated -->, enabling earlier clinical decisions across 585,000 reports a year. Replacing four systems with one cut new-hire training time and gave reviewers back the hours a week previously lost to tool switching. Usability landed at 88 SUS<!-- TODO: n -->, well above the industry benchmark of 68.</p>`,
        },
        {
          type: "text",
          data: `<p>The next iteration adds AI-assisted anomaly detection to flag cases needing closer review. The design problem stays the same: surfacing algorithmic confidence in a way that supports clinical judgment instead of replacing it.<!-- TODO: one sentence on your current role in that work. --></p>`,
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
          data: `<p>The unified review framework became Natera's template for lab workflow redesign, the discovery methodology is now the standard for new workflow projects in lab operations<!-- TODO: count of projects -->, and engineering reuses the role-based queue architecture across product lines<!-- TODO: which product lines -->.</p>`,
        },
        {
          type: "text",
          data: "<p>The most durable change is when research enters the process. Before this project, research was brought in to validate designs. After it, research defines the problem.</p>",
        },
        {
          type: "text",
          data: "<p>If I did it again, I'd bring lab leadership in earlier, not for feedback but to co-own the change management. Some handoff logic had to be reworked because we mapped the approval hierarchy too late, and that lesson now shapes how I scope discovery.</p>",
        },
      ],
    },
  ],

  // TODO: add names: Product manager, product designer, engineering team (Serbia-based), 1 researcher (managed)
  team: [
    "Product Manager",
    "Product Designer",
    "Engineering team (Serbia-based)",
  ],

  myRole:
    "Product Design & Research Lead: design direction, research strategy, stakeholder alignment, framework choice, cross-divisional discovery, leadership readouts, usability testing, post-launch monitoring",

  // TODO: REWRITE REQUIRED. The current text says "The product designer owned interaction design,"
  // which contradicts a Product Design & Research Lead title. Restate honestly, e.g.
  // "I owned design direction and research strategy; [designer name] owned interaction and visual
  // execution within that direction; the PM owned roadmap prioritization; engineering owned
  // feasibility of the queue architecture." Use whatever division of labor actually happened.
  owned:
    "I owned the research strategy, stakeholder alignment, and the decision to use distributed cognition as the analytical framework. The product designer owned interaction design; the PM owned roadmap prioritization; engineering owned technical feasibility of the queue architecture.",

  tags: [
    "Clinical workflows",
    "Lab operations",
    "Regulated design",
  ],
};
