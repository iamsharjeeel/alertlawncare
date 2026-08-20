import { processSteps } from "@/lib/brand";

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-hairline bg-paper py-16 md:py-24" aria-labelledby="process-heading">
      <div className="slp-grid gap-y-6">
        <p className="meta col-span-12 text-muted md:col-span-3">04 / The process</p>
        <div className="col-span-12 md:col-span-9">
          <h2 id="process-heading" className="display text-[clamp(2rem,4.4vw,5rem)]">
            Start with the property, not the robot.
          </h2>
        </div>
      </div>
      <ol className="slp-grid mt-12 md:mt-16">
        {processSteps.map((step) => (
          <li
            key={step.index}
            className="col-span-12 border-t border-hairline py-8 md:col-span-3 md:border-t-0 md:border-l md:py-0 md:pl-5 first:md:border-l-0 first:md:pl-0"
          >
            <p className="meta text-muted">{step.index}</p>
            <h3 className="display-sub mt-4 text-[1.65rem]">{step.title}</h3>
            <p className="mt-4 max-w-[28ch] text-[16px] leading-7 text-body">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
