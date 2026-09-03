import { notFound } from "next/navigation";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import MoreWork from "@/components/MoreWork";
import ContactBlock from "@/components/ContactBlock";
import { caseStudies } from "@/data/case-studies";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies[slug];

  if (!cs) return {};

  const desc = cs.metaDescription ?? cs.stakesLine;
  return {
    title: `${cs.title}, Adriana Navarro Sainz`,
    description: desc,
    openGraph: {
      title: cs.title,
      description: desc,
      images: cs.heroImage ? [cs.heroImage.src] : [],
    },
    twitter: {
      title: cs.title,
      description: desc,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <div className="container">
        <CaseStudyTemplate caseStudy={caseStudy} />
        <MoreWork currentSlug={slug} />
      </div>
      <ContactBlock />
    </>
  );
}
