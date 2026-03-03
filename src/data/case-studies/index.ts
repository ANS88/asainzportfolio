import { nateraClinicalReview } from "./natera-clinical-review";
import { perimenopauseTracking } from "./perimenopause-tracking";
import { unifiedPatientPortal } from "./unified-patient-portal";
import { identityPortal } from "./identity-portal";
import { histopathologyWorkflow } from "./histopathology-workflow";
import type { CaseStudy } from "@/types/case-study";

export const caseStudies: Record<string, CaseStudy> = {
  "unified-patient-portal": unifiedPatientPortal,
  "natera-clinical-review": nateraClinicalReview,
  "perimenopause-tracking": perimenopauseTracking,
  "identity-portal": identityPortal,
  "histopathology-workflow": histopathologyWorkflow,
};

export const caseStudyList: CaseStudy[] = Object.values(caseStudies);
