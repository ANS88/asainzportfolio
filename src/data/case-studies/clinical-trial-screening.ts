import type { CaseStudy } from "@/types/case-study";

export const clinicalTrialScreening: CaseStudy = {
  slug: "clinical-trial-screening",
  title: "Clinical Trial Patient Screening",
  shortTitle: "AI-assisted patient matching for oncology clinical trials",
  stakesLine:
    "Too many patients to review manually — nurses are finding needles in haystacks. Contracts require 48-hour turnaround from positive test to patient outreach, but the current process is entirely manual: five handoffs across Datamart, ClinicalIQ, ClinVerify, Salesforce, and site outreach. A single eligible patient takes an hour to screen. I designed an AI-assisted screening tool that scores patients by criteria match and confidence, cutting review volume by 80% and screening time in half.",
  metaDescription:
    "Designing an AI-powered clinical trial screening tool that matches oncology patients to trial criteria using EHR data — reducing screening time while keeping clinicians in control.",
  judgment:
    "The hardest design problem wasn't the AI — it was making the AI's reasoning legible enough for clinicians to trust, question, and override it",
  role: "Design Lead",
  timeline: "2024–2025",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",
  previewVideo: "/videos/clinical-trial-screening/walkthrough.mov",

  impact: [
    { value: "80%", metric: "Fewer patients to manually review" },
    { value: "30 min", metric: "Per eligible patient (was 1 hour)" },
    { value: "48h", metric: "SLA from positive test to outreach" },
    { value: "0→1", metric: "Product built from scratch" },
  ],

  tags: ["AI/ML", "Clinical Trials", "Internal Tooling", "Healthcare", "0→1"],

  sections: [
    {
      id: "the-problem",
      title: "Too many patients to review manually",
      type: "context",
      content: [
        {
          type: "text",
          data: `<p>Nurses are finding needles in haystacks. The existing screening pipeline is a five-step relay across disconnected systems, and every step is manual.</p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/clinical-trial-screening/current-process.png",
            alt: "Current 5-step manual screening process: Datamart Alert, ClinicalIQ Data Extraction, ClinVerify Record Review, Salesforce Update, and Site Outreach",
            caption: "The existing process — five manual handoffs from LIMS alert to site outreach, with the bottlenecks at steps 2 and 3",
          },
        },
        {
          type: "list",
          data: {
            title: "The pipeline before Trial Pilot",
            items: [
              "Datamart Alert — LIMS patients filtered by trial inclusion/exclusion criteria",
              "ClinicalIQ Data Extraction — all patients extracted and exported to CSV for manual I/E filtering to eliminate obvious ineligibles",
              "ClinVerify Record Review — patients assigned to nurses to screen: 3–4 minutes for ineligible patients, 1 hour for potentially eligible patients",
              "Salesforce Update — eligible and ineligible patients documented in Salesforce with I/E criteria notes",
              "Site Outreach — nurse navigator emails clinic/site with potentially eligible patients",
            ],
          },
        },
        {
          type: "text",
          data: `<p>The math doesn't work. Contracts require 48-hour turnaround from positive test to patient outreach. As clinical trial volume grows, manual filtering doesn't scale. The current process is the bottleneck to revenue growth — and the gap between identified patients and enrolled patients keeps widening.</p>`,
        },
      ],
    },

    {
      id: "the-solution",
      title: "Optimize ClinVerify for clinical trial screening",
      type: "design",
      content: [
        {
          type: "text",
          data: `<p>Rather than building a new system from scratch, the approach was to optimize ClinVerify — the record review tool nurses already used — for clinical trial screening specifically. The design focused on three levers:</p>`,
        },
        {
          type: "list",
          data: {
            title: "Three design levers",
            items: [
              "Filter by extracted data (not just LIMS data) to dramatically reduce the number of patients to review",
              "Score patients by criteria match and confidence so nurses review best candidates first",
              "Streamline in-record review for I/E criteria only, removing unnecessary clinical events",
            ],
          },
        },
        {
          type: "text",
          data: `<p>Target: 80% fewer patients to review. 30 minutes per eligible patient vs 1 hour. Fast enough to meet the 48-hour SLA without adding headcount.</p>`,
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
          data: `<p>The design challenge wasn't building an AI that could match patients to criteria. It was building one that nurses would trust enough to change how they work.</p>`,
        },
        {
          type: "text",
          data: `<p>Healthcare professionals have earned skepticism toward AI tools. They've seen systems that promise automation and deliver noise — black-box outputs with no way to verify the reasoning, confidence scores with no evidence trail, recommendations that don't account for the messy reality of patient records. The failure mode isn't that nurses reject the tool outright. It's that they use it as a secondary check and keep doing the manual work anyway — meaning the tool adds time instead of saving it.</p>`,
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
          data: `<p>The core workflow moves patients through a pipeline: <strong>Identified → Review → Eligible / Ineligible / Watch and Wait</strong>. The AI does the initial scan — filtering by extracted data, matching diagnoses and staging, evaluating inclusion criteria, ranking by confidence. The nurse does the judgment — reviewing evidence, resolving unknowns, making the call.</p>`,
        },
        {
          type: "video",
          data: {
            src: "/videos/clinical-trial-screening/walkthrough.mov",
            caption: "Trial Pilot prototype walkthrough — from patient queue to criteria review to evidence verification",
            autoplay: true,
          },
        },
        {
          type: "list",
          data: {
            title: "The pipeline in three stages",
            items: [
              "Triage — AI scans patient records against trial profile, surfaces candidates ranked by match confidence. Nurses see the queue, filter by site and confidence, and pick where to start.",
              "Review — For each patient, every inclusion criterion shows Match / Not a Match / Unknown, with links to the source document and passage. The nurse confirms, overrides, or investigates the unknowns.",
              "Decision — When all criteria are resolved, the nurse marks eligibility. The tool tracks the audit trail: who decided, when, based on what evidence.",
            ],
          },
        },
        {
          type: "text",
          data: `<p>The key design decision: the AI never makes the eligibility call. It does the chart review. The nurse makes the clinical judgment. This isn't a philosophical stance — it's a regulatory requirement and a trust requirement. The tool is useful precisely because it respects that boundary.</p>`,
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
          data: `<p>The most important screen in the tool isn't the patient queue. It's the criteria review panel — where a nurse sees why the AI thinks a patient matches (or doesn't) each inclusion criterion.</p>`,
        },
        {
          type: "video",
          data: {
            src: "/videos/clinical-trial-screening/walkthrough-2.mov",
            caption: "Evidence review — verifying AI matches against source documents inline",
            autoplay: true,
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/clinical-trial-screening/next-steps.png",
            alt: "Patient record review showing inclusion criteria matched against evidence, with a clinical progress note open in the document panel",
            caption: "The in-record review streamlined for I/E criteria — each match links to the source document, opened inline for verification",
          },
        },
        {
          type: "text",
          data: `<p>Each criterion shows its status (Match, Not a match, Unknown) alongside the evidence: a link to the source document, the relevant passage highlighted, and a confidence indicator. If the AI found a Signatera report showing ctDNA positive at 5.0 MTM/mL, the nurse sees the report, sees the value, and can click through to the full document. If a criterion is marked Unknown, the nurse knows exactly what's missing and where to look.</p>`,
        },
        {
          type: "text",
          data: `<p>This evidence-first pattern drove every design decision downstream. The patient summary pulls from pathology reports, genomic tests, radiology, and clinical notes — not as a dashboard of extracted values, but as a navigable trail of source documents. The nurse never has to wonder "where did this data come from?" because the answer is always one click away.</p>`,
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
          data: `<p>A patient isn't a set of inclusion criteria. Nurses need clinical context to make good eligibility decisions — treatment history, imaging timeline, genomic alterations, adverse events. The patient summary panel assembles this context from across the EHR, organized by clinical relevance rather than document type.</p>`,
        },
        {
          type: "list",
          data: {
            title: "Patient context, structured for decision-making",
            items: [
              "Diagnosis and staging — cancer type, stage group, date of diagnosis, morphology, primary site",
              "Treatment timeline — surgery, chemotherapy (FOLFOX, Pembrolizumab), radiation, with dates and outcomes",
              "Genomic profile — Signatera ctDNA status, NGS panel results (KRAS wild-type, MSI status), genomic alterations",
              "Clinical events — streamlined for I/E criteria only, removing unnecessary events to reduce noise",
              "Source documents — every data point links back to the pathology report, radiology report, or clinical note it came from",
            ],
          },
        },
      ],
    },

    {
      id: "what-shipped",
      title: "Impact & opportunity",
      type: "impact",
      content: [
        {
          type: "text",
          data: `<p>Faster screening unlocks scalability — the ability to grow clinical trial volume without headcount growth, while protecting the 48-hour SLA as volume increases.</p>`,
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/clinical-trial-screening/impact-opportunity.png",
            alt: "Impact across four stakeholders: Natera (new revenue stream), Life Science Partners (faster enrollment), Providers (patient access to trials), Patients (faster outreach, better outcomes)",
            caption: "Value created across four stakeholders — from Natera's revenue growth to faster patient access to clinical trials",
          },
        },
        {
          type: "list",
          data: {
            title: "Outcomes",
            items: [
              "80% fewer patients to manually review — filtering by extracted data instead of manual CSV triage",
              "30 minutes per eligible patient, down from 1 hour — streamlined in-record review for I/E criteria only",
              "Protects the 48-hour SLA from positive test to patient outreach as trial volume scales",
              "Expanded from single-trial pilot to multi-trial platform architecture",
            ],
          },
        },
        {
          type: "list",
          data: {
            title: "Value across stakeholders",
            items: [
              "Natera — scale to more clinical trials as a new revenue stream; continued validation of cfDNA technology as clinical trial endpoint",
              "Life Science Partners — faster patient identification accelerates trial enrollment timelines",
              "Providers — Natera helps their patients access clinical trials",
              "Patients — faster outreach leads to potentially better outcomes",
            ],
          },
        },
      ],
    },
  ],

  myRole: "Design Lead — owned end-to-end product design from research through shipped tool across nine cancer centers",
  owned: "Product design, research, workflow design, and clinical stakeholder alignment for AI-assisted trial screening",
};
