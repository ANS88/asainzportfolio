import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import FlowerHome from "@/components/FlowerHome";
import MoonflowerCursor from "@/components/MoonflowerCursor";

export const metadata: Metadata = {
  title: "Adriana Navarro Sainz",
  description:
    "Designer, researcher, and builder. Healthcare UX leader with 10+ years in clinical and biotech environments.",
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
