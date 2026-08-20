import Image from "next/image";
import { testimonials } from "@/lib/brand";

export function Testimonials() {
  return (
    <section id="team" className="bg-ink py-16 text-paper md:py-24" aria-labelledby="team-heading">
      <div className="slp-grid gap-y-6">
        <p className="meta col-span-12 text-paper/75 md:col-span-3">05 / The team</p>
        <div className="col-span-12 md:col-span-9">
          <h2 id="team-heading" className="display text-[clamp(2rem,4vw,5rem)]">
            Local service still matters when the equipment is autonomous.
          </h2>
          <p className="slp-measure mt-6 text-paper/80">
            Smart Lawn Pro is USMC veteran owned, family operated and built around managed service.
            Automation handles the repetitive work. People remain responsible for the property and the
            equipment.
          </p>
        </div>
      </div>
      <div className="slp-grid mt-12">
        <div className="relative col-span-12 aspect-[16/8] overflow-hidden bg-forest-deep md:aspect-[21/8]">
          <Image
            src="/images/service.jpg"
            alt="Technician walking a maintained lawn while a robotic mower works in the distance"
            fill
            sizes="100vw"
            className="img-service object-cover object-[center_40%]"
          />
        </div>
        <p className="meta col-span-12 mt-4 text-paper/75">Managed care / On-site assessment</p>
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
              <p className="text-[16px] leading-7 text-paper/80">&ldquo;{item.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="trust mt-6 text-[13px] text-paper/75">
              {item.name}
              <span className="font-editorial mt-1 block font-normal normal-case tracking-normal text-paper/70">
                {item.location}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
