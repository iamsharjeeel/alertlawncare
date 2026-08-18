import { AssessmentForm } from "@/components/AssessmentForm";
import { brand } from "@/lib/brand";

export function AssessmentSection() {
  return (
    <section id="assess" className="bg-forest text-paper" aria-labelledby="assess-heading">
      <div className="slp-grid items-start gap-y-10 py-16 md:py-24">
        <div className="col-span-12 min-w-0 md:col-span-6 md:pr-8">
          <h2 id="assess-heading" className="display max-w-[14ch] text-[clamp(2.2rem,4.6vw,5rem)]">
            See what should be automated on your property.
          </h2>
          <p className="slp-measure mt-6 text-[18px] leading-8 text-paper/80">
            Book a free on-site robotics assessment. We&apos;ll walk the property, identify the
            recurring work that makes sense to automate, and recommend the setup from there.
          </p>
          <a
            href={`tel:${brand.phoneTel}`}
            className="font-editorial mt-8 inline-block text-[clamp(1.8rem,3vw,2.75rem)] font-medium tracking-tight text-amber"
          >
            {brand.phoneDisplay}
          </a>
          <p className="font-editorial mt-3 text-[15px] font-semibold tracking-[0.12em] uppercase">{brand.domain}</p>
        </div>
        <div className="col-span-12 min-w-0 md:col-span-6">
          <h3 className="display-sub text-2xl">Book your free assessment</h3>
          <div className="mt-6">
            <AssessmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
