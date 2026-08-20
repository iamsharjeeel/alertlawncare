import { operatingWeek } from "@/lib/brand";

export function EditorialStatement() {
  return (
    <section className="bg-ink text-paper" aria-labelledby="difference-heading">
      <div className="slp-grid py-20 md:py-32">
        <p className="meta col-span-12 text-paper/75 md:col-span-3">02 / The difference</p>
        <div className="col-span-12 md:col-span-9">
          <h2
            id="difference-heading"
            className="display display-hero max-w-[12ch] text-[clamp(2.6rem,6.6vw,7rem)]"
          >
            Consistency beats catch-up.
          </h2>
          <p className="mt-10 max-w-3xl text-[clamp(1.35rem,2.4vw,2rem)] leading-snug text-paper/80">
            The property spends less time waiting to be cut, cleaned or cleared.
          </p>
          <p className="slp-measure mt-6 text-[17px] leading-8 text-paper/75">
            A weekly visit creates a weekly reset. Automation spreads routine maintenance across the
            week, with smaller jobs happening more often.
          </p>
          <a href="#assess" className="cta-ghost mt-10 text-[13px] text-paper">
            Book a free on-site assessment
          </a>
        </div>
      </div>
      <OperatingSchedule />
    </section>
  );
}

function OperatingSchedule() {
  return (
    <div className="border-t border-hairline-dark" aria-label="Typical operating week">
      <div className="slp-grid py-12 md:py-16">
        <p className="meta col-span-12 text-paper/75 md:col-span-3">The week</p>
        <div className="col-span-12 md:col-span-9">
          <p className="display-sub text-[clamp(1.4rem,2.4vw,2.15rem)]">
            One visit versus a working week.
          </p>
          <p className="slp-measure mt-4 text-[16px] leading-7 text-paper/75">
            Traditional service concentrates the work on one day. Managed automation keeps lawn, pool
            and floor routines moving through the week.
          </p>
        </div>
        <div className="col-span-12 mt-10 overflow-x-auto">
          <div className="week-grid min-w-[36rem] items-center">
            <span className="meta py-3 text-paper/75">Day</span>
            {operatingWeek.days.map((day) => (
              <p key={day} className="meta py-3 text-center text-paper/75">
                {day}
              </p>
            ))}
          </div>
          {operatingWeek.rows.map((row) => (
            <div key={row.label} className="week-grid min-w-[36rem] items-center border-t border-hairline-dark">
              <p className="meta py-4 pr-3 text-paper/80">{row.label}</p>
              {row.active.map((on, index) => (
                <div
                  key={`${row.label}-${operatingWeek.days[index]}`}
                  className="flex justify-center py-4"
                  aria-label={`${row.label} ${operatingWeek.days[index]} ${on ? "scheduled" : "idle"}`}
                >
                  <span className={`block h-2.5 w-2.5 ${on ? "bg-paper" : "border border-hairline-dark"}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
