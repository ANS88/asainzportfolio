"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

  // Only show on homepage
  if (pathname !== "/") return null;

  return (
    <nav className="side-nav">
      <Link href="/work">Work</Link>
      <Link href="/playground">Playground</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
