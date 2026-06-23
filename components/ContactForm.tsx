"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { company } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company_, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company: company_, message, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Could not send. Please try again.");
      }
      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const field =
    "w-full rounded-xl border border-rose-tint bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-rose-primary focus:ring-2 focus:ring-rose-soft/50 disabled:opacity-60";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-rose-tint/40 px-6 py-12 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-rose-primary text-white">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-ink">
          Thanks — we&apos;ll be in touch!
        </h3>
        <p className="mt-2 max-w-xs text-sm text-ink-soft">
          Your message is on its way. We&apos;ll reply to the email you provided
          shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-rose-primary hover:text-rose-deep"
        >
          Send another message
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} className="relative space-y-4">
      {/* Honeypot — hidden from humans, catches bots */}
      <div aria-hidden className="pointer-events-none absolute -left-[9999px] opacity-0">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={field}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={sending}
          required
        />
        <input
          className={field}
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={sending}
          required
        />
      </div>
      <input
        className={field}
        placeholder="Company / Brokerage"
        value={company_}
        onChange={(e) => setCompany(e.target.value)}
        disabled={sending}
      />
      <textarea
        className={`${field} min-h-32 resize-y`}
        placeholder="How can we help?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={sending}
        required
      />

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950/40 dark:text-red-300">
          {errorMsg}{" "}
          <a href={`mailto:${company.email}`} className="underline">
            Email us directly
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2 rounded-full bg-rose-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] hover:bg-rose-deep disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {sending ? (
          <>
            Sending <Loader2 size={16} className="animate-spin" />
          </>
        ) : (
          <>
            Send message <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
