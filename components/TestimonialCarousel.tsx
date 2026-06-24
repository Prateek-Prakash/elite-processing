"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/content";

export default function TestimonialCarousel() {
  const [perView, setPerView] = useState(1);
  const [page, setPage] = useState(0);

  // 2 cards per page on md+ screens, 1 on mobile.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setPerView(mq.matches ? 2 : 1);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const pages = Math.ceil(testimonials.length / perView);

  // Keep the current page valid when perView changes.
  useEffect(() => {
    setPage((p) => Math.min(p, pages - 1));
  }, [pages]);

  const go = (dir: number) => setPage((p) => (p + dir + pages) % pages);

  return (
    <div
      className={`mx-auto mt-12 ${perView === 2 ? "max-w-5xl" : "max-w-2xl"}`}
    >
      {/* Viewport */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="shrink-0 px-2"
              style={{ flex: `0 0 ${100 / perView}%` }}
            >
              <div className="flex h-full flex-col rounded-2xl border border-rose-tint bg-rose-tint/40 p-8 sm:p-10">
                <Quote className="text-rose-soft" size={34} />
                <blockquote className="mt-4 grow text-lg leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-surface font-display text-lg font-bold text-rose-deep">
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-soft">{t.role}</p>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-7 flex items-center justify-center gap-5">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonials"
          className="grid h-10 w-10 place-items-center rounded-full border border-rose-tint text-rose-primary transition hover:bg-rose-primary hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              aria-current={i === page ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all ${
                i === page
                  ? "w-6 bg-rose-primary"
                  : "w-2.5 bg-rose-soft/50 hover:bg-rose-soft"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next testimonials"
          className="grid h-10 w-10 place-items-center rounded-full border border-rose-tint text-rose-primary transition hover:bg-rose-primary hover:text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
