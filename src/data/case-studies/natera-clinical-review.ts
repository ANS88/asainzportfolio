import type { CaseStudy } from "@/types/case-study";

export const nateraClinicalReview: CaseStudy = {
  slug: "natera-clinical-review",
  title: "Clinical Review",
  stakesLine:
    "When genetic test reports are delayed, treatment decisions are delayed. I identified the bottleneck, made the case for a platform investment, and led the cross-functional effort that redesigned how 585,000 patients a year get their results.",
  judgment: "Reframed a usability audit into a platform investment by mapping the review process as a distributed system",
  role: "Design Leader",
  timeline: "0 → 1 (2024–2025)",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",
  previewImage: "/images/case-studies/natera-clinical-review/workflow-flow.png",

  impact: [
    { value: "50%", metric: "Reduction in turnaround time" },
    { value: "585K", metric: "Reports/year affected" },
    { value: "1", metric: "Tool replaced 4 legacy systems" },
    { value: "88", metric: "SUS score" },
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
            caption: "",
          },
        },
      ],
    },

    {
      id: "context",
      title: "The problem",
      type: "context",
      content: [
        {
          type: "text",
          data: "<p>In 2024, Natera processed over 3 million tests. Twenty percent, 585,000 reports, required manual review by genetic counselors and lab directors before reaching patients. That review was fragmented across four tools, and the delays weren't operational trivia: in prenatal testing, a late result can delay a decision about pregnancy management; in oncology, it can affect treatment timing.</p>",
        },
        {
          type: "text",
          data: "<p>The constraint: expert users, a regulated environment, and zero tolerance for trading accuracy for speed.</p>",
        },
      ],
    },

    {
      id: "judgment",
      title: "The call I made",
      type: "judgment",
      content: [
        {
          type: "text",
          data: "<p>The team asked for a usability audit of the existing tools. I saw a different problem. No single interface was the bottleneck. The friction lived in how information moved across people, tools, and handoffs. I reframed the work through a distributed cognition lens, which turned a UI cleanup request into a platform investment.</p>",
        },
        {
          type: "text",
          data: "<p>That reframing cost political capital. A systems-level analysis is slower and harder to sell than quick wins. But it meant we solved the structural problem instead of polishing its symptoms.</p>",
        },
      ],
    },

    {
      id: "research",
      title: "How we got there",
      type: "research",
      content: [
        {
          type: "text",
          data: "<p>I led discovery across three divisions, 15 end users, 8 SMEs, 6 department leaders, anchored in 2,000+ hours of contextual inquiry shadowing counselors and lab directors in their real environments. Four patterns emerged:</p>",
        },
        {
          type: "list",
          data: {
            title: "",
            items: [
              "Underutilized expertise: clinicians doing administrative work instead of clinical judgment",
              "Error-prone handoffs: no validation at the GC-to-lab-director transition",
              "Role confusion: no visibility into whose task was whose, causing duplicate and dropped work",
              "Context switching: four tools per review, each switch adding cognitive load",
            ],
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/natera-clinical-review/distributed-cognition-map.svg",
            alt: "As-is map of the manual review workflow showing information flowing across two roles, four tools, and the handoffs between them",
          },
        },
      ],
    },

    {
      id: "design",
      title: "What we built",
      type: "design",
      content: [
        {
          type: "text",
          data: "<p>A unified review platform designed around a single principle: <strong>design for the expert's mental model, not the system's data model.</strong> Counselors think in clinical cases, not database records.</p>",
        },
        {
          type: "text",
          data: "<p>Cases route automatically through role-specific queues. Validations run at handoff points before errors can happen. Progressive disclosure surfaces only what the current decision needs. Counselors and lab directors see different views of the same case, matched to their responsibility.</p>",
        },
        {
          type: "text",
          data: "<p>We tested iteratively with real cases and real reviewers throughout, not at the end, which caught early assumptions about system familiarity and led us to build in contextual help that made the tool learnable without formal training.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/natera-clinical-review/workflow-flow.png",
            alt: "End-to-end flow diagram showing the manual review process from GC login through case booking, editing, flag escalation, LD review, and report release",
          },
        },
        {
          type: "quote",
          data: {
            text: "It feels like it was designed for how we actually work.",
            attribution: "Genetic counselor, UAT",
          },
        },
      ],
    },

    {
      id: "impact",
      title: "Impact",
      type: "impact",
      content: [
        {
          type: "text",
          data: "<p>Report turnaround dropped 50%, directly accelerating clinical decisions for 585,000 patients a year. Four legacy systems became one, cutting training time and eliminating hours of weekly context-switching per reviewer.</p>",
        },
        {
          type: "text",
          data: "<p>The organizational impact outlasted the product. The discovery methodology became the standard for lab workflow projects. Engineering reused the role-based queue architecture across product lines. And design's position in the org shifted: before this project, we were brought in to validate solutions; after, we're brought in to define the problem.</p>",
        },
      ],
    },

    {
      id: "reflection",
      title: "What I'd do differently",
      type: "reflection",
      content: [
        {
          type: "text",
          data: "<p>Involve lab leadership as co-owners of change management from day one, not reviewers of finished work. Some handoff logic had to be reworked because we mapped the approval hierarchy too late. Getting the design right is half the job; getting adoption right is the other half.</p>",
        },
      ],
    },

    {
      id: "beyond",
      title: "Looking forward",
      type: "beyond",
      content: [
        {
          type: "text",
          data: "<p>The next iteration integrates AI-assisted anomaly detection to flag cases needing closer review. The design problem stays the same: surfacing algorithmic confidence in a way that supports clinical judgment rather than replacing it. That handoff, machine to expert, is where I want design to lead.</p>",
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
    "Led design and research strategy, managed the team, drove cross-functional discovery and stakeholder alignment across Women's Health, Oncology, and Organ Health; owned the decision to pursue a platform-level solution. Partnered with product, design, and a Serbia-based engineering team on execution.",

  owned:
    "Led design and research strategy, managed the team, drove cross-functional discovery and stakeholder alignment across Women's Health, Oncology, and Organ Health; owned the decision to pursue a platform-level solution. Partnered with product, design, and a Serbia-based engineering team on execution.",

  tags: [
    "Clinical workflows",
    "Lab operations",
    "Regulated design",
  ],
};
