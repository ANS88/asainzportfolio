import type { Metadata } from "next";
import { SITE_URL, siteOpenGraph, siteTwitter } from "@/lib/og";
import "./globals.css";
import TopNav from "@/components/TopNav";
import DotCursor from "@/components/DotCursor";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Adriana Navarro Sainz",
  description:
    "Design and research leader for complex, high-stakes products. Ten years of experience across 50+ labs, 4 business units, and 3.5M+ tests reported a year.",
  openGraph: {
    ...siteOpenGraph,
    description:
      "Design and research leader for complex, high-stakes products. Ten years of experience across 50+ labs, 4 business units, and 3.5M+ tests reported a year.",
  },
  twitter: {
    ...siteTwitter,
    description:
      "Design and research leader for complex, high-stakes products. Ten years of experience across 50+ labs, 4 business units, and 3.5M+ tests reported a year.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;1,14..32,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <DotCursor />
        <TopNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
