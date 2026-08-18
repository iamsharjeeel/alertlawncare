import Image from "next/image";
import { brand } from "@/lib/brand";

export function Hero() {
  return (
    <section className="bg-ink text-paper" aria-labelledby="hero-heading">
      <div className="slp-grid items-end gap-y-10 py-12 md:py-20 lg:py-24">
        <div className="col-span-12 flex flex-col gap-3 border-b border-hairline-dark pb-5 md:col-span-7 md:flex-row md:items-end md:justify-between">
          <p className="meta text-paper/80">Automated property maintenance</p>
          <p className="meta text-amber">Residential + Commercial / Texas</p>
        </div>
        <div className="col-span-12 md:col-span-7 md:pr-8">
          <h1
            id="hero-heading"
            className="display display-hero max-w-[14ch] text-[clamp(2.4rem,10vw,8rem)]"
          >
            Routine maintenance shouldn&apos;t wait for service day.
          </h1>
          <p className="lead slp-measure mt-8 text-[17px] text-paper/80 md:text-[18px]">
            Smart Lawn Pro installs and manages robotic systems for lawns, pools and floors.
            The equipment works on a schedule. We handle the setup, service and adjustments.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#assess"
              className="cta inline-flex min-h-12 items-center bg-amber px-6 py-3 text-[13px] text-ink uppercase"
            >
              Book a free on-site assessment
            </a>
            <a href={`tel:${brand.phoneTel}`} className="font-editorial text-[15px] text-paper/80">
              Call {brand.phoneDisplay}
            </a>
          </div>
          <p className="trust mt-8 max-w-xl text-[13px] text-paper/55">
            USMC veteran owned / Family operated / Fully managed
          </p>
          <p className="mt-3 text-[14px] text-paper/55">
            Serving {brand.serviceArea}.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden bg-forest-deep">
            <Image
              src="/images/lawn.jpg"
              alt="Robotic mower working across a lawn"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="img-editorial object-cover object-[center_30%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
