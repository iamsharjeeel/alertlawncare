import { brand, nav } from "@/lib/brand";
import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-hairline-dark bg-ink text-paper">
      <div className="slp-grid gap-y-8 py-10 md:py-14">
        <div className="col-span-12 md:col-span-5">
          <Wordmark />
          <p className="slp-measure mt-4 text-[15px] text-paper/65">
            Automated property maintenance for residential and commercial properties. Serving{" "}
            {brand.serviceArea}.
          </p>
        </div>
        <nav className="nav-type col-span-12 flex flex-wrap gap-x-6 gap-y-3 text-[14px] md:col-span-4">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="col-span-12 md:col-span-3 md:text-right">
          <a href={`tel:${brand.phoneTel}`} className="link-phone-accent font-editorial text-amber">
            {brand.phoneDisplay}
          </a>
          <p className="font-editorial mt-2 text-[14px] text-paper/60">{brand.domain}</p>
        </div>
        <p className="font-editorial col-span-12 border-t border-hairline-dark pt-6 text-[13px] text-paper/45">
          © {new Date().getFullYear()} {brand.name}.
        </p>
      </div>
    </footer>
  );
}
