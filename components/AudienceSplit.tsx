import { commercialPoints, residentialPoints } from "@/lib/brand";

export function AudienceSplit() {
  return (
    <section className="bg-paper py-16 md:py-24" aria-labelledby="audience-heading">
      <div className="slp-grid gap-y-6">
        <p className="meta col-span-12 text-muted md:col-span-3">03 / Where it fits</p>
        <h2 id="audience-heading" className="display col-span-12 text-[clamp(2rem,4vw,5rem)] md:col-span-9">
          Homes and commercial sites.
        </h2>
      </div>
      <div className="slp-grid mt-12 border-t border-hairline">
        <div id="residential" className="col-span-12 py-10 md:col-span-6 md:border-r md:border-hairline md:pr-12 md:py-14">
          <p className="meta text-amber">Residential</p>
          <h3 className="display mt-4 text-[clamp(2rem,3vw,3.25rem)]">
            Fewer recurring chores on the calendar.
          </h3>
          <p className="slp-measure mt-5 text-body">
            We assess the property, choose the systems that make sense, install them and manage the
            setup. You get the benefit of automation without turning robot maintenance into another hobby.
          </p>
          <ul className="mt-8 grid gap-3 text-[16px] text-body">
            {residentialPoints.map((item) => (
              <li key={item} className="border-t border-hairline pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div id="commercial" className="col-span-12 py-10 md:col-span-6 md:pl-12 md:py-14">
          <p className="meta text-amber">Commercial</p>
          <h3 className="display mt-4 text-[clamp(2rem,3vw,3.25rem)]">
            Take repetitive maintenance off the staff task list.
          </h3>
          <p className="slp-measure mt-5 text-body">
            For commercial properties, hospitality spaces and facilities, we look for routine work that
            can be handled more consistently with automation. The assessment covers fit, operating
            schedule and where the numbers may make sense.
          </p>
          <ul className="mt-8 grid gap-3 text-[16px] text-body">
            {commercialPoints.map((item) => (
              <li key={item} className="border-t border-hairline pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
