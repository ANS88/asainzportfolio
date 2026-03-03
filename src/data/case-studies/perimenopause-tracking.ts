import type { CaseStudy } from "@/types/case-study";

export const perimenopauseTracking: CaseStudy = {
  slug: "perimenopause-tracking",
  title:
    "Charting the Waves of Perimenopause: A Diary Study on Digital Symptom Tracking",
  stakesLine:
    "Perimenopause is unpredictable — cycles shift, symptoms fluctuate, and clinical recognition often lags. I led a mixed-methods study with 40 women to understand how digital symptom tracking shapes self-management and clinical advocacy.",
  role: "Principal Investigator",
  timeline: "Discovery to reporting (Oct 2024 – Feb 2025)",
  company: "University of Cincinnati & Clue App",
  companyDescription: "Dissertation research",

  impact: [
    { value: "40", metric: "Participants enrolled" },
    { value: "1,977", metric: "Tracking events analyzed" },
    { value: "88.3", metric: "SUS usability score (benchmark: 68)" },
    { value: "CHI 2026", metric: "Manuscript in peer review" },
  ],

  sections: [
    {
      id: "context",
      title: "Context & Challenge",
      type: "context",
      content: [
        {
          type: "text",
          data: "<p>Perimenopause is unpredictable — cycles shift, symptoms fluctuate, and clinical recognition often lags. Symptom-tracking apps promise self-insight and better clinical conversations, yet prior evaluations show lower user satisfaction when tracking features dominate.</p>",
        },
        {
          type: "text",
          data: "<p><strong>Goal:</strong> Understand how people actually use Clue\u2019s perimenopause mode and surface design opportunities to improve engagement, usability, and clinical value.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/perimenopause-tracking/process.png",
            alt: "Research process overview for the perimenopause tracking diary study",
            caption: "Research process overview",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/perimenopause-tracking/processdetail.png",
            alt: "Detailed breakdown of the research process and methodology",
            caption: "Research process — detailed breakdown",
          },
        },
        {
          type: "list",
          data: {
            title: "Research questions",
            items: [
              "How does symptom tracking influence self-management of perimenopause?",
              "What benefits and limitations do users perceive in Clue\u2019s perimenopause mode?",
              "How does tracking affect health decisions and clinical encounters?",
              "What challenges or barriers deter continued use?",
            ],
          },
        },
      ],
    },

    {
      id: "research",
      title: "Research Approach",
      type: "research",
      content: [
        {
          type: "text",
          data: "<p><strong>Approach:</strong> Mixed-methods, two-week diary study with 40 U.S. Clue users (perimenopausal or menopausal, joined perimenopause mode in past 3 months).</p>",
        },
        {
          type: "list",
          data: {
            title: "Data collection",
            items: [
              "Daily symptom logs and reflective diary entries",
              "App analytics (1,977 tracking events from 16 fully-engaged participants)",
              "System Usability Scale (SUS) survey",
              "30-minute semi-structured exit interviews",
            ],
          },
        },
        {
          type: "list",
          data: {
            title: "Analysis",
            items: [
              "Qualitative: Thematic analysis (Braun & Clarke) of diaries and interviews",
              "Quantitative: Descriptive statistics and correlation analyses (R) of tracking data and SUS scores",
            ],
          },
        },
        {
          type: "text",
          data: "<p><strong>Ethics:</strong> IRB-approved, anonymous data, securely stored & destroyed post-study. Compensation: $50 Amazon gift card.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/perimenopause-tracking/research.png",
            alt: "Research approach diagram for the perimenopause diary study",
            caption: "Research approach overview",
          },
        },
      ],
    },

    {
      id: "findings",
      title: "Key Findings",
      type: "findings",
      content: [
        {
          type: "text",
          data: "<h3>Finding 1: Tracking as Validation & Advocacy</h3><p>Participants used logs as evidence in clinical visits. Tracking strengthened self-awareness and confidence — even when clinicians remained skeptical.</p>",
        },
        {
          type: "quote",
          data: {
            text: "My doctor wasn\u2019t listening... I needed to present a more holistic picture.",
            attribution: "P38, exit interview",
          },
        },
        {
          type: "text",
          data: "<h3>Finding 2: Two Distinct Tracking Styles</h3><p><strong>Daily Trackers:</strong> Consistent multi-category logging. <strong>Sporadic Trackers:</strong> Reactive logging during symptom spikes or before appointments.</p>",
        },
        {
          type: "text",
          data: "<h3>Finding 3: Interconnected Symptoms</h3><p>Correlation analysis revealed strong links among hot flashes, brain fog, mood swings, and sleep disruption. These symptoms rarely occurred in isolation, suggesting the need for holistic views rather than siloed metrics.</p>",
        },
        {
          type: "text",
          data: "<h3>Finding 4: High Usability, Shallow Insights</h3><p>Average SUS score of 88.3 (industry benchmark: 68). Users praised the interface but wanted customizable symptom categories, richer trend analysis, and integration with wearables.</p>",
        },
      ],
    },

    {
      id: "design",
      title: "Design Opportunities",
      type: "design",
      content: [
        {
          type: "list",
          data: {
            title: "Recommendations surfaced from research",
            items: [
              "Customizable Tracking — Let users add or hide symptoms to reduce cognitive load",
              "Richer Insights & Visualizations — Provide context-sensitive explanations and correlations",
              "Ecosystem Integration — Sync with fitness trackers and health records",
              "Adaptive Interfaces — Recognize tracking style (daily vs. sporadic) and tailor prompts or dashboards",
            ],
          },
        },
      ],
    },

    {
      id: "impact",
      title: "Impact & Outcomes",
      type: "impact",
      content: [
        {
          type: "list",
          data: {
            title: "Research impact",
            items: [
              "Informed Clue\u2019s roadmap exploration of personalized analytics and wearable integration",
              "Added empirical evidence to feminist HCI scholarship, demonstrating how digital tools enable self-validation and clinical advocacy",
              "Showcased a rigorous mixed-methods approach blending quantitative correlations with rich participant narratives",
            ],
          },
        },
        {
          type: "text",
          data: "<p><strong>Publication:</strong> Manuscript in peer review for CHI 2026 (ACM Conference on Human Factors in Computing Systems).</p>",
        },
      ],
    },

    {
      id: "reflection",
      title: "Reflection",
      type: "reflection",
      content: [
        {
          type: "text",
          data: "<p>This project reaffirmed the value of designing with feminist HCI principles: centering lived experience, resisting over-medicalization, and providing agency through customization and insight.</p>",
        },
      ],
    },
  ],

  team: [
    "Dissertation Advisor Chair, University of Cincinnati",
    "Chief Science Officer, Clue",
    "Director of Science, Clue",
  ],

  myRole:
    "Principal Investigator — study design, recruitment, data collection, qualitative & quantitative analysis, reporting",

  tags: [
    "Femtech",
    "Women\u2019s health",
    "Diary study",
    "Mixed methods",
    "HCI research",
    "Perimenopause",
  ],
};
