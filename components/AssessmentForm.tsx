"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { brand, interestOptions } from "@/lib/brand";
import { LIMITS, readLead, validateLead, type FieldErrors } from "@/lib/lead";

type Status = "idle" | "submitting" | "success" | "error";

export function AssessmentForm() {
  const formId = "smart-lawn-pro-assessment";
  const startedInput = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const summaryId = useId();
  const successId = useId();

  useEffect(() => {
    if (startedInput.current) {
      startedInput.current.value = String(Date.now());
    }
  }, []);

  useEffect(() => {
    if (status === "success") {
      document.getElementById(successId)?.focus();
    }
  }, [status, successId]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const lead = readLead(new FormData(form));
    const nextErrors = validateLead(lead);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setFormError("Please correct the highlighted fields.");
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setFormError("");
    setStatus("submitting");

    try {
      const body = new FormData(form);
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "x-requested-with": "fetch",
        },
        body,
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        error?: string;
        errors?: FieldErrors;
      };

      if (response.status === 429) {
        setStatus("error");
        setFormError(payload.error || "Please wait a few minutes, or call us.");
        return;
      }

      if (!response.ok || !payload.ok) {
        if (payload.errors) {
          setErrors(payload.errors);
          setStatus("idle");
          setFormError("Please correct the highlighted fields.");
          return;
        }
        throw new Error(payload.error || "send_failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setFormError(`We could not send the request. Call ${brand.phoneDisplay}.`);
    }
  }

  if (status === "success") {
    return (
      <div
        id={successId}
        tabIndex={-1}
        className="border border-hairline-dark p-6 text-paper"
      >
        <p className="display-sub text-2xl">Request received.</p>
        <p className="mt-3 max-w-md text-[16px] text-paper/75">
          We&apos;ll use this information to contact you about your property assessment. You can
          also call {brand.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form
      id={formId}
      name={formId}
      method="post"
      action="/api/lead"
      onSubmit={onSubmit}
      noValidate
      className="grid min-w-0 gap-5"
    >
      <input ref={startedInput} type="hidden" name="form_started_at" defaultValue="" />
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Company website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {formError ? (
        <div
          id={summaryId}
          role="alert"
          className="border border-amber px-3 py-3 text-[14px] text-amber"
        >
          {formError}
        </div>
      ) : null}

      <Field
        id="full_name"
        name="full_name"
        label="Full name"
        autoComplete="name"
        required
        maxLength={LIMITS.full_name}
        error={errors.full_name}
      />
      <Field
        id="email"
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        required
        maxLength={LIMITS.email}
        error={errors.email}
      />
      <Field
        id="phone"
        name="phone"
        label="Phone"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        required
        maxLength={LIMITS.phone}
        error={errors.phone}
      />
      <Field
        id="property_address"
        name="property_address"
        label="Property address"
        autoComplete="street-address"
        required
        maxLength={LIMITS.property_address}
        error={errors.property_address}
      />

      <fieldset>
        <legend className="form-label text-paper/70">
          Property type <span className="text-amber">Required</span>
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {["Residential", "Commercial"].map((value) => (
            <label
              key={value}
              className="flex min-h-12 cursor-pointer items-center gap-3 border border-hairline-dark px-3 text-[15px] has-[:checked]:border-amber"
            >
              <input type="radio" name="property_type" value={value} required className="accent-amber" />
              {value}
            </label>
          ))}
        </div>
        {errors.property_type ? (
          <p className="mt-2 text-[13px] text-amber" role="alert">
            {errors.property_type}
          </p>
        ) : null}
      </fieldset>

      <fieldset>
        <legend className="form-label text-paper/70">
          Interested in <span className="text-amber">Required</span>
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {interestOptions.map((option) => (
            <label
              key={option.value}
              className="flex min-h-12 cursor-pointer items-center gap-3 border border-hairline-dark px-3 text-[15px] has-[:checked]:border-amber"
            >
              <input
                type="checkbox"
                name="services_interest"
                value={option.value}
                className="accent-amber"
              />
              {option.label}
            </label>
          ))}
        </div>
        {errors.services_interest ? (
          <p className="mt-2 text-[13px] text-amber" role="alert">
            {errors.services_interest}
          </p>
        ) : null}
      </fieldset>

      <label className="grid gap-2">
        <span className="form-label text-paper/70">Notes</span>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          maxLength={LIMITS.notes}
          className="w-full min-w-0 border border-hairline-dark bg-transparent px-3 py-2.5 text-[16px] text-paper"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="cta min-h-12 bg-amber px-6 text-[13px] text-ink uppercase disabled:opacity-60"
      >
        {status === "submitting" ? "Sending" : "Book my assessment"}
      </button>
      <p className="text-[14px] text-paper/65">
        We&apos;ll use this information to contact you about your property assessment.
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  inputMode,
  required,
  maxLength,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text";
  required?: boolean;
  maxLength?: number;
  error?: string;
}) {
  const errorId = `${id}-error`;
  return (
    <label className="grid gap-2">
      <span className="form-label text-paper/70">
        {label} {required ? <span className="text-amber">Required</span> : null}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        maxLength={maxLength}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`w-full min-w-0 border bg-transparent px-3 py-2.5 text-[16px] text-paper ${
          error ? "border-amber" : "border-hairline-dark"
        }`}
      />
      {error ? (
        <span id={errorId} role="alert" className="text-[13px] text-amber">
          {error}
        </span>
      ) : null}
    </label>
  );
}
