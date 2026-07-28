import type { CaseStudy } from "@/types/case-study";

export const unifiedPatientPortal: CaseStudy = {
  slug: "unified-patient-portal",
  title: "Unified Patient Portal",
  stakesLine:
    "Patients had no visibility into their own genetic tests — opaque billing, days of waiting, everything mediated through their physician. I used a federal compliance mandate as leverage to build something better: Natera’s first patient-facing product, now used by 181,000 patients to track tests, view results, and manage their care.",
  judgment: "Used a federal compliance mandate as leverage to fund a purpose-built patient portal instead of bolting results onto the physician system",
  role: "Design Leader",
  timeline: "0 → 1 (2023–2024)",
  company: "Natera",
  companyDescription: "Genetic testing & biotech",
  previewImage: "/images/case-studies/unified-patient-portal/iterations.png",
  previewVideo: "https://player.vimeo.com/video/1169731248?autoplay=1&loop=1&muted=1&background=1",
  previewVideos: [
    "https://player.vimeo.com/video/1169731248?autoplay=1&loop=1&muted=1&controls=0#t=0s",
    "https://player.vimeo.com/video/1169731248?autoplay=1&loop=1&muted=1&controls=0#t=100s",
    "https://player.vimeo.com/video/1169731248?autoplay=1&loop=1&muted=1&controls=0#t=200s",
  ],

  impact: [
    { value: "181K", metric: "Patient accounts" },
    { value: "100%", metric: "Women’s Health patients viewed results" },
    { value: "90%+", metric: "Organ Health patients viewed results" },
    { value: "DRS 2024", metric: "Peer-reviewed publication" },
  ],

  sections: [
    {
      id: "video",
      title: "",
      type: "design",
      content: [
        {
          type: "video",
          data: {
            src: "https://player.vimeo.com/video/1169731248?autoplay=1&loop=1&muted=1&controls=0#t=0s",
            caption: "",
          },
        },
        {
          type: "video",
          data: {
            src: "https://player.vimeo.com/video/1169731248?autoplay=1&loop=1&muted=1&controls=0#t=100s",
            caption: "",
          },
        },
        {
          type: "video",
          data: {
            src: "https://player.vimeo.com/video/1169731248?autoplay=1&loop=1&muted=1&controls=0#t=200s",
            caption: "",
          },
        },
      ],
    },

    {
      id: "context",
      title: "The problem",
      type: "context",
      content: [
        {
          type: "text",
          data: "<p>Natera’s genetic testing journey was built for clinicians. Patients — the people the results were actually about — had no way to see test status, understand their bill, or get results without waiting for a phone call. Then the 21st Century Cures Act mandated instant patient access to results, and the company had to respond.</p>",
        },
      ],
    },

    {
      id: "judgment",
      title: "My approach",
      type: "judgment",
      content: [
        {
          type: "text",
          data: "<p>Patients are not clinicians, and I wasn't going to design for them from inside a conference room. I started with patient interviews and shadowing across both business units — sitting with patients as they navigated test ordering, waiting for results, and trying to understand their bills. I watched where confusion hit, where anxiety spiked, and where they gave up and called the clinic instead.</p>",
        },
        {
          type: "text",
          data: "<p>From there I ran workshops with 15 SMEs — genetic counselors, lab ops, product — to map the full journey from the system side and find where patient experience broke down. The combination of patient-facing and system-facing research is what surfaced the real design opportunities, not just the obvious ones.</p>",
        },
      ],
    },

    {
      id: "research",
      title: "How we got there",
      type: "research",
      content: [
        {
          type: "text",
          data: "<p>I led discovery across both business units — 15 SMEs spanning product, lab operations, and genetic counseling — and translated it into four principles that governed every downstream decision:</p>",
        },
        {
          type: "list",
          data: {
            title: "",
            items: [
              "Patients ≠ Providers — plain language, emotional sensitivity, no jargon",
              "Test is the core object — status and next action above everything else",
              "Separation of concerns — billing never sits next to medical results",
              "Do not burden — show only what the current moment requires",
            ],
          },
        },
        {
          type: "text",
          data: "<p>Anchoring the team to principles, rather than adjudicating features one by one, is what let a small cross-functional team move fast across two business units without me in every room.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/unified-patient-portal/designprinciples.png",
            alt: "Design principles framework distilled from discovery research",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/unified-patient-portal/personalexi.png",
            alt: "Lexi persona document — digitally engaged pregnant patient",
          },
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/unified-patient-portal/userjourneylexi.png",
            alt: "Lexi’s end-to-end genetic testing journey map",
          },
        },
      ],
    },

    {
      id: "design",
      title: "What we built",
      type: "design",
      content: [
        {
          type: "text",
          data: "<p>We designed around the moments that carry the most weight: scheduling a sample draw and opening results — with optional educational videos and a path to a genetic counselor built into the results experience. Usability testing with patients sharpened the flows across three major iterations, and pre-results education proved to do double duty: easing anxiety while improving comprehension.</p>",
        },
        {
          type: "image",
          data: {
            src: "/images/case-studies/unified-patient-portal/iterations.png",
            alt: "Prototype iterations tested during usability sessions",
          },
        },
      ],
    },

    {
      id: "impact",
      title: "Impact",
      type: "impact",
      content: [
        {
          type: "text",
          data: "<p>Six months post-launch: 181,000 patients had created accounts. Every Women’s Health patient who created an account returned to view results; over 90% of Organ Health patients did the same. Call-center load dropped as patients self-served, and the company met its Cures Act obligations — as a byproduct of good design rather than its ceiling.</p>",
        },
        {
          type: "text",
          data: "<p>Beyond the product: the portal became Natera’s first product surface to cross business unit boundaries, and its design principles became the foundation for all subsequent patient-facing work. The methodology was peer-reviewed and published at the Design Research Society 2024 conference — external validation that regulated companies can do patient-centered design without compromising compliance. <a href=\"https://dl.designresearchsociety.org/cgi/viewcontent.cgi?article=3480&context=drs-conference-papers\" target=\"_blank\" rel=\"noopener noreferrer\">Read the paper →</a></p>",
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
          data: "<p>Compliance mandates are usually treated as taxes. This project taught me to treat them as budget — the regulatory trigger created a window to fund patient-centered work that would have otherwise waited years. The leadership job was recognizing the window and refusing to let the minimum viable interpretation define the outcome.</p>",
        },
      ],
    },

    {
      id: "beyond",
      title: "Looking forward",
      type: "beyond",
      content: [
        {
          type: "text",
          data: "<p>Expanding to oncology patients, improving scheduling adoption, and using longitudinal analytics to keep refining engagement.</p>",
        },
      ],
    },
  ],

  team: [
    "Product Managers (one per BU)",
    "Product Designer",
    "Engineering team (Serbia-based)",
  ],

  myRole:
    "Drove strategy across Women’s Health and Organ Health — discovery, stakeholder alignment, design principles, usability testing, and post-launch analytics. Partnered with PMs from each business unit, a product designer, and a Serbia-based engineering team. Published the work at DRS 2024.",

  owned:
    "Drove strategy across Women’s Health and Organ Health — discovery, stakeholder alignment, design principles, usability testing, and post-launch analytics. Partnered with PMs from each business unit, a product designer, and a Serbia-based engineering team. Published the work at DRS 2024.",

  tags: [
    "Patient portal",
    "Regulated design",
    "Genetic testing",
  ],
};
