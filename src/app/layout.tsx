import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import FlowerHome from "@/components/FlowerHome";
import MoonflowerCursor from "@/components/MoonflowerCursor";

export const metadata: Metadata = {
  title: "Adriana Navarro Sainz",
  description:
    "Adriana Navarro Sainz \u2014 UX research leader building design practices in healthcare. PhD in HCI, 12 products shipped in regulated clinical environments. Based in San Francisco.",
  openGraph: {
    description:
      "Adriana Navarro Sainz \u2014 UX research leader building design practices in healthcare. PhD in HCI, 12 products shipped in regulated clinical environments. Based in San Francisco.",
  },
  twitter: {
    description:
      "Adriana Navarro Sainz \u2014 UX research leader building design practices in healthcare. PhD in HCI, 12 products shipped in regulated clinical environments. Based in San Francisco.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MoonflowerCursor />
        <FlowerHome />
        <TopNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
