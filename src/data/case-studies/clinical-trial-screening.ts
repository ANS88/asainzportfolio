import type { CaseStudy } from "@/types/case-study";

export const clinicalTrialScreening: CaseStudy = {
  slug: "clinical-trial-screening",
  title: "Clinical Trial Patient Screening",
  shortTitle: "AI-assisted patient matching for oncology clinical trials",
  stakesLine:
    "Clinical trial enrollment is slow because screening is manual. Coordinators sift through EHR records — pathology reports, genomic tests, clinical notes — one patient at a time, checking each against pages of inclusion and exclusion criteria. Most eligible patients are never identified. I designed an AI-assisted screening tool that surfaces matched patients with evidence, so coordinators spend their time on clinical judgment instead of chart review.",
  metaDescription:
    "Designing an AI-powered clinical trial screening tool that matches oncology patients to trial criteria using EHR data — reducing screening time while keeping clinicians in control.",
  judgment:
    "The hardest design problem wasn't the AI — it was making the AI's reasoning legible enough for clinicians to trust, question, and override it",
  role: "Design Lead",
  timeline: "2024–2025",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",
  previewImage: "/images/case-studies/clinical-trial-screening/patient-queue.png",

  impact: [
    { value: "50%", metric: "Reduction in patient-to-match time" },
    { value: "9", metric: "Cancer centers in pilot" },
    { value: "0→1", metric: "Product built from scratch" },
    { value: "0", metric: "False eligibility decisions in pilot" },
  ],

  tags: ["AI/ML", "Clinical Trials", "Internal Tooling", "Healthcare", "0→1"],

  sections: [
    {
      id: "the-problem",
      title: "The bottleneck nobody talks about",
      type: "context",
      content: [
        {
          type: "text",
          data: `<p>Clinical trials need patients. Patients need trials. The gap between them is a clinical research coordinator with a spreadsheet, manually reviewing medical records against a checklist of inclusion and exclusion criteria. For a single oncology trial, a coordinator might review hundreds of patient charts to find a handful of eligible candidates.</p>`,
        },
        {
          type: "text",
          data: `<p>The work is tedious, error-prone, and slow. It requires reading across pathology reports, genomic test results, radiology imaging, clinical notes, and lab panels — then mentally cross-referencing each against criteria like "Stage II/III colon adenocarcinoma with positive ctDNA after adjuvant chemotherapy." A single missed document can mean a missed patient. A misread criterion can mean an ineligible enrollment.</p>`,
        },
        {
          type: "text",
          data: `<p>Natera's genomic testing data — especially ctDNA results from Signatera — already contained strong signals for trial eligibility. The question was whether we could build a tool that used those signals, combined with EHR data, to do the screening work that coordinators were doing by hand.</p>`,
        },
      ],
    },

    {
      id: "design-challenge",
      title: "AI that clinicians will actually use",
      type: "context",
      content: [
        {
          type: "text",
          data: `<p>The design challenge wasn't building an AI that could match patients to criteria. It was building one that clinical research coordinators would trust enough to change how they work.</p>`,
        },
        {
          type: "text",
          data: `<p>Healthcare professionals have earned skepticism toward AI tools. They've seen systems that promise automation and deliver noise — black-box outputs with no way to verify the reasoning, confidence scores with no evidence trail, recommendations that don't account for the messy reality of patient records. The failure mode isn't that coordinators reject the tool outright. It's that they use it as a secondary check and keep doing the manual work anyway — meaning the tool adds time instead of saving it.</p>`,
        },
        {
          type: "text",
          data: `<p>The design had to solve for trust, not just efficiency. Every AI suggestion needed to show its work. Every match needed to trace back to a specific document, a specific passage. And the workflow had to make it faster to verify the AI's reasoning than to start from scratch.</p>`,
        },
      ],
    },

    {
      id: "workflow",
      title: "From queue to decision",
      type: "design",
      content: [
        {
          type: "text",
          data: `<p>The core workflow moves patients through a pipeline: <strong>Identified → Review → Eligible / Ineligible / Watch and Wait</strong>. The AI does the initial scan — connecting to EHR data sources, matching diagnoses and staging, evaluating inclusion criteria, ranking by confidence. The coordinator does the judgment — reviewing evidence, resolving unknowns, making the call.</p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/clinical-trial-screening/patient-queue.png",
            alt: "Patient queue showing candidates ranked by AI confidence, with inclusion match scores, status filters, and events to review across multiple cancer centers",
            caption: "The patient queue surfaces AI-matched candidates ranked by confidence — coordinators filter by site, status, and urgency to decide where to start",
          },
        },
        {
          type: "list",
          data: {
            title: "The pipeline in three stages",
            items: [
              "Triage — AI scans patient records against trial profile, surfaces candidates ranked by match confidence. Coordinators see the queue, filter by site and confidence, and pick where to start.",
              "Review — For each patient, every inclusion criterion shows Match / Not a Match / Unknown, with links to the source document and passage. The coordinator confirms, overrides, or investigates the unknowns.",
              "Decision — When all criteria are resolved, the coordinator marks eligibility. The tool tracks the audit trail: who decided, when, based on what evidence.",
            ],
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/clinical-trial-screening/events-review.png",
            alt: "Events to Review tab showing AI-extracted clinical events with source documents, review status, and structured data from pathology reports",
            caption: "The review step: AI-extracted clinical events shown with structured data and source documents — coordinators mark each as reviewed",
          },
        },
        {
          type: "text",
          data: `<p>The key design decision: the AI never makes the eligibility call. It does the chart review. The coordinator makes the clinical judgment. This isn't a philosophical stance — it's a regulatory requirement and a trust requirement. The tool is useful precisely because it respects that boundary.</p>`,
        },
      ],
    },

    {
      id: "evidence-first",
      title: "Show the receipts",
      type: "design",
      content: [
        {
          type: "text",
          data: `<p>The most important screen in the tool isn't the patient queue. It's the criteria review panel — where a coordinator sees why the AI thinks a patient matches (or doesn't) each inclusion criterion.</p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/clinical-trial-screening/criteria-review.png",
            alt: "Inclusion/exclusion criteria panel showing each criterion with Match or Unknown status, linked evidence documents, and coordinator notes",
            caption: "Each inclusion criterion shows its AI-determined status — Match, Not a Match, or Unknown — with direct links to the source evidence",
          },
        },
        {
          type: "text",
          data: `<p>Each criterion shows its status (Match, Not a match, Unknown) alongside the evidence: a link to the source document, the relevant passage highlighted, and a confidence indicator. If the AI found a Signatera report showing ctDNA positive at 5.0 MTM/mL, the coordinator sees the report, sees the value, and can click through to the full document. If a criterion is marked Unknown, the coordinator knows exactly what's missing and where to look.</p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/clinical-trial-screening/evidence-panel.png",
            alt: "Split view showing inclusion criteria on the left and the source pathology report on the right, with diagnosis details visible in both",
            caption: "Clicking an evidence link opens the source document inline — the coordinator verifies the AI's reasoning without leaving the screen",
          },
        },
        {
          type: "text",
          data: `<p>This evidence-first pattern drove every design decision downstream. The patient summary pulls from pathology reports, genomic tests, radiology, and clinical notes — not as a dashboard of extracted values, but as a navigable trail of source documents. The coordinator never has to wonder "where did this data come from?" because the answer is always one click away.</p>`,
        },
      ],
    },

    {
      id: "patient-context",
      title: "The whole patient, not just the match",
      type: "design",
      content: [
        {
          type: "text",
          data: `<p>A patient isn't a set of inclusion criteria. Coordinators need clinical context to make good eligibility decisions — treatment history, imaging timeline, genomic alterations, adverse events. The patient summary panel assembles this context from across the EHR, organized by clinical relevance rather than document type.</p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/clinical-trial-screening/patient-detail.png",
            alt: "Patient detail view showing treatment timeline with chemotherapy and immunotherapy events, AI-generated patient summary, and inclusion criteria with evidence links",
            caption: "The patient view assembles treatment timeline, AI-generated summary, and criteria status — giving coordinators the full clinical picture in one screen",
          },
        },
        {
          type: "list",
          data: {
            title: "Patient context, structured for decision-making",
            items: [
              "Diagnosis and staging — cancer type, stage group, date of diagnosis, morphology, primary site",
              "Treatment timeline — surgery, chemotherapy (FOLFOX, Pembrolizumab), radiation, with dates and outcomes",
              "Genomic profile — Signatera ctDNA status, NGS panel results (KRAS wild-type, MSI status), genomic alterations",
              "Clinical events — recent encounters, follow-up visits, clinical notes from oncologists",
              "Source documents — every data point links back to the pathology report, radiology report, or clinical note it came from",
            ],
          },
        },
      ],
    },

    {
      id: "multi-site",
      title: "Nine sites, one workflow",
      type: "design",
      content: [
        {
          type: "text",
          data: `<p>The pilot spanned nine cancer centers — from Memorial Sloan Kettering to Stanford to MD Anderson. Each site has its own EHR configuration, its own documentation patterns, its own clinical workflows. A pathology report from Mayo Clinic doesn't look like one from Mass General.</p>`,
        },
        {
          type: "text",
          data: `<p>The design had to absorb this variation without forcing coordinators to care about it. The patient queue filters by site, but the patient view is consistent regardless of source. The evidence trail handles different document formats. The criteria matching works across EHR systems. The hard work of normalization happens behind the interface, not in front of it.</p>`,
        },
      ],
    },

    {
      id: "what-shipped",
      title: "What shipped",
      type: "impact",
      content: [
        {
          type: "text",
          data: `<p>Trial Pilot launched as an internal tool across nine NCI-designated cancer centers, focused initially on an oncology trial for Stage II/III colon adenocarcinoma with ctDNA-positive results (ABBVIE M24-534).</p>`,
        },
        {
          type: "list",
          data: {
            title: "Outcomes",
            items: [
              "50% reduction in time from patient results to trial matching — cutting the manual chart review that was the primary bottleneck",
              "Coordinators surfaced eligible candidates who would have been missed entirely in manual review",
              "Zero false eligibility decisions in pilot — the evidence-first design meant coordinators caught every AI error before it reached a patient",
              "Expanded from single-trial pilot to multi-trial platform architecture",
            ],
          },
        },
        {
          type: "text",
          data: `<p>The prototype validated a broader thesis: AI in clinical workflows works when it augments judgment rather than replacing it. The tool's value isn't that it's smarter than a coordinator — it's that it does the tedious retrieval work so coordinators can focus on the clinical reasoning they're trained for.</p>`,
        },
      ],
    },
  ],

  myRole: "Design Lead — owned end-to-end product design from research through shipped tool across nine cancer centers",
  owned: "Product design, research, workflow design, and clinical stakeholder alignment for AI-assisted trial screening",
};
