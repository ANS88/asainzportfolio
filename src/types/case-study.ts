export interface CaseStudy {
  // Meta
  slug: string;
  title: string;
  shortTitle?: string;

  // Above the fold
  stakesLine: string;
  judgment?: string;
  role: string;
  timeline: string;
  company: string;
  companyDescription?: string;

  // Impact metrics
  impact: {
    metric: string;
    value: string;
  }[];

  // Hero image
  heroImage?: {
    src: string;
    alt: string;
    caption?: string;
  };

  // Content sections
  sections: CaseStudySection[];

  // Footer
  team?: string[];
  myRole?: string;
  owned?: string;
  tags?: string[];
}

export interface CaseStudySection {
  id: string;
  title: string;
  type:
    | "context"
    | "research"
    | "findings"
    | "design"
    | "validation"
    | "impact"
    | "reflection"
    | "judgment"
    | "beyond";
  content: CaseStudySectionContent[];
}

export type CaseStudySectionContent =
  | { type: "text"; data: string }
  | { type: "image"; data: { src: string; alt: string; caption?: string } }
  | {
      type: "images";
      data: { src: string; alt: string; caption?: string }[];
    }
  | { type: "list"; data: { title?: string; items: string[] } }
  | { type: "quote"; data: { text: string; attribution?: string } }
  | { type: "metric"; data: { value: string; label: string } }
  | { type: "video"; data: { src: string; caption?: string; autoplay?: boolean } };
