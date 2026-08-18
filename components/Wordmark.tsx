import { brand } from "@/lib/brand";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`display inline-flex items-baseline text-[15px] tracking-[0.12em] md:text-base ${className}`}>
      <span className="font-medium">{brand.wordmarkLead}</span>
      <span className="font-medium text-amber">{brand.wordmarkTld}</span>
    </span>
  );
}
