import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thinking — Adriana Navarro Sainz",
  description:
    "Essays on healthcare AI, femtech design, and clinical decision support — positions from a UX research leader with a PhD in HCI.",
  openGraph: {
    description:
      "Essays on healthcare AI, femtech design, and clinical decision support — positions from a UX research leader with a PhD in HCI.",
  },
  twitter: {
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
