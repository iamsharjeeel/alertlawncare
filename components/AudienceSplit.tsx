import { commercialPoints, residentialPoints } from "@/lib/brand";

export function AudienceSplit() {
  return (
    <section className="bg-paper py-20 md:py-28 lg:py-32" aria-labelledby="audience-heading">
      <div className="slp-grid gap-y-4 md:gap-y-5">
        <p className="meta col-span-12 text-muted">03 / Where it fits</p>
        <h2
          id="audience-heading"
          className="display col-span-12 text-[clamp(2.1rem,3.2vw+0.4rem,4.35rem)] lg:whitespace-nowrap"
        >
          Homes and commercial sites.
        </h2>
      </div>
      <div className="slp-grid mt-10 border-t border-hairline md:mt-14 lg:mt-16">
        <div
          id="residential"
          className="audience-pane col-span-12 py-10 md:col-span-6 md:border-r md:border-hairline md:pr-12 md:py-16 lg:pr-14 lg:py-[4.25rem]"
        >
          <p className="meta text-amber">Residential</p>
          <h3 className="display-sub mt-4 max-w-[16ch] text-[clamp(2rem,2.8vw,3.1rem)] md:mt-5">
            Fewer recurring chores on the calendar.
          </h3>
          <p className="slp-measure mt-4 text-[17px] leading-[1.7] text-body md:mt-5">
            We assess the property, choose the systems that make sense, install them and manage the
            setup. You get the benefit of automation without turning robot maintenance into another hobby.
          </p>
          <ul className="split-list mt-8 md:mt-10">
            {residentialPoints.map((item) => (
              <li key={item} className="split-row text-[16px] leading-snug">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          id="commercial"
          className="audience-pane col-span-12 py-10 md:col-span-6 md:pl-12 md:py-16 lg:pl-14 lg:py-[4.25rem]"
        >
          <p className="meta text-amber">Commercial</p>
          <h3 className="display-sub mt-4 max-w-[18ch] text-[clamp(2rem,2.8vw,3.1rem)] md:mt-5">
            Take repetitive maintenance off the staff task list.
          </h3>
          <p className="slp-measure mt-4 text-[17px] leading-[1.7] text-body md:mt-5">
            For commercial properties, hospitality spaces and facilities, we look for routine work that
            can be handled more consistently with automation. The assessment covers fit, operating
            schedule and where the numbers may make sense.
          </p>
          <ul className="split-list mt-8 md:mt-10">
            {commercialPoints.map((item) => (
              <li key={item} className="split-row text-[16px] leading-snug">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
