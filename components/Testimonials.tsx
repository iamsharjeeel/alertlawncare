import { testimonials } from "@/lib/brand";

export function Testimonials() {
  return (
    <section id="team" className="bg-ink py-20 text-paper md:py-28 lg:py-32" aria-labelledby="team-heading">
      <div className="slp-grid gap-y-5">
        <p className="meta col-span-12 text-amber md:col-span-3">05 / The team</p>
        <div className="col-span-12 md:col-span-9">
          <h2 id="team-heading" className="display max-w-[16ch] text-[clamp(2rem,4vw,5rem)]">
            Local service still matters when the equipment is autonomous.
          </h2>
          <p className="slp-measure mt-6 text-[17px] leading-[1.7] text-paper/75 md:mt-7">
            Smart Lawn Pro is USMC veteran owned, family operated and built around managed service.
            Automation handles the repetitive work. People remain responsible for the property and the
            equipment.
          </p>
        </div>
      </div>
      <div className="slp-grid mt-12 items-stretch md:mt-16 lg:mt-[4.5rem]">
        <h3 className="col-span-12 mb-8 max-w-2xl text-[17px] font-medium tracking-[-0.01em] text-paper/70 md:mb-10">
          What customers say about the team behind Smart Lawn Pro.
        </h3>
        {testimonials.map((item) => (
          <figure key={item.name} className="testimonial col-span-12 mb-4 md:col-span-4 md:mb-0">
            <blockquote>
              <p className="text-[16px] leading-[1.75] text-paper/88">&ldquo;{item.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="trust mt-auto pt-8 text-[12px] text-paper/62">
              {item.name}
              <span className="font-editorial mt-1.5 block font-normal normal-case tracking-normal text-paper/45">
                {item.location}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
