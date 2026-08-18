import { testimonials } from "@/lib/brand";

export function Testimonials() {
  return (
    <section id="team" className="bg-ink py-16 text-paper md:py-24" aria-labelledby="team-heading">
      <div className="slp-grid gap-y-6">
        <p className="meta col-span-12 text-amber md:col-span-3">05 / The team</p>
        <div className="col-span-12 md:col-span-9">
          <h2 id="team-heading" className="display text-[clamp(2rem,4vw,5rem)]">
            Local service still matters when the equipment is autonomous.
          </h2>
          <p className="slp-measure mt-6 text-paper/75">
            Smart Lawn Pro is USMC veteran owned, family operated and built around managed service.
            Automation handles the repetitive work. People remain responsible for the property and the
            equipment.
          </p>
        </div>
      </div>
      <div className="slp-grid mt-14">
        <h3 className="col-span-12 mb-8 max-w-2xl text-[18px] font-medium text-paper/80">
          What customers say about the team behind Smart Lawn Pro.
        </h3>
        {testimonials.map((item) => (
          <figure
            key={item.name}
            className="col-span-12 border-t border-hairline-dark py-8 md:col-span-4 md:border-t-0 md:border-l md:py-0 md:pl-6 first:md:border-l-0 first:md:pl-0"
          >
            <blockquote>
              <p className="text-[16px] leading-7 text-paper/85">&ldquo;{item.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-6 text-[13px] tracking-[0.08em] text-paper/55 uppercase">
              {item.name}
              <span className="block normal-case tracking-normal text-paper/45">{item.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
