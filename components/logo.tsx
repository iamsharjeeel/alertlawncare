import { brand } from "@/lib/brand";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline tracking-[0.08em] ${className}`}>
      <span className="font-extrabold text-white">{brand.logoWord}</span>
      <span className="font-extrabold text-accent">{brand.logoTld}</span>
    </span>
  );
}
