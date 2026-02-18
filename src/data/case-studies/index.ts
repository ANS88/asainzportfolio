import { nateraClinicalReview } from "./natera-clinical-review";
import { perimenopauseTracking } from "./perimenopause-tracking";
import type { CaseStudy } from "@/types/case-study";

export const caseStudies: Record<string, CaseStudy> = {
  "natera-clinical-review": nateraClinicalReview,
  "perimenopause-tracking": perimenopauseTracking,
};

export const caseStudyList: CaseStudy[] = Object.values(caseStudies);
