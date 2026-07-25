import type { CaseStudy } from "@/types/case-study";

export const identityPortal: CaseStudy = {
  slug: "identity-portal",
  title: "IDENTITY: Foster Care Health Data Portal",
  stakesLine:
    "Critical medical and legal information for foster children was exchanged via mail and paper workflows, creating dangerous delays. I led user research and co-design to build a secure digital portal connecting Cincinnati Children\u2019s Hospital and Hamilton County Jobs & Family Services.",
  judgment: "Chose participatory co-design over traditional requirements gathering \u2014 the stakeholders weren't just sources of requirements, they were co-designers",
  role: "Lead Designer & Researcher",
  timeline: "May \u2013 August 2017",
  company: "Live Well Collaborative",
  companyDescription:
    "In partnership with CCHMC and HCJFS",

  impact: [
    { value: "18", metric: "Participants in card sort activity" },
    { value: "15", metric: "Users tested interactive prototype" },
    { value: "3", metric: "Peer-reviewed publications" },
    { value: "Statewide", metric: "Expanded across Ohio by 2020" },
  ],

  sections: [
    {
      id: "context",
      title: "Context & Challenge",
      type: "context",
      content: [
        {
          type: "video",
          data: {
            src: "https://www.youtube.com/embed/jbXdF-C4E6c?si=i3luNWnFNpHDUD-a&autoplay=1&loop=1&playlist=jbXdF-C4E6c",
          },
        },
        {
          type: "text",
          data: "<p>A secure digital platform enabling Cincinnati Children\u2019s Hospital (CCHMC) and Hamilton County Jobs & Family Services (HCJFS) to share critical medical and legal information about foster children \u2014 replacing slow, paper-based exchanges and improving timeliness and accuracy of care.</p>",
        },
        {
          type: "list",
          data: {
            title: "Research highlights",
            items: [
              "Fragmented Processes \u2014 Critical data was exchanged via mail and long paper workflows, creating delays and inconsistencies",
              "Diverse Stakeholders \u2014 Medical professionals, social workers, and IT staff had different priorities, technical skills, and security concerns",
              "Complex Data Needs \u2014 Sensitive legal and medical information required rigorous privacy safeguards and clear access permissions",
            ],
          },
        },
        {
          type: "text",
          data: "<p><strong>Goal:</strong> Design and launch an online portal to streamline the exchange of foster-care health and legal data, ensuring that social workers, clinicians, and administrators can access up-to-date information to support the health and well-being of foster children.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/identity-portal/overview.png",
            alt: "Overview of the IDENTITY portal system",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/identity-portal/overview2.png",
            alt: "Secondary overview of the IDENTITY portal system",
          },
        },
      ],
    },

    {
      id: "research",
      title: "Discovery & Co-Creation",
      type: "research",
      content: [
        {
          type: "text",
          data: "<p>Employing participatory methods, we mapped out the current system along with the CCHMC and HCJFS team, then defined the goal system to guide our research and design process.</p>",
        },
        {
          type: "text",
          data: "<p>To understand the needs of both user groups \u2014 HCJFS (social workers, administrative personnel, IT) and CCHMC (medical doctors, nurses, social workers, researchers, IT) \u2014 the first interactions focused on learning about their daily activities, schedules, tools used at work, environments, people and departments they interact with, and the kind of data they most need to access.</p>",
        },
        {
          type: "text",
          data: "<p>Initial user research helped us identify the user profiles for the portal. 18 participants from HCJFS and CCHMC then partook in a card sort activity, arranging and prioritizing the content for the website.</p>",
        },
      ],
    },

    {
      id: "design",
      title: "Design & Information Architecture",
      type: "design",
      content: [
        {
          type: "text",
          data: "<p>The insights gathered from various research activities (card sorting, observational research, and interviews) along with secondary research helped us design the structure of the portal.</p>",
        },
        {
          type: "text",
          data: "<p>Medium-fidelity wireframes were initially created to get feedback from users. We relied on paper wireframing and held in-person sessions to go over features and workflows.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/identity-portal/arch.png",
            alt: "Information architecture diagram for the IDENTITY portal",
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
          data: "<p>After refining the wireframes and developing a high-fidelity version, we conducted cognitive walkthroughs with users from both organizations. The interactive prototype was tested with 15 users from both organizations.</p>",
        },
        {
          type: "text",
          data: "<p>Based on the data drawn from user testing, the prototype was refined to ensure users\u2019 mental models matched the system, providing a strong user experience.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/identity-portal/cardsorting.png",
            alt: "Card sorting activity results from usability testing",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/identity-portal/cardsorting2.png",
            alt: "Card sorting summary from usability testing",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/identity-portal/mapping.png",
            alt: "Information architecture mapping from usability testing",
          },
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
          data: "<p><strong>The obvious move:</strong> Conduct stakeholder interviews, gather requirements, and hand off a spec to the development team. That's the standard process for a portal project with a tight timeline and multiple organizations.</p>",
        },
        {
          type: "text",
          data: "<p><strong>What I chose instead:</strong> Participatory co-design. I brought social workers, clinicians, administrators, and IT staff into the design process as co-creators, not just sources of requirements. Card sorting with 18 participants across both organizations surfaced information architecture that matched real mental models.</p>",
        },
        {
          type: "text",
          data: "<p><strong>The tradeoff:</strong> Co-design is slower upfront and harder to coordinate across organizations with different cultures, priorities, and security concerns. But the result was a system that matched actual workflows — validated by the fact that it scaled from a single-county pilot to statewide deployment without major redesign.</p>",
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
            title: "Launch & expansion",
            items: [
              "Launched in 2018 as a pilot project in Hamilton County",
              "By 2020, expanded across the state of Ohio",
              "Future plans include nationwide expansion",
            ],
          },
        },
        {
          type: "list",
          data: {
            title: "Publications",
            items: [
              "Journal of the American Medical Informatics Association (JAMIA)",
              "CincyInformatix: Personal Health Records Link Data for Foster Care Youth",
              "American Academy of Pediatrics (Pediatrics journal)",
            ],
          },
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
          data: "<p>The portal expanded from a single-county pilot in Hamilton County to statewide deployment across Ohio by 2020, with plans for nationwide expansion. The participatory design methodology produced a system that matched real workflows rather than imposing new ones — validated by three peer-reviewed publications in JAMIA, Pediatrics, and CincyInformatix. The project demonstrated that co-design with diverse stakeholders (social workers, clinicians, IT staff) in complex regulated environments produces systems that scale.</p>",
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
          data: "<p>This project demonstrated the power of participatory design in complex, multi-stakeholder healthcare environments. By involving social workers, clinicians, administrators, and IT staff as co-designers \u2014 not just end users \u2014 we built a system that matched real workflows rather than imposing new ones. The portal\u2019s expansion from a single-county pilot to statewide deployment validated the research-driven approach.</p>",
        },
      ],
    },
  ],

  team: [
    "Live Well Collaborative design team",
    "CCHMC clinical and IT staff",
    "HCJFS social workers and administrators",
  ],

  myRole:
    "Graduate Research Fellow \u2014 user research, co-creation workshops, information-architecture design, iterative prototyping",

  owned:
    "Graduate Research Fellow — I owned user research, co-creation workshop facilitation, information architecture design, and iterative prototyping. Worked within a cross-organizational team spanning CCHMC clinical/IT staff and HCJFS social workers and administrators.",

  tags: [
    "Healthcare UX",
    "Foster care",
    "Participatory design",
    "Information architecture",
    "Co-creation",
    "Service design",
  ],
};
