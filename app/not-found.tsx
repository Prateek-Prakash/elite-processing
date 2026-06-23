import Link from "next/link";
import Image from "next/image";
import { Home, Phone } from "lucide-react";
import { company } from "@/lib/content";

export default function NotFound() {
  return (
    <main className="gradient-hero flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <Link href="/" aria-label={company.legalName} className="mb-10">
        <Image
          src="/logo.png"
          alt={company.name}
          width={460}
          height={133}
          priority
          className="h-10 w-auto"
        />
      </Link>

      <p className="font-display text-7xl font-bold text-gradient">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
        This page took a detour.
      </h1>
      <p className="mt-3 max-w-md text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
        get you back on track.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-rose-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03] hover:bg-rose-deep"
        >
          <Home size={16} /> Back to home
        </Link>
        <a
          href={`tel:${company.phoneHref}`}
          className="inline-flex items-center gap-2 rounded-full border border-rose-soft bg-surface px-7 py-3.5 text-sm font-semibold text-rose-deep transition hover:bg-rose-tint"
        >
          <Phone size={16} /> {company.phone}
        </a>
      </div>
    </main>
  );
}
