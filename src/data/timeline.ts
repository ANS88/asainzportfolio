import { caseStudyList } from "@/data/case-studies";
import { asset } from "@/lib/asset";

export interface TimelineEntry {
  key: string;
  order: number;
  /** Shown as-is, e.g. "2024–25" or "Now". */
  year: string;
  headline: string;
  role: string;
  org: string;
  summary: string;
  href: string;
  external?: boolean;
  thumbnail: string;
  tone: "light" | "dark";
  fit: "contain" | "cover";
}

// Entries that aren't case studies, e.g. ongoing side projects. "Now" sorts first.
const extraEntries: TimelineEntry[] = [
  {
    key: "femswarm",
    order: 0,
    year: "Now",
    headline: "Six AI agents scouting women's health research every week",
    role: "Side project",
    org: "Women's Health, Computed",
    summary:
      "A swarm of AI research agents, each named for a woman who changed history, that scouts new papers, clinical trials, product launches, and funding in women's health for my Substack.",
    href: `${asset("/femswarm")}#this-week`,
    external: true,
    thumbnail: asset("/images/playground/femswarm-preview.png"),
    tone: "dark",
    fit: "cover",
  },
];

const endYear = (year: string) => {
  if (year === "Now") return Infinity;
  const all = year.match(/\d{2,4}/g) ?? [];
  const last = all[all.length - 1] ?? "0";
  const first = all[0] ?? "0";
  return last.length === 2 ? Number(first.slice(0, 2) + last) : Number(last);
};
const startYear = (year: string) => Number((year.match(/\d{4}/) ?? ["0"])[0]);

const caseStudyEntries = caseStudyList.flatMap((s) =>
  s.orbit
    ? [
        {
          key: s.slug,
          order: s.orbit.order,
          year: s.orbit.year,
          headline: s.orbit.headline,
          role: s.role,
          org: s.company,
          summary: s.orbit.summary,
          href: `/work/${s.slug}`,
          thumbnail: s.orbit.thumbnail,
          tone: s.orbit.tone ?? ("light" as const),
          fit: s.orbit.fit ?? ("contain" as const),
        },
      ]
    : [],
);

/** Newest first; ties keep the orbit order. */
export const timelineEntries: TimelineEntry[] = [...extraEntries, ...caseStudyEntries].sort(
    (a, b) =>
      endYear(b.year) - endYear(a.year) ||
      startYear(b.year) - startYear(a.year) ||
      a.order - b.order,
);
