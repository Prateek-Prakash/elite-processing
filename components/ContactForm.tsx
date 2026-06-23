"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { company } from "@/lib/content";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company_, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company_}\n\n${message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-rose-tint bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-rose-primary focus:ring-2 focus:ring-rose-soft/50";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={field}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={field}
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <input
        className={field}
        placeholder="Company / Brokerage"
        value={company_}
        onChange={(e) => setCompany(e.target.value)}
      />
      <textarea
        className={`${field} min-h-32 resize-y`}
        placeholder="How can we help?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-rose-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] hover:bg-rose-deep"
      >
        Send message <Send size={16} />
      </button>
      <p className="text-xs text-ink-soft">
        Opens your email app pre-filled to {company.email}.
      </p>
    </form>
  );
}
