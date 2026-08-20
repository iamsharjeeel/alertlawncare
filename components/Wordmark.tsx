import { brand } from "@/lib/brand";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display inline-flex items-baseline text-[15px] font-bold tracking-[0.14em] md:text-base ${className}`}>
      <span>{brand.wordmarkLead}</span>
      <span className="text-amber">{brand.wordmarkTld}</span>
    </span>
  );
}
