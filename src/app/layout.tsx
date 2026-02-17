import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import FlowerHome from "@/components/FlowerHome";
import MoonflowerCursor from "@/components/MoonflowerCursor";

export const metadata: Metadata = {
  title: "Adriana Navarro Sainz",
  description:
    "Adriana Navarro Sainz \u2014 PhD in HCI, UX Research Leader specializing in healthcare AI, femtech, and clinical decision support. 10 years designing in regulated clinical environments.",
  openGraph: {
    description:
      "Adriana Navarro Sainz \u2014 PhD in HCI, UX Research Leader specializing in healthcare AI, femtech, and clinical decision support. 10 years designing in regulated clinical environments.",
  },
  twitter: {
    description:
      "Adriana Navarro Sainz \u2014 PhD in HCI, UX Research Leader specializing in healthcare AI, femtech, and clinical decision support. 10 years designing in regulated clinical environments.",
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
