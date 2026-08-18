import { NextResponse } from "next/server";
import { brand } from "@/lib/brand";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadBody = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  address?: unknown;
  segment?: unknown;
  bots?: unknown;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: LeadBody;

  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = asString(body.name);
  const phone = asString(body.phone);
  const email = asString(body.email);
  const address = asString(body.address);
  const segment = asString(body.segment) || "residential";
  const bots = Array.isArray(body.bots)
    ? body.bots.filter((item): item is string => typeof item === "string")
    : [];

  if (!name || !phone || !email || !address) {
    return NextResponse.json({ ok: false, error: "Please complete all fields." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL;

  if (apiKey && toEmail) {
    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.LEAD_FROM_EMAIL || "Smart Lawn Pro <onboarding@resend.dev>",
        to: [toEmail],
        subject: `Assessment request — ${name}`,
        text: [
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          `Address: ${address}`,
          `Segment: ${segment}`,
          `Bots: ${bots.join(", ") || "unspecified"}`,
        ].join("\n"),
      }),
    });

    if (!resend.ok) {
      return NextResponse.json(
        { ok: false, error: `Unable to send. Call ${brand.phoneDisplay}.` },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true, emailed: Boolean(apiKey && toEmail) });
}
