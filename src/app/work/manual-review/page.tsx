import CaseStudy from "@/components/CaseStudy";
import type { CaseStudyData } from "@/components/CaseStudy";
import ContactBlock from "@/components/ContactBlock";

const data: CaseStudyData = {
  // The Hook
  title: "Manual Clinical Review Workflow Redesign",
  stakes:
    "When genetic test reports are delayed, treatment decisions are delayed. I redesigned the workflow that determines how fast 585,000 patients per year get their results.",
  role: "Lead UX Researcher",
  timeline: "Cross-functional team \u00b7 Discovery to launch (2024\u20132025)",
  metrics: [
    { value: "50% reduction in turnaround time" },
    { value: "585,000 reports/year affected" },
    { value: "Single tool replaced 4 legacy systems" },
    { value: "Positive usability scores from genetic counselors and lab directors" },
  ],

  // Context & Challenge
  problem:
    "In 2024, Natera delivered 2.9 million genetic testing results. 20% (585,000 reports) required manual review by genetic counselors and lab directors before reaching patients. The existing workflow was fragmented across multiple tools, creating delays that directly affected patient care timelines.",
  whyItMatters:
    "In prenatal genetic testing, a delayed result can mean a delayed decision about pregnancy management. In oncology, it can affect treatment timing. The review workflow isn\u2019t just operational efficiency \u2014 it\u2019s clinical impact.",
  constraint:
    "Design for expert users (genetic counselors, lab directors) in a regulated environment where accuracy cannot be compromised for speed. Every workflow change needed clinical validation.",

  // Research Approach
  whatIDid:
    "I led discovery with 15 end-users, 8 subject matter experts, and 6 department leaders across Natera\u2019s women\u2019s health, oncology, and organ health divisions.",
  methods: [
    "2,000+ hours of contextual inquiry and live shadowing with genetic counselors and lab directors in their actual work environments",
    "Thematic analysis of interview transcripts to identify workflow pain points",
    "Cross-functional vision workshop to align stakeholders on goals and constraints",
    "Distributed cognition framework analysis to map how information flows across people, tools, and environments",
  ],
  methodologyNote: {
    title: "Why distributed cognition",
    description:
      "Clinical workflows don\u2019t exist in individual heads \u2014 they\u2019re distributed across multiple people, tools, and handoffs. The framework helped me identify where cognitive load was unnecessarily high and where system design was compensating for (or creating) workflow friction.",
  },

  // Key Findings
  findings: [
    {
      title: "Underutilized expertise",
      description:
        "Genetic counselors were spending time on repetitive administrative tasks rather than complex clinical decisions. Their domain expertise was being wasted on workflow friction.",
    },
    {
      title: "Error-prone handoffs",
      description:
        "The transition point between genetic counselor review and lab director approval had no automated validation. Manual handoffs created risk of errors that could affect patient results.",
    },
    {
      title: "Role confusion",
      description:
        "Users didn\u2019t have clear visibility into what tasks were theirs versus someone else\u2019s. This created duplicate work and missed handoffs.",
    },
    {
      title: "Context switching",
      description:
        "Reviewers toggled between 4 different tools to complete a single review. Each context switch increased cognitive load and time to completion.",
    },
  ],

  // Design Strategy
  designPrinciple:
    "Design for the expert user\u2019s mental model, not the system\u2019s data model. Genetic counselors think in terms of clinical cases, not database records.",
  whatWeBuilt:
    "A unified review interface with role-specific queues, automated validations at handoff points, and consolidated case views that eliminated the need for multiple tools.",
  designDecisions: [
    { title: "Queue-based workflow", description: "cases route automatically based on type and status" },
    { title: "Progressive disclosure", description: "show only information relevant to the current decision" },
    { title: "Built-in validations", description: "prevent incomplete handoffs before they happen" },
    { title: "Role-based permissions", description: "genetic counselors and lab directors see different views of the same case" },
  ],
  personas: [
    { role: "Genetic Counselor", description: "high-volume review, needs efficiency and accuracy" },
    { role: "Lab Director", description: "final approval, needs oversight and audit trail" },
  ],

  // Validation
  testingApproach:
    "Conducted iterative usability testing throughout the design process, not just at the end. Tested with actual genetic counselors and lab directors using real case examples.",
  whatWeLearned:
    "Early prototypes assumed too much knowledge of the new system. We added contextual help and status indicators that made the workflow learnable without formal training.",
  uatResults:
    "Positive usability scores from both user groups. Genetic counselors reported the new workflow felt \u201clike it was designed for how we actually work.\u201d",

  // Impact
  quantitativeImpact: [
    "50% reduction in report turnaround time",
    "4 legacy systems replaced with 1 unified tool",
    "585,000 reports/year processed through the new workflow",
  ],
  qualitativeImpact: [
    "Higher user satisfaction from counselors and lab directors",
    "Reduced training time for new hires",
    "Eliminated context-switching overhead",
  ],
  whatThisMeansForAI:
    "The next iteration of this workflow will integrate AI-assisted anomaly detection to flag cases that need closer review. The design challenge will be the same one I encountered here: how do we surface AI recommendations in a way that supports clinical judgment rather than replacing it? The handoff between algorithmic confidence and human expertise is the critical design problem.",

  // Reflection
  whatILearned:
    "Clinical workflows are rarely linear. The documented process and the actual process are often different, and the gap between them is where the design problems live. Shadowing users in their actual environment revealed pain points that interview data alone wouldn\u2019t have surfaced.",
  whatIdDoDifferently:
    "I would have involved lab leadership earlier in the design process. Some of the handoff logic we built had to be reworked because we didn\u2019t fully understand the approval hierarchy until later in the project.",
  nextSteps:
    "We\u2019re extending this unified review framework to other product lines and building analytics dashboards that give leadership real-time visibility into review bottlenecks.",

  // Footer
  team: "Product Manager, Product Designer, Engineering team (Serbia-based)",
  myRole: "Lead UX Researcher \u2014 discovery, synthesis, persona development, workflow mapping, usability testing",
  timelineDetail: "2024\u20132025 (Discovery to launch and adoption tracking)",
};

export default function ManualReviewCaseStudy() {
  return (
    <>
      <div className="container">
        <CaseStudy data={data} />
      </div>
      <ContactBlock />
    </>
  );
}
