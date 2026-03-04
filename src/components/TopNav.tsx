"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
{ href: "/thinking", label: "Thinking" },
  { href: "/about", label: "About" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="side-nav">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? "active" : ""}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
