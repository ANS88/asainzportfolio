import type { CaseStudy } from "@/types/case-study";

export const perimenopauseTracking: CaseStudy = {
  slug: "perimenopause-tracking",
  title: "When usability scores lie",
  shortTitle: "A diary study of perimenopause symptom tracking",
  stakesLine:
    "Clue's perimenopause mode scored 88.3 on the System Usability Scale, far above the industry benchmark. My research question was what that number was hiding. I designed and ran a two-week mixed-methods diary study with 40 women to measure what usability metrics miss: whether tracking actually changes how people understand, manage, and advocate for their health.",
  metaDescription:
    "A product can score high on usability and still deliver shallow value. I ran a mixed-methods diary study with 40 women to measure what usability metrics miss.",
  judgment: "Chose diary study over usability test, the question was about lived experience, not task completion",
  role: "Lead Designer & Researcher",
  timeline: "Discovery to reporting (Oct 2024 – Feb 2025)",
  company: "University of Cincinnati & Clue App",
  companyDescription: "Dissertation research",
  previewImage: "/images/case-studies/perimenopause-tracking/thematicanalysis.png",

  impact: [
    { value: "40", metric: "Participants, two-week diary protocol" },
    { value: "1,977", metric: "Tracking events analyzed" },
    { value: "88.3", metric: "Product's SUS score, yet insights ran shallow" },
    // TODO: replace with a real number, e.g. exit interviews conducted, diary entries coded, or publication venue if accepted

  ],

  sections: [
    {
      id: "context",
      title: "The question usability testing can't answer",
      type: "context",
      content: [
        {
          type: "text",
          data: "<p><strong>Goal:</strong> Understand how people actually use Clue's perimenopause mode and surface design opportunities to improve engagement, usability, and clinical value.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/perimenopause-tracking/processdetail.png",
            alt: "Detailed breakdown of the research process and methodology",
            caption: "Research process, detailed breakdown",
          },
        },
        {
          type: "list",
          data: {
            title: "Research questions",
            items: [
              "How does symptom tracking influence self-management of perimenopause?",
              "What benefits and limitations do users perceive in Clue's perimenopause mode?",
              "How does tracking affect health decisions and clinical encounters?",
              "What challenges or barriers deter continued use?",
            ],
          },
        },
      ],
    },

    {
      id: "research",
      title: "Two weeks inside 40 women's tracking habits",
      type: "research",
      content: [
        {
          type: "text",
          data: "<p>Mixed-methods, two-week diary study with 40 U.S. Clue users (perimenopausal or menopausal, joined perimenopause mode in past 3 months).</p>",
        },
        {
          type: "list",
          data: {
            title: "Data collection",
            items: [
              "Daily symptom logs and reflective diary entries",
              "App analytics (1,977 tracking events from 16 fully engaged participants)",
              "System Usability Scale (SUS) survey",
              "30-minute semi-structured exit interviews",
            ],
          },
        },
        {
          type: "text",
          data: `<!-- TODO: "Of 40 enrolled, [N] completed the full diary protocol; analytics analysis drew on the 16 fully engaged participants. Attrition itself became data: [one sentence on what drop-off patterns revealed about tracking burden, only if supported by the study]." -->`,
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
          data: "<p><strong>Ethics:</strong> IRB-approved, anonymous data, securely stored and destroyed post-study. Compensation: $50 Amazon gift card.</p>",
        },
      ],
    },

    {
      id: "collaboration",
      title: "Brokering the collaboration",
      type: "research",
      content: [
        {
          type: "text",
          data: `<!-- TODO: 3-4 sentences from the owner covering: what access Clue provided (users, analytics export), what the university and IRB required, what each party wanted from the study, and what the owner personally negotiated or aligned. This is the leadership content of the page; do not draft it from imagination. -->`,
        },
      ],
    },

    {
      id: "findings",
      title: "What the diaries showed",
      type: "findings",
      content: [
        {
          type: "text",
          data: "<h3>Tracking as validation and advocacy</h3><p>Participants used logs as evidence in clinical visits. Tracking strengthened self-awareness and confidence, even when clinicians remained skeptical.</p>",
        },
        {
          type: "quote",
          data: {
            text: "My doctor wasn't listening... I needed to present a more holistic picture.",
            attribution: "P38, exit interview",
          },
        },
        {
          type: "text",
          data: "<h3>Two distinct tracking styles</h3><p><strong>Daily Trackers:</strong> Consistent multi-category logging. <strong>Sporadic Trackers:</strong> Reactive logging during symptom spikes or before appointments.</p>",
        },
        {
          type: "text",
          data: "<h3>Interconnected symptoms</h3><p>Correlation analysis revealed strong links among hot flashes, brain fog, mood swings, and sleep disruption. These symptoms rarely occurred in isolation, suggesting the need for holistic views rather than siloed metrics.</p>",
        },
        {
          type: "text",
          data: "<h3>High usability, shallow insights</h3><p>Average SUS score of 88.3 (industry benchmark: 68). Users praised the interface but wanted customizable symptom categories, richer trend analysis, and integration with wearables.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/perimenopause-tracking/thematicanalysis.png",
            alt: "Thematic analysis map from diary study and exit interviews",
            caption: "Thematic analysis",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/perimenopause-tracking/findings2.png",
            alt: "Secondary findings visualization from perimenopause tracking study",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/perimenopause-tracking/usage.png",
            alt: "App usage patterns across daily and sporadic trackers",
            caption: "Tracking usage patterns",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/perimenopause-tracking/susscore.png",
            alt: "SUS score distribution, average 88.3 against 68 benchmark",
            caption: "SUS score results",
          },
        },
      ],
    },

    {
      id: "design",
      title: "What I recommended, and what happened",
      type: "design",
      content: [
        {
          type: "text",
          data: `<p>Recommendations surfaced from the research, each grounded in a specific finding:</p><ul><li><strong>Customizable tracking</strong> (from findings 1 and 4): Let users add or hide symptoms to reduce cognitive load.<!-- TODO: what Clue did with this, or delete the outcome clause --></li><li><strong>Correlation-aware trend views</strong> (from finding 3): Surface cross-symptom patterns instead of siloed metrics.<!-- TODO: outcome --></li><li><strong>Adaptive interfaces for two tracking styles</strong> (from finding 2): Recognize tracking style (daily vs. sporadic) and tailor prompts or dashboards.<!-- TODO: what Clue did with this, or delete the outcome clause --></li></ul>`,
        },
      ],
    },

    {
      id: "judgment",
      title: "The bet: lived experience over task success",
      type: "judgment",
      content: [
        {
          type: "text",
          data: "<p><strong>The obvious move:</strong> Run a usability study of Clue's perimenopause mode: task success rates, error counts, satisfaction scores. That's what the app company expected and what most HCI dissertations deliver.</p>",
        },
        {
          type: "text",
          data: "<p><strong>What I chose instead:</strong> A two-week diary study with mixed methods. The research question wasn't whether the interface was usable, it scored 88.3 SUS, well above benchmark. The question was whether symptom tracking actually changes how women understand and manage their experience. That's a lived-experience question, not a task-completion question.</p>",
        },
        {
          type: "text",
          data: "<p><strong>The tradeoff:</strong> Diary studies produce messy, rich, hard-to-analyze data. Thematic analysis of 40 participants' reflective entries took significantly longer than coding usability sessions. But it surfaced findings, tracking as clinical advocacy, two distinct tracking styles, the gap between high usability and shallow insight, that a usability study would have missed entirely.</p>",
        },
      ],
    },

    {
      id: "beyond",
      title: "What outlived the study",
      type: "beyond",
      content: [
        {
          type: "text",
          data: `<p><!-- TODO: What Clue did with the recommendations. If no concrete outcomes, use: "Delivered to Clue's science leadership as [report/readout format]." --></p>`,
        },
        {
          type: "text",
          data: "<p>Demonstrated a repeatable way to evaluate products on experiential outcomes when usability metrics say everything is fine, and showed how tracking tools become evidence people use to advocate for themselves in clinical visits.</p>",
        },
        {
          type: "text",
          data: `<p><!-- TODO: current, true publication status, e.g. "Published at [venue] 2026" or "Under review at [venue]" --></p>`,
        },
        {
          type: "text",
          data: "<p>The study reinforced a principle I bring to every product: give people agency over what they track and surface insight, not just data.</p>",
        },
      ],
    },
  ],

  // TODO: names if the owner wants them public
  team: [
    "Dissertation committee chair (University of Cincinnati)",
    "Chief Science Officer (Clue)",
    "Director of Science (Clue)",
  ],

  myRole:
    "Principal Investigator: study design, recruitment, data collection, qualitative and quantitative analysis, reporting.",

  // TODO: REWRITE REQUIRED. One sentence on what the advisor and Clue's science team owned,
  // e.g. advisor oversight of methodology, Clue's ownership of analytics export and roadmap decisions.
  owned:
    "Principal Investigator: I owned the entire research design, study methodology, recruitment strategy, IRB protocol, data collection instruments, qualitative and quantitative analysis, and reporting.",

  tags: [
    "Femtech",
    "Diary study",
    "Mixed methods",
  ],
};
