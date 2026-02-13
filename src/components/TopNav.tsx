import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="side-nav">
      <Link href="/">Work</Link>
      <Link href="/playground">Playground</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
