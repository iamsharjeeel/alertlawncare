import Image from "next/image";
import { AssessmentForm } from "@/components/assessment-form";
import { Logo } from "@/components/logo";
import { brand, bullets, credentials, services } from "@/lib/brand";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    url: brand.url,
    telephone: brand.phoneTel,
    email: brand.email,
    areaServed: brand.serviceArea,
    description:
      "Automated lawn, pool, and floor cleaning for residential and commercial properties.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-full bg-background">
        <header className="sticky top-0 z-30 border-b border-white/10 bg-background/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-5 py-4 md:px-8">
            <a href="#top" className="text-[15px] md:text-lg">
              <Logo />
            </a>
            <div className="flex items-center gap-3 md:gap-5">
              <a
                href={`tel:${brand.phoneTel}`}
                className="hidden text-sm font-semibold tracking-wide text-accent sm:inline"
              >
                {brand.phoneDisplay}
              </a>
              <a
                href="#assess"
                className="bg-accent px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-black md:px-4"
              >
                Book assessment
              </a>
            </div>
          </div>
        </header>

        <main id="top">
          <section className="mx-auto max-w-[1120px] px-5 pt-10 md:px-8 md:pt-16">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90">
                {brand.taglineLeft}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                {brand.taglineRight}
              </p>
            </div>

            <div className="py-12 md:py-20">
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                {brand.headlineLead}{" "}
                <span className="text-accent">{brand.headlineAccent}</span>
              </h1>
              <p className="mt-6 inline-block border-b-2 border-accent pb-2 text-lg text-white md:text-xl">
                {brand.subhead}
              </p>
              <p className="mt-6 max-w-xl text-sm text-muted">
                Veteran-owned automated maintenance for {brand.serviceArea}.
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-[1120px] px-5 md:px-8">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {services.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="grid items-center gap-6 py-8 md:grid-cols-[minmax(0,280px)_1fr] md:gap-12 md:py-10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 280px"
                      className="object-cover grayscale contrast-125"
                      priority={service.id === "lawn"}
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-accent md:text-3xl">
                      {service.num}
                    </p>
                    <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-[15px] leading-7 text-white/80">
                      {service.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-[1120px] px-5 py-14 md:px-8 md:py-20">
            <div className="flex gap-5 md:gap-8">
              <div className="w-1.5 shrink-0 bg-accent" />
              <div className="max-w-3xl">
                <p className="text-xl font-bold leading-snug md:text-2xl">
                  Curb appeal drives buyer perception and resale value.
                </p>
                <p className="mt-3 text-lg leading-relaxed text-white/80">
                  Automated maintenance protects that value{" "}
                  <span className="font-semibold text-accent">every single day</span>, on
                  your schedule.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-[1120px] px-5 pb-6 md:px-8">
            <div className="grid gap-10 border-t border-white/20 pt-12 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
                  Residential
                </h2>
                <p className="mt-4 text-xl font-bold leading-snug">
                  Automate your lawn, pool, and floor cleaning.
                </p>
                <p className="mt-3 text-white/75">
                  Get a free consultation and a robot that works on your schedule.
                </p>
              </div>
              <div className="md:border-l md:border-white/20 md:pl-16">
                <h2 className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
                  Commercial
                </h2>
                <p className="mt-4 text-xl font-bold leading-snug">
                  Scale operations, cut costs, and increase ROI.
                </p>
                <p className="mt-3 text-white/75">
                  ROI-driven robotic solutions for commercial properties, hospitality,
                  and industrial facilities.
                </p>
              </div>
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                  <span className="mt-1 inline-block size-2.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mx-auto max-w-[1120px] px-5 py-12 md:px-8">
            <div className="grid divide-y divide-white/15 border border-white/15 md:grid-cols-3 md:divide-x md:divide-y-0">
              {credentials.map((item) => (
                <p
                  key={item}
                  className="px-4 py-5 text-center text-[12px] font-semibold uppercase tracking-[0.18em]"
                >
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section id="assess" className="bg-forest">
            <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-start md:px-8 md:py-16">
              <div>
                <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
                  Book your free on-site robotics assessment.
                </h2>
                <a
                  href={`tel:${brand.phoneTel}`}
                  className="mt-6 inline-block text-3xl font-extrabold text-accent md:text-4xl"
                >
                  {brand.phoneDisplay}
                </a>
                <p className="mt-3 text-lg font-semibold tracking-wide">{brand.domain}</p>
                <p className="mt-6 max-w-md text-sm text-white/75">
                  We’ll match the right lawn, pool, and floor robots to your property —
                  then install, optimize, and fully manage them.
                </p>
              </div>
              <div className="border border-white/15 bg-forest-deep p-5 md:p-6">
                <AssessmentForm />
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-background">
          <div className="mx-auto flex max-w-[1120px] flex-col gap-3 px-5 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
            <p>
              © {new Date().getFullYear()} {brand.name}. Formerly Alert Lawn Care.
            </p>
            <p>{brand.serviceArea}</p>
          </div>
        </footer>
      </div>
    </>
  );
}
