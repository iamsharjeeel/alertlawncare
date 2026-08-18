import Image from "next/image";
import { systems } from "@/lib/brand";

export function SystemsSection() {
  return (
    <section id="systems" className="bg-paper py-16 md:py-24" aria-labelledby="systems-heading">
      <div className="slp-grid gap-y-6">
        <p className="meta col-span-12 text-muted md:col-span-3">01 / Three systems</p>
        <div className="col-span-12 md:col-span-9">
          <h2 id="systems-heading" className="display text-[clamp(2rem,4.4vw,5rem)]">
            Three maintenance jobs. One point of contact.
          </h2>
          <p className="slp-measure mt-6 text-body">
            Smart Lawn Pro matches the equipment to the property, configures it for the job, and stays
            involved after installation. Start with one system or assess the whole property.
          </p>
        </div>
      </div>
      <div className="mt-12 md:mt-16">
        {systems.map((system, index) => (
          <article
            key={system.id}
            id={system.id}
            className="slp-grid items-center gap-y-6 border-t border-hairline py-10 md:py-14"
          >
            <div
              className={`relative col-span-12 aspect-[4/3] overflow-hidden bg-ink md:col-span-5 ${
                index % 2 === 1 ? "md:col-start-8" : "md:col-start-1"
              }`}
            >
              <Image
                src={system.image}
                alt={system.alt}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="img-editorial object-cover"
              />
            </div>
            <div
              className={`col-span-12 md:col-span-6 ${
                index % 2 === 1 ? "md:col-start-1 md:row-start-1" : "md:col-start-7"
              }`}
            >
              <p className="meta text-amber">
                {system.index} {system.label}
              </p>
              <h3 className="display-sub mt-4 text-[clamp(2rem,3vw,3.25rem)]">{system.title}</h3>
              <p className="slp-measure mt-5 text-body">{system.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
