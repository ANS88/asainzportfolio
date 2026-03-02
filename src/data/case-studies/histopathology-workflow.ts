import type { CaseStudy } from "@/types/case-study";

export const histopathologyWorkflow: CaseStudy = {
  slug: "histopathology-workflow",
  title: "Histopathology Lab Workflow Redesign",
  stakesLine:
    "Lab technicians, pathologists, and micro dissection specialists relied on spreadsheets, manual queues, and fragmented systems to process tissue samples. I led shadowing sessions and UAT to design a unified system that replaced manual work across the entire histopathology pipeline.",
  role: "Lead Designer & Researcher",
  timeline: "Discovery to launch (2024\u20132025)",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",

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
            src: "https://player.vimeo.com/video/1148959154?h=d9ae3634e1&autoplay=1&loop=1&muted=1&background=1",
            caption: "Prototype walkthrough: unified histopathology lab workflow",
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
          data: "<p><strong>The lab problem:</strong> Natera\u2019s histopathology workflow \u2014 from tissue validation through micro dissection \u2014 spanned five major stages, each with its own tools, manual handoffs, and pain points. Lab technicians toggled between LabVantage (LV) for accessioning, Philips for digital pathology, and spreadsheets for everything in between.</p>",
        },
        {
          type: "text",
          data: "<p><strong>Why this matters:</strong> Every manual step in histopathology introduces risk. Mislabeled tubes, missed scanning windows, and broken integrations between systems don\u2019t just slow the lab down \u2014 they can compromise sample integrity and downstream genetic test results.</p>",
        },
        {
          type: "text",
          data: "<p><strong>The constraint:</strong> Design for expert lab users who work with physical specimens, scanners, and microscopes \u2014 not just screens. The system had to fit into the physical choreography of the lab, not disrupt it.</p>",
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
          data: "<p>I led multiple rounds of contextual inquiry and shadowing sessions with lab technicians, pathologists, and micro dissection specialists in their actual work environments. The goal was to map every action, decision point, and system touchpoint across the full histopathology pipeline.</p>",
        },
        {
          type: "list",
          data: {
            title: "Methods",
            items: [
              "In-lab shadowing sessions observing tissue validation, sectioning, staining, pathologist review, and micro dissection",
              "Workflow mapping of user actions, system interactions, and decision branches (slides vs. blocks)",
              "Pain point identification through observation and contextual interviews",
              "Systems audit of LabVantage (LV) and Philips integration points",
            ],
          },
        },
        {
          type: "text",
          data: "<p>The workflow map captured the full end-to-end process: <strong>Validate tissue sample \u2192 Create tissue sets \u2192 Sectioning \u2192 H&E staining \u2192 Pathologist review \u2192 Micro dissection</strong>, with branching logic for slides versus blocks at the sectioning stage.</p>",
        },
      ],
    },

    {
      id: "findings",
      title: "Key Findings",
      type: "findings",
      content: [
        {
          type: "text",
          data: "<h3>Finding 1: Manual queue management</h3><p>Lab staff manually added \u201Cchildren\u201D samples to queues \u2014 a repetitive task that could be automated through barcode scanning. Every manual entry was a potential error.</p>",
        },
        {
          type: "text",
          data: "<h3>Finding 2: Broken system integrations</h3><p>The integration between Bioanalyzer and LabVantage was incomplete. System-generated codes weren\u2019t automatically added to cases, forcing manual data reconciliation.</p>",
        },
        {
          type: "text",
          data: "<h3>Finding 3: Disconnected pathology reports</h3><p>Path report PDFs weren\u2019t linked to case details in the system. Staff had to retrieve reports from LIMS separately, losing context and time during pathologist review.</p>",
        },
        {
          type: "text",
          data: "<h3>Finding 4: Tube-label mismatch risk</h3><p>Manual matching between cycles of data (tubes vs. labels) during micro dissection created a high-risk error point. Scanning before and after processing had no valid time window for \u201Cundo\u201D operations.</p>",
        },
        {
          type: "text",
          data: "<h3>Finding 5: Historical scanning gaps</h3><p>Historical scanning of all tissue samples lacked consistent records, making it difficult to trace case history. Scanning samples initiated lab workflows and retrieved case info, but this process wasn\u2019t standardized.</p>",
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
            text: "Design for the physical choreography of the lab. Technicians move between stations, scanners, and microscopes \u2014 the system has to meet them where they work, not pull them to a screen.",
            attribution: "Design principle",
          },
        },
        {
          type: "text",
          data: "<p><strong>What we built:</strong> A unified system replacing spreadsheets and manual tracking across all five histopathology stages. The new workflow automated queue management through barcode scanning, linked pathology reports directly to case records, and consolidated LabVantage and Philips touchpoints into a coherent experience.</p>",
        },
        {
          type: "list",
          data: {
            title: "Key design decisions",
            items: [
              "Scan-driven workflow \u2014 barcode scanning triggers automatic queue placement and case retrieval, eliminating manual entry",
              "Integrated pathology reports \u2014 path report PDFs linked directly to case details, leveraging document management",
              "Automated code generation \u2014 system-generated codes added to cases automatically, closing the Bioanalyzer-LV gap",
              "Undo-safe scanning \u2014 defined valid time windows for scan corrections during micro dissection",
              "Branch-aware UI \u2014 interface adapts based on whether the sample follows the slides or blocks path after sectioning",
            ],
          },
        },
      ],
    },

    {
      id: "validation",
      title: "Validation & UAT",
      type: "validation",
      content: [
        {
          type: "text",
          data: "<p><strong>Testing approach:</strong> Conducted user acceptance testing (UAT) with lab technicians, pathologists, and micro dissection specialists using the actual system in their lab environments. Tested each workflow stage with real tissue processing scenarios.</p>",
        },
        {
          type: "text",
          data: "<p><strong>What we validated:</strong> The scan-driven workflow reduced manual entry points. Integrated pathology reports eliminated the context-switching overhead of retrieving reports from LIMS. The branch-aware interface correctly guided users through slides vs. blocks paths without confusion.</p>",
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
              "Replaced spreadsheets and manual tracking across all 5 histopathology stages",
              "Consolidated LabVantage and Philips interactions into a unified workflow",
              "Eliminated manual queue management through scan-driven automation",
              "Linked pathology reports directly to case records, removing retrieval overhead",
            ],
          },
        },
        {
          type: "list",
          data: {
            title: "Qualitative impact",
            items: [
              "Reduced error risk at tube-label matching and sample handoff points",
              "Standardized scanning and tracking across the full tissue processing pipeline",
              "Lab staff no longer context-switch between disconnected systems for a single case",
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
          data: "<p><strong>What I learned:</strong> Lab workflows are deeply physical. You can\u2019t redesign a histopathology pipeline from a conference room \u2014 you have to stand next to the microtome, watch the staining process, and see where the technician reaches for a spreadsheet because the system doesn\u2019t support what they need. The shadowing sessions were the most valuable research investment in this project.</p>",
        },
        {
          type: "text",
          data: "<p><strong>What I\u2019d do differently:</strong> I would have mapped the full systems architecture (LV, Philips, Bioanalyzer, LIMS) earlier in discovery. Some integration constraints surfaced late and required design rework that could have been anticipated.</p>",
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
    "Lead Designer & Researcher \u2014 contextual inquiry, workflow mapping, pain point analysis, system design, UAT facilitation",

  tags: [
    "Healthcare UX",
    "Lab operations",
    "Histopathology",
    "Workflow automation",
    "Contextual inquiry",
    "Genetic testing",
  ],
};
