import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="top-nav">
      <div className="top-nav-inner container">
        <Link href="/" className="top-nav-logo">ANS</Link>
        <div className="top-nav-links">
          <Link href="/">Work</Link>
          <Link href="/playground">Playground</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
