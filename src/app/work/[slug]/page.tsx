import { notFound } from "next/navigation";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
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

  return {
    title: `${cs.title} \u2014 Adriana Navarro Sainz`,
    description: cs.stakesLine,
    openGraph: {
      title: cs.title,
      description: cs.stakesLine,
      images: cs.heroImage ? [cs.heroImage.src] : [],
    },
    twitter: {
      title: cs.title,
      description: cs.stakesLine,
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
      </div>
      <ContactBlock />
    </>
  );
}
