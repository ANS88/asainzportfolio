import { nateraClinicalReview } from "./natera-clinical-review";
import { perimenopauseTracking } from "./perimenopause-tracking";
import { unifiedPatientPortal } from "./unified-patient-portal";
import { identityPortal } from "./identity-portal";
import type { CaseStudy } from "@/types/case-study";

export const caseStudies: Record<string, CaseStudy> = {
  "natera-clinical-review": nateraClinicalReview,
  "perimenopause-tracking": perimenopauseTracking,
  "unified-patient-portal": unifiedPatientPortal,
  "identity-portal": identityPortal,
};

export const caseStudyList: CaseStudy[] = Object.values(caseStudies);
