import type { CaseStudy } from "@/types/case-study";

export const unifiedPatientPortal: CaseStudy = {
  slug: "unified-patient-portal",
  title: "Unified Patient Portal",
  stakesLine:
    "Patients had little visibility into their own genetic test status, faced opaque billing, and waited days for results. I led research for Natera\u2019s first patient-facing portal \u2014 empowering 181K patients to track tests, view results, manage billing, and schedule sample draws.",
  role: "Lead UX Researcher",
  timeline: "Discovery to post-launch monitoring (2023\u20132024)",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",

  impact: [
    { value: "181K", metric: "Patients created accounts" },
    { value: "100%", metric: "Women\u2019s Health patients viewed results" },
    { value: "90%+", metric: "Organ Health patients viewed results" },
    { value: "DRS 2024", metric: "Peer-reviewed publication" },
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
            src: "https://player.vimeo.com/video/1169731248?autoplay=1&loop=1&muted=1&background=1",
            caption: "",
          },
        },
      ],
    },

    {
      id: "context",
      title: "Context & Challenge",
      type: "context",
      content: [
        {
          type: "text",
          data: "<p>Before the Unified Patient Portal, Natera\u2019s genetic testing journey was almost entirely physician-mediated. Patients had little visibility into their own test status, faced opaque billing, and often waited days to hear results.</p>",
        },
        {
          type: "list",
          data: {
            title: "Why this project existed",
            items: [
              "Regulatory trigger \u2014 The 21st Century Cures Act mandated instant patient access to results",
              "Business need \u2014 Reduce call-center load and enable self-service while safeguarding comprehension and emotional well-being",
              "User experience research question \u2014 How might we give patients transparent, empowering access without overwhelming them with medical jargon or anxiety?",
            ],
          },
        },
      ],
    },

    {
      id: "research",
      title: "Research, Synthesis & Strategy",
      type: "research",
      content: [
        {
          type: "text",
          data: "<p><strong>Discovery:</strong> I conducted stakeholder interviews with 15 Natera SMEs (product, lab ops, genetic counseling, etc.) to capture technical constraints and patient pain points. Workshops and empathy mapping surfaced emotional states and workflow gaps.</p>",
        },
        {
          type: "list",
          data: {
            title: "Key insights \u2192 Design principles",
            items: [
              "Patients \u2260 Providers \u2014 Use plain language and show emotional sensitivity; avoid medical jargon",
              "Test is Core Object \u2014 Prioritize test status and next required action above all else",
              "Separation of Concerns \u2014 Keep billing information distinct from medical results to reduce anxiety",
              "Do Not Burden \u2014 Minimize cognitive load by showing only essential status indicators",
            ],
          },
        },
        {
          type: "text",
          data: "<p>These principles anchored every design and content decision throughout the project.</p>",
        },
      ],
    },

    {
      id: "findings",
      title: "Personas & Journey Mapping",
      type: "findings",
      content: [
        {
          type: "text",
          data: "<p>Defined <em>Lexi</em>, a digitally engaged pregnant patient, as the primary persona and mapped her end-to-end genetic-testing journey to expose key moments across ordering, sampling, results delivery, and billing.</p>",
        },
      ],
    },

    {
      id: "design",
      title: "Design Collaboration",
      type: "design",
      content: [
        {
          type: "text",
          data: "<p><strong>Double Diamond Process:</strong> Divergent discovery \u2192 convergent synthesis \u2192 iterative prototyping. Figma prototypes of a progressive \u201Ctest card\u201D UI evolved across three major iterations to prioritize results over billing and highlight clear calls-to-action.</p>",
        },
        {
          type: "list",
          data: {
            title: "Critical scenarios designed for",
            items: [
              "Scheduling a sample draw (clinic or at-home)",
              "Viewing results with optional educational videos and genetic-counselor follow-up",
            ],
          },
        },
      ],
    },

    {
      id: "validation",
      title: "Usability Testing",
      type: "validation",
      content: [
        {
          type: "text",
          data: "<p><strong>Method:</strong> Remote think-aloud sessions with 6 patients. Tasks included scheduling a sample draw and viewing results.</p>",
        },
        {
          type: "list",
          data: {
            title: "Findings",
            items: [
              "Flexibility \u2014 Patients valued choice of appointment times and at-home draws",
              "Education \u2014 Pre-results videos eased anxiety and improved comprehension",
              "Access \u2014 Persistent availability of results and resources built trust",
              "Pain points \u2014 Unclear requirement to select three time slots; ambiguous confirmation messages",
            ],
          },
        },
        {
          type: "text",
          data: "<p>Recommendations included clarifying scheduling instructions and reinforcing confirmation feedback.</p>",
        },
      ],
    },

    {
      id: "impact",
      title: "Impact & Metrics \u2014 6-Month Post-Launch",
      type: "impact",
      content: [
        {
          type: "list",
          data: {
            title: "Adoption & engagement",
            items: [
              "181K patients created accounts (171K Women\u2019s Health, 10K Organ Health)",
              "100% of Women\u2019s Health patients returned to view results",
              "90%+ of Organ Health patients returned to view results",
              "13% of Organ Health and 0.5% of Women\u2019s Health patients used in-portal scheduling",
              "High return visits, strong satisfaction with educational resources, and reduced call-center burden",
            ],
          },
        },
        {
          type: "text",
          data: "<p><strong>Publication:</strong> This work culminated in a peer-reviewed paper presented at the Design Research Society 2024 Conference: Navarro-Sainz, A., Huda, S., & Bectarte, R. <em>Unified Patient Portal: Engaging Patients Throughout the Genetic Testing Journey.</em> Proceedings of DRS 2024.</p>",
        },
      ],
    },

    {
      id: "reflection",
      title: "Reflection & Next Steps",
      type: "reflection",
      content: [
        {
          type: "text",
          data: "<p>The Unified Patient Portal demonstrated that patient empowerment is achievable without overwhelming users, provided design principles stay patient-centric.</p>",
        },
        {
          type: "list",
          data: {
            title: "Next iterations",
            items: [
              "Expand to oncology patients",
              "Address low scheduling adoption with improved guidance",
              "Continue longitudinal analytics to refine engagement strategies",
            ],
          },
        },
      ],
    },
  ],

  team: [
    "Product Managers (one per BU)",
    "Product Designer",
    "Engineering team (Serbia-based)",
  ],

  myRole:
    "Lead UX Researcher \u2014 stakeholder interviews, empathy mapping, persona development, journey mapping, usability testing, post-launch analytics",

  tags: [
    "Healthcare UX",
    "Patient portal",
    "Genetic testing",
    "Cures Act",
    "Usability testing",
    "DRS 2024",
  ],
};
