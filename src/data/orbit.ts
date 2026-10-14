import { caseStudyList } from "@/data/case-studies";
import type { CaseStudy, OrbitMeta } from "@/types/case-study";

export interface OrbitCategory {
  id: string;
  label: string;
  color: string;
}

// Add a lens here (and a weight for it in each case study's `orbit.weights`).
export const ORBIT_CATEGORIES: OrbitCategory[] = [
  { id: "design", label: "Design", color: "#f2a7c3" },
  { id: "research", label: "Research", color: "#8fd3c7" },
  { id: "leadership", label: "Leadership", color: "#f0c27b" },
];

export const LENS_THRESHOLD = 0.3;

export interface OrbitProject extends OrbitMeta {
  slug: string;
  title: string;
  role: string;
  href: string;
}

export const orbitProjects: OrbitProject[] = caseStudyList
  .filter((s): s is CaseStudy & { orbit: OrbitMeta } => Boolean(s.orbit))
  .map((s) => ({ ...s.orbit, slug: s.slug, title: s.title, role: s.role, href: `/work/${s.slug}` }))
  .sort((a, b) => a.order - b.order);

export function inLens(project: OrbitProject, lens: string): boolean {
  return lens === "all" || (project.weights[lens] ?? 0) >= LENS_THRESHOLD;
}

/** Percent share of each category, rounded so the parts sum to 100. */
export function disciplineMix(project: OrbitProject) {
  const raw = ORBIT_CATEGORIES.map((c) => ({ ...c, weight: project.weights[c.id] ?? 0 }));
  const total = raw.reduce((sum, c) => sum + c.weight, 0) || 1;
  const parts = raw.map((c) => ({ ...c, exact: (c.weight / total) * 100 }));
  const floored = parts.map((c) => ({ ...c, pct: Math.floor(c.exact) }));
  let remainder = 100 - floored.reduce((sum, c) => sum + c.pct, 0);
  [...floored]
    .sort((a, b) => (b.exact - b.pct) - (a.exact - a.pct))
    .forEach((c) => {
      if (remainder > 0 && c.weight > 0) {
        c.pct += 1;
        remainder -= 1;
      }
    });
  return floored.map(({ id, label, color, weight, pct }) => ({ id, label, color, weight, pct }));
}
