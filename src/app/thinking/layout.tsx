import type { Metadata } from "next";
import { siteOpenGraph, siteTwitter } from "@/lib/og";

export const metadata: Metadata = {
  title: "Thinking — Adriana Navarro Sainz",
  description:
    "Essays on healthcare AI, femtech design, and clinical decision support — positions from a UX research leader with a PhD in HCI.",
  openGraph: {
    ...siteOpenGraph,
    description:
      "Essays on healthcare AI, femtech design, and clinical decision support — positions from a UX research leader with a PhD in HCI.",
  },
  twitter: {
    ...siteTwitter,
    description:
      "Essays on healthcare AI, femtech design, and clinical decision support — positions from a UX research leader with a PhD in HCI.",
  },
};

export default function ThinkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
