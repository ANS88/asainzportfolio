import type { CaseStudy } from "@/types/case-study";

export const unifiedPatientPortal: CaseStudy = {
  slug: "unified-patient-portal",
  title: "Unified Patient Portal",
  stakesLine:
    "Patients had little visibility into their own genetic test status, faced opaque billing, and waited days for results. I drove the research strategy across two business units for Natera\u2019s first patient-facing portal \u2014 empowering 181K patients to track tests, view results, manage billing, and schedule sample draws.",
  judgment: "Used the Cures Act mandate as leverage to fund a patient-centered portal instead of bolting results onto the physician system",
  role: "UX Research Lead",
  timeline: "Discovery to post-launch monitoring (2023\u20132024)",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",
  previewImage: "/images/case-studies/unified-patient-portal/iterations.png",

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
        {
          type: "image",
          data: {
            src: "/images/case-studies/unified-patient-portal/designprinciples.png",
            alt: "Design principles framework distilled from discovery research",
            caption: "Design principles distilled from discovery research",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/unified-patient-portal/personalexi.png",
            alt: "Lexi persona document \u2014 digitally engaged pregnant patient",
            caption: "Lexi \u2014 primary persona, digitally engaged pregnant patient",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/unified-patient-portal/userjourneylexi.png",
            alt: "Lexi\u2019s end-to-end genetic testing journey map",
            caption: "Lexi\u2019s end-to-end genetic testing journey map",
          },
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
        {
          type: "image",
          data: {
            src: "/images/case-studies/unified-patient-portal/iterations.png",
            alt: "Prototype iterations tested during usability sessions",
            caption: "Prototype iterations tested during usability sessions",
          },
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
              "Met federal 21st Century Cures Act compliance requirements while reducing call-center burden through patient self-service",
            ],
          },
        },
        {
          type: "text",
          data: "<p><strong>Publication:</strong> This work culminated in a peer-reviewed paper presented at the Design Research Society 2024 Conference: Navarro-Sainz, A., Huda, S., & Bectarte, R. <em>Unified Patient Portal: Engaging Patients Throughout the Genetic Testing Journey.</em> Proceedings of DRS 2024. <a href=\"https://dl.designresearchsociety.org/cgi/viewcontent.cgi?article=3480&context=drs-conference-papers\" target=\"_blank\" rel=\"noopener noreferrer\">Read the paper \u2192</a></p>",
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
          data: "<p><strong>The obvious move:</strong> Bolt a results-viewing feature onto the existing physician-facing system. The Cures Act mandated patient access to results — the fastest path was to expose a read-only view of what doctors already saw.</p>",
        },
        {
          type: "text",
          data: "<p><strong>What I chose instead:</strong> I advocated for a purpose-built patient portal with its own design principles. Patients are not clinicians. They need plain language, emotional sensitivity, separated billing, and clear next actions — not a filtered version of the clinical interface.</p>",
        },
        {
          type: "text",
          data: "<p><strong>The tradeoff:</strong> Building a dedicated portal took longer and required aligning two business units that had never shared a product surface. But the result was a system that actually served patients, not one that technically complied while failing the people it was supposed to help.</p>",
        },
      ],
    },

    {
      id: "beyond",
      title: "What this changed beyond the project",
      type: "beyond",
      content: [
        {
          type: "text",
          data: "<p>The portal became Natera's first patient-facing product that crossed business unit boundaries. The design principles I developed — Test is Core Object, Separation of Concerns, Do Not Burden — became the foundation for all subsequent patient-facing work. The DRS 2024 publication brought external validation to the methodology and opened a conversation about how regulated companies can do patient-centered design without compromising compliance.</p>",
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
    "UX Research Lead \u2014 defined research strategy across Women\u2019s Health and Organ Health business units, led stakeholder alignment with 15 SMEs, persona development, journey mapping, usability testing, post-launch analytics. Published findings at DRS 2024.",

  owned:
    "I owned the research strategy across both business units, stakeholder alignment with 15 SMEs, and the decision to build design principles from discovery rather than inheriting them from the physician-facing system. The product designer owned interaction design; PMs (one per BU) owned feature prioritization.",

  tags: [
    "Healthcare UX",
    "Patient portal",
    "Genetic testing",
    "Cures Act",
    "Usability testing",
    "DRS 2024",
  ],
};
