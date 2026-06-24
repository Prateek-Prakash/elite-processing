import {
  FileSearch,
  Send,
  ClipboardCheck,
  KeyRound,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  CheckCircle2,
  Check,
  ArrowRight,
  Home as HomeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import UsMap from "@/components/UsMap";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Logo from "@/components/Logo";
import {
  company,
  services,
  pricing,
  team,
} from "@/lib/content";

const iconMap = { FileSearch, Send, ClipboardCheck, KeyRound } as const;

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* HERO */}
        <section className="gradient-hero relative overflow-hidden pt-36 pb-24">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <Reveal>
              <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-6xl">
                An easy solution for mortgage brokers to{" "}
                <span className="text-gradient">expand their business.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
                {company.blurb} We remove time-consuming tasks off your plate so
                you can focus on closing more loans.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-rose-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-rose-soft/40 transition-transform hover:scale-[1.03] hover:bg-rose-deep"
                >
                  Partner with us <ArrowRight size={16} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-rose-soft bg-surface px-7 py-3.5 text-sm font-semibold text-rose-deep transition hover:bg-rose-tint"
                >
                  See our services
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20">
          <div className="mx-auto max-w-2xl px-5 text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                Your file, handled with care.
              </h2>
              <p className="mt-5 text-ink-soft">{company.mission}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mx-auto mt-8 grid gap-3 text-left sm:max-w-lg">
                {[
                  "Quick, easy transactions for LO and borrower",
                  "Clear, prompt communication at every step",
                  "More volume without more admin overhead",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-xl border border-rose-tint bg-surface px-4 py-3 text-sm text-ink"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-rose-primary"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  From submission to clear-to-close
                </h2>
                <p className="mt-4 text-ink-soft">
                  We manage the full processing workflow so you never lose
                  momentum on a deal.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <Reveal key={s.title} delay={i * 0.08}>
                    <div className="group h-full rounded-2xl border border-rose-tint bg-rose-bg p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(233,30,140,0.12)]">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-rose-primary/10 text-rose-primary transition group-hover:bg-rose-primary group-hover:text-white">
                        <Icon size={22} />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-soft">
                        {s.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Pricing */}
            <div className="mt-20">
              <Reveal>
                <div className="mx-auto max-w-2xl text-center">
                  <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                    Simple, <span className="text-gradient">transparent</span>{" "}
                    pricing.
                  </h3>
                  <p className="mt-4 text-ink-soft">{pricing.note}</p>
                </div>
              </Reveal>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {pricing.tiers.map((t, i) => (
                  <Reveal key={t.name} delay={i * 0.08}>
                    <div
                      className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                        t.highlight
                          ? "border-rose-primary bg-rose-bg ring-2 ring-rose-primary"
                          : "border-rose-tint bg-rose-bg"
                      }`}
                    >
                      {t.highlight && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-rose-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                          Most popular
                        </span>
                      )}
                      <h4 className="font-display text-xl font-semibold text-ink">
                        {t.name}
                      </h4>
                      <p className="mt-2 text-sm text-ink-soft">{t.blurb}</p>
                      <div className="mt-6 flex items-baseline gap-1">
                        <span className="font-display text-4xl font-bold text-rose-primary">
                          {t.price}
                        </span>
                        <span className="text-sm text-ink-soft">
                          / {t.unit}
                        </span>
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
                      <a
                        href="#contact"
                        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                          t.highlight
                            ? "bg-rose-primary text-white hover:bg-rose-deep"
                            : "border border-rose-soft bg-surface text-rose-deep hover:bg-rose-tint"
                        }`}
                      >
                        Get started <ArrowRight size={16} />
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-ink-soft/80">
                Pricing shown is illustrative. Final pricing depends on loan type
                and volume — reach out for a custom quote tailored to your
                business.
              </p>
            </div>
          </div>
        </section>

        {/* COVERAGE */}
        <section id="coverage" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  Where we work
                </h2>
                <p className="mt-4 text-ink-soft">
                  Licensed and processing across the country — with more states
                  on the way.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mx-auto mt-12 max-w-4xl">
                <UsMap />
              </div>
            </Reveal>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  Loved by the loan officers we serve
                </h2>
              </div>
            </Reveal>
            <TestimonialCarousel />
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  Meet the owner
                </h2>
              </div>
            </Reveal>
            <div className="mx-auto mt-12 max-w-md">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.1}>
                  <div className="flex h-full flex-col rounded-3xl border border-rose-tint bg-surface p-8 text-center shadow-[0_12px_40px_rgba(233,30,140,0.06)]">
                    <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-rose-soft/40">
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                      {m.name}
                    </h3>
                    <p className="text-sm font-medium text-rose-primary">
                      {m.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                      &ldquo;{m.bio}&rdquo;
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-12 rounded-3xl border border-rose-tint bg-rose-tint/40 p-8 md:grid-cols-2 md:p-12">
              <Reveal>
                <div>
                  <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                    Let&apos;s grow your business together.
                  </h2>
                  <p className="mt-4 text-ink-soft">
                    Ready to take processing off your plate? Reach out and
                    we&apos;ll get you set up.
                  </p>
                  <div className="mt-8 space-y-4">
                    <a
                      href={`tel:${company.phoneHref}`}
                      className="flex items-center gap-3 text-ink transition hover:text-rose-primary"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-surface text-rose-primary shadow-sm">
                        <Phone size={18} />
                      </span>
                      <span className="text-sm font-medium">
                        {company.phone}
                      </span>
                    </a>
                    <a
                      href={`mailto:${company.email}`}
                      className="flex items-center gap-3 text-ink transition hover:text-rose-primary"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-surface text-rose-primary shadow-sm">
                        <Mail size={18} />
                      </span>
                      <span className="text-sm font-medium">
                        {company.email}
                      </span>
                    </a>
                    <a
                      href={company.nmlsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-ink transition hover:text-rose-primary"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-surface text-rose-primary shadow-sm">
                        <MapPin size={18} />
                      </span>
                      <span className="text-sm font-medium">
                        NMLS #{company.nmls}
                      </span>
                    </a>
                  </div>
                  <div className="mt-8 flex gap-3">
                    <a
                      href={company.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="grid h-10 w-10 place-items-center rounded-full bg-surface text-rose-primary shadow-sm transition hover:bg-rose-primary hover:text-white"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href={company.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="grid h-10 w-10 place-items-center rounded-full bg-surface text-rose-primary shadow-sm transition hover:bg-rose-primary hover:text-white"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="rounded-2xl bg-surface p-6 shadow-sm sm:p-8">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CLOSING CTA BAND */}
        <section className="relative overflow-hidden">
          <Image
            src="/heart-keys.png"
            alt="A pink heart beside a set of house keys"
            width={1200}
            height={600}
            className="h-72 w-full object-cover sm:h-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-deep/85 via-rose-primary/70 to-rose-primary/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-5">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                  Let&apos;s work together
                </p>
                <h2 className="mt-3 max-w-xl font-display text-3xl font-bold text-white sm:text-4xl">
                  We look forward to helping you reach new heights.
                </h2>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-rose-deep shadow-md transition-transform hover:scale-[1.03]"
                >
                  Contact us <ArrowRight size={16} />
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-rose-tint bg-surface py-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Logo className="h-8 w-auto" />
            <p className="text-xs text-ink-soft">
              © {company.year} {company.legalName} ·{" "}
              <a
                href={company.nmlsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-rose-primary hover:underline"
              >
                NMLS #{company.nmls}
              </a>
            </p>
            <div className="flex items-center gap-5">
              <nav className="flex gap-4 text-xs font-medium text-ink-soft">
                <Link href="/privacy" className="hover:text-rose-primary">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-rose-primary">
                  Terms
                </Link>
              </nav>
              <div className="flex gap-3">
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-ink-soft transition hover:text-rose-primary"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-ink-soft transition hover:text-rose-primary"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 border-t border-rose-tint pt-6 text-center sm:flex-row sm:text-left">
            <span
              role="img"
              aria-label="Equal Housing Opportunity"
              title="Equal Housing Opportunity"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-ink-soft/40 text-ink-soft"
            >
              <HomeIcon size={18} />
            </span>
            <p className="text-[11px] leading-relaxed text-ink-soft/80">
              {company.legalName} is a third-party loan processing company and is
              not a lender or mortgage broker. We do not make loans or loan
              commitments, take loan applications, or negotiate loan terms.
              Equal Housing Opportunity. NMLS #{company.nmls} ·{" "}
              <a
                href={company.nmlsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-rose-primary hover:underline"
              >
                NMLS Consumer Access
              </a>
              .
            </p>
          </div>
        </div>
      </footer>

      {/* Spacer so the mobile sticky bar never covers footer content */}
      <div className="h-16 md:hidden" />

      {/* MOBILE STICKY CONTACT BAR */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-rose-tint bg-surface/95 p-3 backdrop-blur-md md:hidden">
        <a
          href={`tel:${company.phoneHref}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-rose-primary py-3 text-sm font-semibold text-white"
        >
          <Phone size={16} /> Call
        </a>
        <a
          href={`mailto:${company.email}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-rose-soft py-3 text-sm font-semibold text-rose-deep"
        >
          <Mail size={16} /> Email
        </a>
      </div>
    </>
  );
}
