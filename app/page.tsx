import {
  FileSearch,
  Send,
  ClipboardCheck,
  KeyRound,
  Phone,
  Mail,
  MapPin,
  Quote,
  Facebook,
  Instagram,
  CheckCircle2,
  Clock,
  ArrowRight,
  Home as HomeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import UsMap from "@/components/UsMap";
import {
  company,
  services,
  approvedStates,
  upcomingStates,
  lenders,
  testimonials,
  team,
} from "@/lib/content";

const iconMap = { FileSearch, Send, ClipboardCheck, KeyRound } as const;

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* HERO */}
        <section className="gradient-hero relative overflow-hidden pt-32 pb-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-rose-soft/50 bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-rose-deep">
                  Third-Party Loan Processing
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-6xl">
                  An easy solution for mortgage brokers to{" "}
                  <span className="text-gradient">expand their business.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-lg text-ink-soft">
                  {company.blurb} We remove time-consuming tasks off your plate
                  so you can focus on closing more loans.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
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
              <Reveal delay={0.32}>
                <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6">
                  {[
                    { n: "16", l: "Approved states" },
                    { n: "6", l: "States coming soon" },
                    { n: "100%", l: "Focus on your file" },
                  ].map((s) => (
                    <div key={s.l}>
                      <dt className="font-display text-3xl font-bold text-rose-primary">
                        {s.n}
                      </dt>
                      <dd className="mt-1 text-xs text-ink-soft">{s.l}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-rose-soft/40 to-transparent blur-2xl" />
                <Image
                  src="/hero-house-coins.png"
                  alt="A model house resting on a stack of coins"
                  width={600}
                  height={396}
                  priority
                  className="w-full rounded-[2rem] object-cover shadow-[0_30px_80px_rgba(233,30,140,0.18)]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                Your file, handled with care.
              </h2>
              <p className="mt-5 text-ink-soft">{company.mission}</p>
              <ul className="mt-7 space-y-3">
                {[
                  "Quick, easy transactions for LO and borrower",
                  "Clear, prompt communication at every step",
                  "More volume without more admin overhead",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-rose-primary"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(233,30,140,0.15)]">
                <Image
                  src="/puzzle-house.png"
                  alt="A house illustration assembled from puzzle pieces"
                  width={600}
                  height={330}
                  className="w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                  <p className="font-display text-lg font-semibold text-white">
                    &ldquo;{company.tagline}&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-white/80">
                    {company.legalName} · NMLS #{company.nmls}
                  </p>
                </div>
              </div>
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
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Reveal>
                <div className="rounded-2xl border border-rose-tint bg-surface p-7">
                  <div className="flex items-center gap-2 text-rose-primary">
                    <CheckCircle2 size={18} />
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                      Approved ({approvedStates.length})
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {approvedStates.map((st) => (
                      <span
                        key={st}
                        className="rounded-full bg-rose-tint px-3 py-1.5 text-xs font-medium text-rose-deep"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="rounded-2xl border border-rose-tint bg-surface p-7">
                  <div className="flex items-center gap-2 text-ink-soft">
                    <Clock size={18} />
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                      Coming soon ({upcomingStates.length})
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {upcomingStates.map((st) => (
                      <span
                        key={st}
                        className="rounded-full border border-rose-soft/50 px-3 py-1.5 text-xs font-medium text-ink-soft"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* LENDERS */}
        <section id="lenders" className="bg-surface py-16">
          <div className="mx-auto max-w-6xl px-5 text-center">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                We submit to the lenders you already work with
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {lenders.map((l) => (
                  <div
                    key={l.name}
                    className="flex h-24 items-center justify-center rounded-2xl border border-rose-tint bg-white p-5 shadow-[0_6px_20px_rgba(233,30,140,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(233,30,140,0.12)] dark:border-rose-soft/25 dark:shadow-[0_8px_30px_rgba(233,30,140,0.22)] dark:ring-1 dark:ring-rose-soft/15 dark:hover:shadow-[0_14px_40px_rgba(233,30,140,0.32)]"
                  >
                    <Image
                      src={l.file}
                      alt={l.name}
                      width={200}
                      height={56}
                      className="max-h-12 w-auto rounded-md object-contain"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  Loved by the loan officers we serve
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.1}>
                  <figure className="h-full rounded-2xl border border-rose-tint bg-surface p-8 shadow-[0_12px_40px_rgba(233,30,140,0.06)]">
                    <Quote className="text-rose-soft" size={32} />
                    <blockquote className="mt-4 text-ink">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-tint font-display text-base font-bold text-rose-deep">
                        {t.name[0]}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">
                          {t.name}
                        </p>
                        <p className="text-xs text-ink-soft">{t.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  Meet the team
                </h2>
              </div>
            </Reveal>
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.1}>
                  <div className="flex h-full flex-col rounded-3xl border border-rose-tint bg-rose-bg p-6 text-center shadow-[0_12px_40px_rgba(233,30,140,0.06)]">
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
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-12 rounded-3xl bg-gradient-to-br from-rose-tint to-rose-bg p-8 shadow-[0_30px_80px_rgba(233,30,140,0.12)] md:grid-cols-2 md:p-12">
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
            <Image
              src="/logo.png"
              alt={company.legalName}
              width={360}
              height={104}
              className="h-8 w-auto"
            />
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
