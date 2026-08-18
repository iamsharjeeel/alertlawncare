import { brand } from "@/lib/brand";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline text-[15px] font-semibold tracking-[0.12em] md:text-base ${className}`}>
      <span>{brand.wordmarkLead}</span>
      <span className="text-amber">{brand.wordmarkTld}</span>
    </span>
  );
}
