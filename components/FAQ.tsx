import { faqs } from "@/lib/brand";

export function FAQ() {
  return (
    <section id="faq" className="border-t border-hairline bg-paper py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="slp-grid gap-y-6">
        <p className="meta col-span-12 text-muted md:col-span-3">06 / Before the assessment</p>
        <div className="col-span-12 md:col-span-9">
          <h2 id="faq-heading" className="display text-[clamp(2rem,4vw,5rem)]">
            A few practical questions.
          </h2>
        </div>
      </div>
      <div className="slp-grid mt-10">
        <div className="col-span-12 md:col-span-10 md:col-start-3">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item group border-t border-hairline last:border-b">
              <summary className="flex min-h-14 cursor-pointer list-none items-baseline justify-between gap-6 px-2 py-5 text-left md:px-3">
                <span className="text-[18px] font-medium tracking-[-0.01em]">{item.q}</span>
                <span className="meta shrink-0 text-muted group-open:hidden">Open</span>
                <span className="meta hidden shrink-0 text-muted group-open:inline">Close</span>
              </summary>
              <p className="slp-measure px-2 pb-6 text-[17px] leading-7 text-body md:px-3">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
