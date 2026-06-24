import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { company, pricing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing | Elite Processing Team",
  description:
    "Flat per-file loan processing pricing for mortgage brokers. Paid at closing, no monthly fees.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-rose-tint bg-surface/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            aria-label={company.legalName}
            className="flex items-center"
          >
            <Logo priority className="h-9 w-auto" />
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main id="main-content" className="flex-1">
        <section className="pt-14 pb-6 text-center">
          <div className="mx-auto max-w-2xl px-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-rose-primary hover:text-rose-deep"
            >
              <ArrowLeft size={16} /> Back to home
            </Link>
            <h1 className="mt-6 font-display text-4xl font-bold text-ink sm:text-5xl">
              Simple, <span className="text-gradient">transparent</span> pricing.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
              {pricing.note}
            </p>
          </div>
        </section>

        <section className="pb-20 pt-8">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
            {pricing.tiers.map((t) => (
              <div
                key={t.name}
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  t.highlight
                    ? "border-rose-primary bg-surface shadow-[0_16px_50px_rgba(233,30,140,0.15)] ring-2 ring-rose-primary"
                    : "border-rose-tint bg-surface"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-rose-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}
                <h2 className="font-display text-xl font-semibold text-ink">
                  {t.name}
                </h2>
                <p className="mt-2 text-sm text-ink-soft">{t.blurb}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-rose-primary">
                    {t.price}
                  </span>
                  <span className="text-sm text-ink-soft">/ {t.unit}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-rose-primary"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                    t.highlight
                      ? "bg-rose-primary text-white hover:bg-rose-deep"
                      : "border border-rose-soft bg-surface text-rose-deep hover:bg-rose-tint"
                  }`}
                >
                  Get started <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl px-5 text-center text-xs text-ink-soft/80">
            Pricing shown is illustrative. Final pricing depends on loan type and
            volume — reach out for a custom quote tailored to your business.
          </p>
        </section>
      </main>

      <footer className="border-t border-rose-tint bg-surface py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs text-ink-soft sm:flex-row">
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
