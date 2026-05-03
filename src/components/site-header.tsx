import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { withBasePath } from "@/lib/path";

const links = [
  { label: "Experience", href: withBasePath("/#experience") },
  { label: "Projects", href: withBasePath("/#projects") },
  { label: "Skills", href: withBasePath("/#skills") },
  { label: "Contact", href: withBasePath("/#contact") },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="glass-panel mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border border-border px-5 py-3">
        <Link
          href={withBasePath("/")}
          className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground"
        >
          Sunny Yadav
        </Link>
        <nav className="hidden justify-center md:flex">
          <div className="flex items-center gap-6 rounded-full border border-border/70 bg-surface-strong px-5 py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
        <div className="flex items-center justify-end gap-3">
          <ThemeToggle />
          <a
            href={withBasePath("/resume.pdf")}
            className="rounded-full border border-foreground px-4 py-2 text-sm font-medium text-foreground hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
