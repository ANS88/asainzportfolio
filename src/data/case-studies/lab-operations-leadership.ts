import type { CaseStudy } from "@/types/case-study";

export const labOperationsLeadership: CaseStudy = {
  slug: "lab-operations-leadership",
  title: "Building Design for Lab Operations",
  shortTitle: "From first designer to a design practice across Natera's entire lab pipeline",
  stakesLine:
    "Natera had no design function for lab operations — no researcher, no design system, no seat in product reviews. I built it: embedded ethnographic research across accessioning, sequencing, histopathology, and clinical review; shipped the tools that replaced LabVantage + Philips IntelliSite + 2 internal dashboards; grew the team from solo designer to an embedded practice across wet and dry lab squads.",
  metaDescription:
    "How I built the design practice for Natera's lab operations from scratch — across wet lab execution and dry lab analysis — growing the team while shipping tools for 50+ labs.",
  judgment:
    "Built the design function and the products simultaneously — you can't wait for a mature team to start shipping, and you can't ship without understanding the domain deeply enough to earn trust",
  role: "Design Lead, Lab Operations",
  timeline: "2023–2025",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",
  previewImage: "/images/case-studies/lab-operations-leadership/team-structure.svg",
  previewCrop: { position: "50% 55%", scale: 1.6 },

  impact: [
    { value: "3.5M+", metric: "Tests reported per year across lab operations" },
    { value: "50+", metric: "Labs served by tools I designed" },
    { value: "4→1", metric: "Legacy systems consolidated in clinical review" },
    { value: "50%", metric: "Reduction in report turnaround time" },
  ],

  tags: ["Design Leadership", "Internal Tooling", "Lab Operations", "Regulated Design", "Team Building", "Ethnography"],

  sections: [
    {
      id: "two-domains",
      title: "Two worlds, one pipeline",
      type: "context",
      content: [
        {
          type: "image",
          data: {
            src: "/images/case-studies/lab-operations-leadership/pipeline-flow.svg",
            alt: "Wet lab to dry lab pipeline: accessioning through sequencing through variant interpretation to clinical report",
          },
        },
        {
          type: "text",
          data: `<p>Wet lab: accessioning, DNA extraction, library prep, sequencing, histopathology — technicians in gloves processing physical samples where a tube mislabel or a tissue cross-contamination affects a patient's diagnosis. Dry lab: bioinformatics pipelines, variant calling, pathogenicity classification, clinical report generation — genetic counselors and clinical scientists making interpretive decisions under cognitive load where a missed CNV or a misclassified VUS reaches a clinician. A contaminated sample in accessioning produces noisy sequencing data that the variant caller flags as ambiguous — the dry lab analyst wastes 30 minutes investigating an artifact that started at the bench.</p>`,
        },
      ],
    },

    {
      id: "go-to-the-lab",
      title: "Go to the lab",
      type: "leadership",
      content: [
        {
          type: "image",
          data: {
            src: "/images/case-studies/lab-operations-leadership/ethnography.svg",
            alt: "Conference room research versus in-lab ethnography: shadowing full shifts across accessioning, QC, and histopathology",
          },
        },
        {
          type: "text",
          data: `<p>Natera had never embedded a designer in a lab. Research happened through interviews and screen recordings — but lab technicians describe their work in terms of the LabVantage screens they've memorized, not the workflow they actually need. I ran 6+ full-shift shadowing sessions across accessioning, histopathology, and QC labs. Key finding: the barcode scanner was the physical anchor of the workflow — every process step was organized around scan-confirm cycles, but the software treated scans as data input rather than navigation events. That single observation restructured how we designed the histopathology pipeline interface. Once lab directors saw that product-side people understood glove changes, centrifuge timing, and bench-to-screen transitions, the quality of their feedback shifted from "the system is fine" to "here's what we actually work around."</p>`,
        },
      ],
    },

    {
      id: "map-the-system",
      title: "Map the system, not the screen",
      type: "leadership",
      content: [
        {
          type: "image",
          data: {
            src: "/images/case-studies/lab-operations-leadership/four-to-one.svg",
            alt: "Four legacy systems — variant review tool, report generator, QC dashboard, tracking spreadsheet — consolidated into unified Clinical Review",
          },
        },
        {
          type: "text",
          data: `<p>Clinical Review came in as a UI polish request for the variant review tool. Discovery across 3 divisions and 15 end users revealed the real problem: clinical scientists were switching between four applications per case — a variant review tool, a report generation system, a QC dashboard, and a lab tracking spreadsheet — copying patient identifiers between tabs and mentally stitching together context that should have been in one view. I mapped the review process as a distributed cognition problem using contextual inquiry data from 2,000+ hours of accumulated observation. The reframe turned a usability audit into a platform investment: one unified tool, 88 SUS score, 50% reduction in turnaround time, 3.5M+ tests reported through it annually.</p>`,
        },
      ],
    },

    {
      id: "build-the-team",
      title: "Build the team while shipping the work",
      type: "leadership",
      content: [
        {
          type: "text",
          data: `<p>No design function, no process, no seat at product review. Every hire had to ship within their first month — proving design's value through output, not through maturity-model presentations to leadership.</p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/lab-operations-leadership/hiring-journey.svg",
            alt: "Phase 1: solo, audit and ship. Phase 2: first hires, split wet/dry lab. Phase 3: embedded practice with research, cross-domain reviews",
          },
        },
        {
          type: "text",
          data: `<h4>Hiring for domain, not just craft</h4>
<p>Lab operations design requires comfort with CLIA/CAP-regulated environments, physical-digital handoffs, and users who can't pause a centrifuge cycle to explain what's wrong. I hired for curiosity about clinical workflows and tolerance for ambiguity — every new designer spent their first two weeks shadowing in the lab, not in Figma. Portfolio polish was the wrong signal; the ability to sit through a 6-hour accessioning shift and map what they saw was the right one.</p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/lab-operations-leadership/team-structure.svg",
            alt: "Designers embedded in wet lab and dry lab engineering squads, connected by shared design system, research ops, critique rituals",
          },
        },
        {
          type: "text",
          data: `<h4>Embedded in squads, connected through practice</h4>
<p>Wet lab designers sit in the histopathology and QC engineering squads; dry lab designers embed with clinical review and portal teams. They attend standups, read PRs, and understand the Vue.js component constraints firsthand. Cross-domain design reviews catch handoff problems — like when a wet lab scan-confirm redesign broke the data structure that dry lab reporting depended on — that siloed teams miss. A shared design system keeps visual language coherent across tools that the same lab tech uses back-to-back throughout their shift.</p>`,
        },
      ],
    },

    {
      id: "what-shipped",
      title: "What shipped",
      type: "impact",
      content: [
        {
          type: "list",
          data: {
            title: "Dry lab",
            items: [
              "Clinical Review — unified variant review, report generation, and QC in one platform; replaced 4 legacy systems; 50% reduction in report turnaround time; 88 SUS score; 3.5M+ tests/year",
              "Variant interpretation workflows redesigned around distributed cognition model — reduced context-switching from 4 tabs to 1 view per case",
            ],
          },
        },
        {
          type: "list",
          data: {
            title: "Wet lab",
            items: [
              "Histopathology workflow — tissue validation, macro dissection, slide scanning, micro dissection, QC — 5 stages redesigned end-to-end around barcode-scan navigation; consolidated LabVantage and Philips IntelliSite into unified interface",
              "In-lab ethnography established as standard methodology — full-shift shadowing protocol adopted across lab-facing product teams",
            ],
          },
        },
        {
          type: "list",
          data: {
            title: "Across both",
            items: [
              "Unified Patient Portal — 181K patient accounts, 100% Women's Health patients viewed results; built using 21st Century Cures Act compliance mandate as strategic leverage",
              "Design practice built from zero — embedded across wet and dry lab squads with shared design system, cross-domain critique rituals, and ethnographic research ops",
            ],
          },
        },
      ],
    },
  ],

  myRole: "Design Lead — sole designer growing into team lead across wet lab and dry lab operations",
  owned: "Design strategy, ethnographic research methodology, hiring and team structure, end-to-end product design across Clinical Review, histopathology, patient portal, and lab operations tooling",
};
