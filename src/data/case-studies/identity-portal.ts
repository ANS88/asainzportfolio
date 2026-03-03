import type { CaseStudy } from "@/types/case-study";

export const identityPortal: CaseStudy = {
  slug: "identity-portal",
  title: "IDENTITY: Foster Care Health Data Portal",
  stakesLine:
    "Critical medical and legal information for foster children was exchanged via mail and paper workflows, creating dangerous delays. I led user research and co-design to build a secure digital portal connecting Cincinnati Children\u2019s Hospital and Hamilton County Jobs & Family Services.",
  role: "Graduate Research Fellow",
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

  tags: [
    "Healthcare UX",
    "Foster care",
    "Participatory design",
    "Information architecture",
    "Co-creation",
    "Service design",
  ],
};
