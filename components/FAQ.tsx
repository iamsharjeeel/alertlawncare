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
            <details key={item.q} className="group border-t border-hairline last:border-b">
              <summary className="flex min-h-14 cursor-pointer list-none items-baseline justify-between gap-6 py-5 text-left">
                <span className="text-[18px] font-medium">{item.q}</span>
                <span className="meta text-muted group-open:hidden">Open</span>
                <span className="meta hidden text-muted group-open:inline">Close</span>
              </summary>
              <p className="slp-measure pb-6 text-body">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
