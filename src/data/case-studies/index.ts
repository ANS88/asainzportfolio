import { nateraClinicalReview } from "./natera-clinical-review";
import { perimenopauseTracking } from "./perimenopause-tracking";
import { unifiedPatientPortal } from "./unified-patient-portal";
import { identityPortal } from "./identity-portal";
import { histopathologyWorkflow } from "./histopathology-workflow";
import type { CaseStudy } from "@/types/case-study";

export const caseStudies: Record<string, CaseStudy> = {
  "natera-clinical-review": nateraClinicalReview,
  "perimenopause-tracking": perimenopauseTracking,
  "unified-patient-portal": unifiedPatientPortal,
  "histopathology-workflow": histopathologyWorkflow,
  "identity-portal": identityPortal,
};

export const caseStudyList: CaseStudy[] = Object.values(caseStudies);
