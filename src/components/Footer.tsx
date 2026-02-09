import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-semibold tracking-tight"
            >
              Adriana Sainz
            </Link>
            <p className="mt-3 text-sm text-muted">
              Healthcare UX leader.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Navigation
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/#work"
                className="text-sm text-foreground hover:text-muted transition-colors"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-sm text-foreground hover:text-muted transition-colors"
              >
                About
              </Link>
              <Link
                href="/playground"
                className="text-sm text-foreground hover:text-muted transition-colors"
              >
                Playground
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Connect
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-muted transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-muted transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:sainz.nag@gmail.com"
                className="text-sm text-foreground hover:text-muted transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Adriana Sainz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
