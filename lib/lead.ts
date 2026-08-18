const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /[0-9]/;

export const LIMITS = {
  full_name: 100,
  email: 254,
  phone: 32,
  property_address: 200,
  notes: 1000,
  website: 200,
} as const;

export type LeadInput = {
  full_name: string;
  email: string;
  phone: string;
  property_address: string;
  property_type: string;
  services_interest: string[];
  notes: string;
  website: string;
  started_at: string;
};

export type FieldErrors = Partial<Record<keyof LeadInput, string>>;

function clip(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function readLead(source: FormData | Record<string, unknown>): LeadInput {
  const getAll = (key: string) => {
    if (source instanceof FormData) {
      return source.getAll(key).map((item) => String(item));
    }
    const value = source[key];
    if (Array.isArray(value)) return value.map((item) => String(item));
    if (typeof value === "string") return [value];
    return [];
  };

  const get = (key: string) => {
    if (source instanceof FormData) return String(source.get(key) || "");
    const value = source[key];
    return typeof value === "string" ? value : "";
  };

  return {
    full_name: clip(get("full_name"), LIMITS.full_name),
    email: clip(get("email"), LIMITS.email),
    phone: clip(get("phone"), LIMITS.phone),
    property_address: clip(get("property_address"), LIMITS.property_address),
    property_type: clip(get("property_type"), 20),
    services_interest: getAll("services_interest")
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 4),
    notes: clip(get("notes"), LIMITS.notes),
    website: clip(get("website"), LIMITS.website),
    started_at: clip(get("form_started_at"), 40),
  };
}

export function validateLead(lead: LeadInput): FieldErrors {
  const errors: FieldErrors = {};

  if (!lead.full_name) errors.full_name = "Enter your full name.";
  if (!lead.email) errors.email = "Enter your email.";
  else if (!EMAIL_RE.test(lead.email)) errors.email = "Enter a valid email.";
  if (!lead.phone) errors.phone = "Enter a phone number.";
  else if (!PHONE_RE.test(lead.phone) || lead.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Enter a phone number we can call.";
  }
  if (!lead.property_address) errors.property_address = "Enter the property address.";
  if (lead.property_type !== "Residential" && lead.property_type !== "Commercial") {
    errors.property_type = "Choose residential or commercial.";
  }
  if (lead.services_interest.length === 0) {
    errors.services_interest = "Choose at least one option.";
  }

  return errors;
}

export function isBotSubmission(lead: LeadInput) {
  if (lead.website) return true;
  const started = Number(lead.started_at);
  if (!Number.isFinite(started) || started <= 0) return false;
  const elapsed = Date.now() - started;
  if (elapsed < 2000) return true;
  if (elapsed > 1000 * 60 * 60 * 12) return true;
  return false;
}
