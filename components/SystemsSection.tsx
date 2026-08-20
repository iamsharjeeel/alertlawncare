import Image from "next/image";
import { systems } from "@/lib/brand";

const lawn = systems[0];
const pool = systems[1];
const floors = systems[2];

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

      <article id={lawn.id} className="mt-12 md:mt-16">
        <div className="slp-grid">
          <div className="relative col-span-12 aspect-[16/9] overflow-hidden bg-ink md:aspect-[21/8]">
            <Image
              src={lawn.image}
              alt={lawn.alt}
              fill
              sizes="100vw"
              className="img-grade object-cover object-[center_80%]"
            />
          </div>
        </div>
        <div className="slp-grid items-end gap-y-5 border-b border-hairline py-8 md:py-12">
          <p className="meta col-span-12 text-muted md:col-span-2">
            {lawn.index} / {lawn.label}
          </p>
          <h3 className="display-sub col-span-12 text-[clamp(2rem,3.2vw,3.5rem)] md:col-span-5">
            {lawn.title}
          </h3>
          <p className="slp-measure col-span-12 text-body md:col-span-5">{lawn.body}</p>
        </div>
      </article>

      <article id={pool.id} className="slp-grid items-center gap-y-6 border-b border-hairline py-10 md:py-16">
        <div className="col-span-12 md:col-span-5">
          <p className="meta text-muted">
            {pool.index} / {pool.label}
          </p>
          <h3 className="display-sub mt-4 text-[clamp(2rem,3vw,3.25rem)]">{pool.title}</h3>
          <p className="slp-measure mt-5 text-body">{pool.body}</p>
        </div>
        <div className="relative col-span-12 aspect-[4/3] overflow-hidden bg-ink md:col-span-6 md:col-start-7">
          <Image
            src={pool.image}
            alt={pool.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="img-editorial object-cover object-[65%_60%]"
          />
        </div>
      </article>

      <article id={floors.id} className="slp-grid items-start gap-y-6 py-10 md:py-14">
        <p className="meta col-span-12 text-muted">
          {floors.index} / {floors.label}
        </p>
        <div className="relative col-span-12 aspect-[4/3] overflow-hidden bg-ink md:col-span-3 md:aspect-[4/5]">
          <Image
            src={floors.image}
            alt={floors.alt}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="img-grade object-cover object-[25%_80%]"
          />
        </div>
        <div className="col-span-12 md:col-span-4">
          <h3 className="display-sub text-[clamp(1.75rem,2.6vw,2.6rem)]">{floors.title}</h3>
          <p className="mt-5 max-w-[34rem] text-body">{floors.body}</p>
        </div>
        <ul className="col-span-12 md:col-span-5">
          {floors.specs.map((spec, index) => (
            <li key={spec} className="flex gap-4 border-t border-hairline py-4 last:border-b">
              <span className="meta text-muted">0{index + 1}</span>
              <span className="text-[16px] text-body">{spec}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
