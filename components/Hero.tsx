import Image from "next/image";
import { brand } from "@/lib/brand";

export function Hero() {
  return (
    <section className="bg-ink text-paper" aria-labelledby="hero-heading">
      <div className="slp-grid items-start gap-y-5 py-7 md:grid-rows-[auto_1fr] md:items-stretch md:gap-y-0 md:py-6 lg:min-h-[calc(100dvh-4.25rem)] lg:py-5 xl:py-7">
        <div className="col-span-12 flex flex-col gap-1.5 border-b border-hairline-dark pb-2.5 md:col-span-7 md:row-start-1 md:flex-row md:items-end md:justify-between md:pb-3">
          <p className="meta text-paper/70">Automated property maintenance</p>
          <p className="meta text-amber">Residential + Commercial / Texas</p>
        </div>
        <div className="col-span-12 flex flex-col justify-center md:col-span-7 md:row-start-2 md:pr-8 md:pt-5 lg:pt-4">
          <h1
            id="hero-heading"
            className="display display-hero max-w-[14ch] text-[clamp(2.4rem,9.4vw,6rem)]"
          >
            Routine maintenance shouldn&apos;t wait for service day.
          </h1>
          <p className="lead slp-measure mt-4 text-[17px] text-paper/80 md:mt-5 md:text-[18px]">
            Smart Lawn Pro installs and manages robotic systems for lawns, pools and floors.
            The equipment works on a schedule. We handle the setup, service and adjustments.
          </p>
          <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:mt-6">
            <a
              href="#assess"
              className="cta inline-flex min-h-12 items-center bg-amber px-6 py-3 text-[13px] text-ink uppercase"
            >
              Book a free on-site assessment
            </a>
            <a
              href={`tel:${brand.phoneTel}`}
              className="link-phone font-editorial text-[15px] text-paper/80"
            >
              Call {brand.phoneDisplay}
            </a>
          </div>
          <p className="trust mt-4 max-w-xl text-[13px] text-paper/50 lg:mt-5">
            USMC veteran owned / Family operated / Fully managed
          </p>
          <p className="mt-1.5 text-[14px] text-paper/50">
            Serving {brand.serviceArea}.
          </p>
        </div>
        <div className="img-frame relative col-span-12 min-h-[16rem] overflow-hidden bg-forest-deep md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1 md:min-h-full">
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
    </section>
  );
}
