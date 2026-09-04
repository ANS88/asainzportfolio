import { nateraClinicalReview } from "./natera-clinical-review";
import { perimenopauseTracking } from "./perimenopause-tracking";
import { unifiedPatientPortal } from "./unified-patient-portal";
import { identityPortal } from "./identity-portal";
import { histopathologyWorkflow } from "./histopathology-workflow";
import { aiDesignPractice } from "./ai-design-practice";
import { labOperationsLeadership } from "./lab-operations-leadership";
import { clinicalTrialScreening } from "./clinical-trial-screening";
import type { CaseStudy } from "@/types/case-study";

export const caseStudies: Record<string, CaseStudy> = {
  "natera-clinical-review": nateraClinicalReview,
  "perimenopause-tracking": perimenopauseTracking,
  "unified-patient-portal": unifiedPatientPortal,
  "histopathology-workflow": histopathologyWorkflow,
  "identity-portal": identityPortal,
  "ai-design-practice": aiDesignPractice,
  "lab-operations-leadership": labOperationsLeadership,
  "clinical-trial-screening": clinicalTrialScreening,
};

export const caseStudyList: CaseStudy[] = Object.values(caseStudies);
