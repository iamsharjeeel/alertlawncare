export function EditorialStatement() {
  return (
    <section className="bg-forest-deep text-paper" aria-labelledby="difference-heading">
      <div className="slp-grid py-16 md:py-28">
        <p className="meta col-span-12 text-amber md:col-span-3">02 / The difference</p>
        <div className="col-span-12 md:col-span-9">
          <h2 id="difference-heading" className="display max-w-[12ch] text-[clamp(2.4rem,5vw,5rem)]">
            Consistency beats catch-up.
          </h2>
          <p className="slp-measure mt-7 text-[18px] leading-8 text-paper/80 md:mt-8">
            A weekly visit creates a weekly reset. Automation spreads routine maintenance across the
            week, with smaller jobs happening more often.
          </p>
          <blockquote className="quote-rule mt-12 max-w-3xl border-l-2 border-amber/80 pl-6">
            <p className="display-sub text-[clamp(1.6rem,3vw,2.75rem)] leading-[1.15] text-paper">
              The property spends less time waiting to be cut, cleaned or cleared.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
