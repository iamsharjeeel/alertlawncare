import { NextRequest, NextResponse } from "next/server";
import { isBotSubmission, readLead, validateLead } from "@/lib/lead";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

function clientKey(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  return ip;
}

function wantsJson(request: NextRequest) {
  const accept = request.headers.get("accept") || "";
  return accept.includes("application/json") || request.headers.get("x-requested-with") === "fetch";
}

async function parseBody(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const json = (await request.json()) as Record<string, unknown>;
    return readLead(json);
  }
  const form = await request.formData();
  return readLead(form);
}

async function notify(lead: ReturnType<typeof readLead>) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL;
  if (!apiKey || !toEmail) return;

  const resend = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || "Smart Lawn Pro <onboarding@resend.dev>",
      to: [toEmail],
      subject: `Assessment request from ${lead.full_name}`,
      text: [
        `Name: ${lead.full_name}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone}`,
        `Address: ${lead.property_address}`,
        `Type: ${lead.property_type}`,
        `Interest: ${lead.services_interest.join(", ")}`,
        lead.notes ? `Notes: ${lead.notes}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  if (!resend.ok) {
    throw new Error("notify_failed");
  }
}

export async function POST(request: NextRequest) {
  const limited = rateLimit(clientKey(request));
  if (!limited.ok) {
    const body = { ok: false, error: "Please wait a few minutes and try again, or call 936-301-4433." };
    if (wantsJson(request)) {
      return NextResponse.json(body, {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfter || 60) },
      });
    }
    return NextResponse.redirect(new URL("/thank-you?status=busy", request.url), 303);
  }

  let lead;
  try {
    lead = await parseBody(request);
  } catch {
    if (wantsJson(request)) {
      return NextResponse.json({ ok: false, error: "Unable to read the form." }, { status: 400 });
    }
    return NextResponse.redirect(new URL("/thank-you?status=error", request.url), 303);
  }

  if (isBotSubmission(lead)) {
    if (wantsJson(request)) return NextResponse.json({ ok: true });
    return NextResponse.redirect(new URL("/thank-you", request.url), 303);
  }

  const errors = validateLead(lead);
  if (Object.keys(errors).length > 0) {
    if (wantsJson(request)) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }
    return NextResponse.redirect(new URL("/thank-you?status=error", request.url), 303);
  }

  try {
    await notify(lead);
  } catch {
    if (wantsJson(request)) {
      return NextResponse.json(
        { ok: false, error: "We could not send the request. Call 936-301-4433." },
        { status: 502 }
      );
    }
    return NextResponse.redirect(new URL("/thank-you?status=error", request.url), 303);
  }

  if (wantsJson(request)) return NextResponse.json({ ok: true });
  return NextResponse.redirect(new URL("/thank-you", request.url), 303);
}
