"use client";

import { useEffect, useId, useState } from "react";
import { brand, nav } from "@/lib/brand";
import { Wordmark } from "@/components/Wordmark";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline-dark bg-ink text-paper">
      <div className="slp-grid items-center py-4">
        <a href="#top" className="col-span-8 md:col-span-3">
          <Wordmark />
        </a>
        <nav className="nav-type col-span-9 hidden items-center justify-end gap-7 text-[13px] md:col-start-4 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-paper/80 hover:text-paper">
              {item.label}
            </a>
          ))}
          <a href={`tel:${brand.phoneTel}`} className="text-paper/70">
            {brand.phoneDisplay}
          </a>
          <a href="#assess" className="cta bg-amber px-5 py-2.5 text-[12px] text-ink uppercase">
            Book an assessment
          </a>
        </nav>
        <div className="col-span-4 flex items-center justify-end gap-3 md:hidden">
          <a href="#assess" className="cta bg-amber px-4 py-2 text-[11px] text-ink uppercase">
            Book
          </a>
          <button
            type="button"
            className="font-editorial min-h-11 min-w-11 border border-hairline-dark px-2 text-[11px] font-semibold tracking-[0.14em] uppercase"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <div id={menuId} className="border-t border-hairline-dark bg-ink px-[var(--slp-margin)] py-6 md:hidden">
          <nav className="nav-type grid gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="min-h-11 py-3 text-lg text-paper"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={`tel:${brand.phoneTel}`} className="min-h-11 py-3 text-lg text-amber">
              {brand.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
