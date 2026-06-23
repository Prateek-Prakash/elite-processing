import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/lib/content";

// Basic email shape check — not exhaustive, just enough to reject junk.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TO = process.env.CONTACT_TO || company.email;
// Until a domain is verified in Resend, use their onboarding sender.
const FROM =
  process.env.CONTACT_FROM || "Elite Processing Team <onboarding@resend.dev>";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const companyName = String(body.company || "").trim();
  const message = String(body.message || "").trim();
  const honeypot = String(body.website || "").trim(); // hidden anti-bot field

  // Bot filled the hidden field — silently accept and drop.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 422 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }
  if (name.length > 100 || email.length > 150 || message.length > 5000) {
    return NextResponse.json(
      { error: "One of the fields is too long." },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email is not configured yet. Please call or email us." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const text = [
    `New inquiry from the website`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${companyName || "—"}`,
    ``,
    message,
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,sans-serif;color:#3d1a2e">
      <h2 style="color:#e91e8c;margin:0 0 12px">New website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(companyName) || "—"}</p>
      <hr style="border:none;border-top:1px solid #fce7f3;margin:16px 0" />
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>`;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text,
      html,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send right now. Please try again." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
