"use client";

import { useState, type FormEvent } from "react";
import { brand, services } from "@/lib/brand";

type Status = "idle" | "submitting" | "success" | "error";

export function AssessmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company")).trim()) {
      setStatus("success");
      setMessage("Request received.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          address: data.get("address"),
          segment: data.get("segment"),
          bots: data.getAll("bots"),
        }),
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Unable to send request.");
      }

      form.reset();
      setStatus("success");
      setMessage(
        `Thanks. We’ll confirm your free on-site assessment — or call ${brand.phoneDisplay} now.`
      );
    } catch {
      setStatus("error");
      setMessage(
        `Something went wrong. Call ${brand.phoneDisplay} to book your assessment.`
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="sm:col-span-2"
        />
        <Field
          label="Property address"
          name="address"
          required
          autoComplete="street-address"
          className="sm:col-span-2"
        />
      </div>
      <fieldset className="grid gap-2">
        <legend className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          Property type
        </legend>
        <div className="flex flex-wrap gap-3">
          <RadioChip name="segment" value="residential" label="Residential" defaultChecked />
          <RadioChip name="segment" value="commercial" label="Commercial" />
        </div>
      </fieldset>
      <fieldset className="grid gap-2">
        <legend className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          Robots of interest
        </legend>
        <div className="flex flex-wrap gap-3">
          {services.map((service) => (
            <label
              key={service.id}
              className="inline-flex cursor-pointer items-center gap-2 border border-white/15 bg-white/5 px-3 py-2 text-sm has-[:checked]:border-accent has-[:checked]:text-accent"
            >
              <input
                type="checkbox"
                name="bots"
                value={service.id}
                defaultChecked={service.id === "lawn"}
                className="accent-accent"
              />
              {service.title}
            </label>
          ))}
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-accent-soft disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request free assessment"}
      </button>
      {message ? (
        <p
          role="status"
          className={`text-sm ${status === "error" ? "text-red-300" : "text-accent-soft"}`}
        >
          {message}
        </p>
      ) : (
        <p className="text-sm text-muted">
          No spam. We only use this to confirm your free on-site robotics assessment.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <label className={`grid gap-1.5 ${className}`}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white outline-none ring-accent/0 transition placeholder:text-white/30 focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </label>
  );
}

function RadioChip({
  name,
  value,
  label,
  defaultChecked,
}: {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 border border-white/15 bg-white/5 px-3 py-2 text-sm has-[:checked]:border-accent has-[:checked]:text-accent">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="accent-accent"
      />
      {label}
    </label>
  );
}
