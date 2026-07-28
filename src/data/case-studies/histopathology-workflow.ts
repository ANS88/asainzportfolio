import type { CaseStudy } from "@/types/case-study";

export const histopathologyWorkflow: CaseStudy = {
  slug: "histopathology-workflow",
  title: "Histopathology Lab Workflow Redesign",
  stakesLine:
    "Natera's histopathology pipeline ran on spreadsheets, manual queues, and fragmented systems — in a domain where a mislabeled tube can compromise a genetic test result. I made an organizational bet on a research methodology the company had never used, set the ownership model for a cross-functional team, and led the redesign of the entire pipeline. The methodology outlived the project.",
  judgment: "Made the organizational case for in-lab ethnography in a company that had never done it — the methodology became the standard",
  role: "UX & Design Lead",
  timeline: "0 → 1 (2024–2025)",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",
  previewImage: "/images/case-studies/histopathology-workflow/user-flow.svg",
  previewVideo: "https://player.vimeo.com/video/1169727354?h=e903c04ee8&autoplay=1&loop=1&muted=1&background=1",

  impact: [
    { value: "5", metric: "Workflow stages redesigned end-to-end" },
    { value: "6+", metric: "Shadowing sessions with lab staff" },
    { value: "2", metric: "Legacy systems consolidated (LV + Philips)" },
    { value: "0", metric: "Spreadsheets in new workflow" },
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
            src: "https://player.vimeo.com/video/1169727354?h=e903c04ee8&autoplay=1&loop=1&muted=1&background=1",
            caption: "",
          },
        },
        {
          type: "video",
          data: {
            src: "https://player.vimeo.com/video/1148959154?h=d9ae3634e1&autoplay=1&loop=1&muted=1&background=1",
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
          data: "<p>Natera's histopathology workflow — from tissue validation through micro dissection — spanned five major stages, each with its own tools, manual handoffs, and failure modes. Lab technicians toggled between LabVantage for accessioning, Philips for digital pathology, and spreadsheets for everything in between.</p>",
        },
        {
          type: "text",
          data: "<p>In a clinical genomics lab, workflow friction isn't an efficiency problem — it's a risk problem. Mislabeled tubes, missed scanning windows, and broken system integrations can compromise sample integrity and the genetic test results downstream. Any redesign had to be justified not on convenience but on error reduction.</p>",
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
          data: "<p>I spent days shadowing lab technicians, pathologists, and micro dissection specialists through full shifts — standing next to the microtome, watching the staining process, following tissue samples from station to station. Not interviews. Not described workflows. The actual physical work, observed in real time.</p>",
        },
        {
          type: "text",
          data: "<p>The biggest insight wasn't in the task list — it was in the tool. Across every stage of the pipeline, the one constant was the barcode scanner. Technicians reached for it more than any keyboard, mouse, or screen. It was the physical anchor of their workflow, but the software treated it as an input peripheral, not a driver. That observation became the design thesis: if the scanner is how lab staff actually move through their work, the scanner should be driving the interface — not the other way around.</p>",
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
          data: "<p>I directed multiple rounds of contextual inquiry and shadowing with lab technicians, pathologists, and micro dissection specialists in their working environments, with a clear mandate: map every action, decision point, and system touchpoint across the full pipeline, so that the design work was grounded in observed reality rather than requirements documents.</p>",
        },
        {
          type: "list",
          data: {
            title: "",
            items: [
              "In-lab shadowing across tissue validation, sectioning, staining, pathologist review, and micro dissection",
              "Workflow mapping of user actions, system interactions, and decision branches (slides vs. blocks)",
              "Pain point identification through observation and contextual interviews",
              "Systems audit of LabVantage and Philips integration points",
            ],
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/histopathology-workflow/user-flow.svg",
            alt: "End-to-end user flow diagram mapping the histopathology pipeline from tissue validation through micro dissection, with branching logic for slides versus blocks",
          },
        },
        {
          type: "text",
          data: "<p>Five findings, each tied to a concrete risk:</p>",
        },
        {
          type: "list",
          data: {
            title: "",
            items: [
              "Manual queue management — staff hand-entered samples into queues, every manual entry a potential error",
              "Broken system integrations — the Bioanalyzer–LabVantage integration was incomplete, forcing manual reconciliation",
              "Disconnected pathology reports — PDFs weren't linked to case details, so staff retrieved them separately from LIMS",
              "Tube-label mismatch risk — manual matching during micro dissection was the highest-risk error point in the pipeline",
              "Historical scanning gaps — scanning initiated workflows but wasn't standardized, leaving case history untraceable",
            ],
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
          type: "quote",
          data: {
            text: "Design for the physical choreography of the lab. Technicians move between stations, scanners, and microscopes — the system has to meet them where they work, not pull them to a screen.",
            attribution: "Design principle I set for the team",
          },
        },
        {
          type: "text",
          data: "<p>I set this principle as the decision filter for all design work, then held the line on it through scoping, critique, and design reviews. Every key decision maps directly to a research finding — in a patient-safety context, a design decision without an evidence trail is a liability.</p>",
        },
        {
          type: "list",
          data: {
            title: "",
            items: [
              "Scan-driven workflow — barcode scanning triggers queue placement and case retrieval, eliminating manual entry",
              "Integrated pathology reports — PDFs linked directly to case details",
              "Automated code generation — closing the Bioanalyzer–LV gap without human reconciliation",
              "Undo-safe scanning — defined valid correction windows during micro dissection, directly addressing the highest-risk finding",
              "Branch-aware UI — interface adapts to the slides vs. blocks path after sectioning",
            ],
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/histopathology-workflow/design-principles.svg",
            alt: "Design principles guiding the histopathology workflow redesign",
          },
        },
        {
          type: "text",
          data: "<p>Validation happened the same way discovery did: in the lab, with the actual system, against real tissue-processing scenarios. UAT confirmed that scan-driven workflows reduced manual entry points, integrated reports eliminated LIMS context-switching, and the branch-aware interface guided users through both paths without confusion.</p>",
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
          data: "<p>Replaced spreadsheets and manual tracking across all five histopathology stages. Consolidated LabVantage and Philips interactions into a unified workflow. Eliminated manual queue management through scan-driven automation and linked pathology reports directly to case records.</p>",
        },
        {
          type: "text",
          data: "<p>Reduced error risk at tube-label matching and sample handoff points — the pipeline's highest-stakes failure modes. Standardized scanning and tracking across the full tissue processing pipeline, ending the context-switching between disconnected systems for a single case.</p>",
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
          data: "<p>This is the outcome I weigh most heavily. The project established in-lab ethnographic research as organizational precedent at Natera. Before it, lab operations research was remote by default; after it, the team had both a proven methodology and the leadership buy-in to embed researchers in physical lab environments — a durable capability, not a one-time win. The workflow maps became reference artifacts for engineering and product teams scoping adjacent lab systems, extending the return on the research well past this project's boundaries.</p>",
        },
        {
          type: "text",
          data: "<p>That's the pattern I look for in leadership work: the deliverable ships, but the way of working persists.</p>",
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
          data: "<p>I would have mapped the full systems architecture (LV, Philips, Bioanalyzer, LIMS) earlier and pulled engineering into discovery from day one. Integration constraints surfaced late and forced design rework. The lesson I've carried forward: in high-stakes systems, the people who know the constraints belong in the room before the first design decision, and it's my job to put them there.</p>",
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
    "Set the discovery strategy and made the organizational case for in-lab ethnography; directed contextual inquiry and shadowing across 5 workflow stages; owned the design strategy and principles governing the redesign; aligned lab ops, pathology, and engineering stakeholders; ran UAT with end users in their physical environments.",

  owned:
    "Set the discovery strategy and made the organizational case for in-lab ethnography; directed contextual inquiry and shadowing across 5 workflow stages; owned the design strategy and principles governing the redesign; aligned lab ops, pathology, and engineering stakeholders; ran UAT with end users in their physical environments.",

  tags: [
    "Lab operations",
    "Histopathology",
    "Contextual inquiry",
  ],
};
