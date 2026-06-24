import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { company } from "@/lib/content";

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-rose-tint bg-surface/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link href="/" aria-label={company.legalName} className="flex items-center">
            <Logo priority className="h-9 w-auto" />
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main id="main-content" className="mx-auto w-full max-w-3xl flex-1 px-5 py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-rose-primary hover:text-rose-deep"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>

        <h1 className="mt-6 font-display text-4xl font-bold text-ink">{title}</h1>
        <p className="mt-2 text-sm text-ink-soft">Last updated: {updated}</p>

        <div className="legal mt-10 space-y-8 text-ink-soft">{children}</div>
      </main>

      <footer className="border-t border-rose-tint bg-surface py-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 px-5 text-xs text-ink-soft sm:flex-row">
          <p>
            © {company.year} {company.legalName} · NMLS #{company.nmls}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-rose-primary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-rose-primary">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
