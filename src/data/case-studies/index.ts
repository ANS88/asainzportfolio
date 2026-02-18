import { nateraClinicalReview } from "./natera-clinical-review";
import type { CaseStudy } from "@/types/case-study";

export const caseStudies: Record<string, CaseStudy> = {
  "natera-clinical-review": nateraClinicalReview,
  // Add more case studies here:
  // "cchmc-clinical-decision-support": cchmcCaseStudy,
  // "menopause-research": menopauseCaseStudy,
};

export const caseStudyList: CaseStudy[] = Object.values(caseStudies);
