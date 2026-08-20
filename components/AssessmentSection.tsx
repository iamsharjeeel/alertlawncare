import { AssessmentForm } from "@/components/AssessmentForm";
import { brand } from "@/lib/brand";

export function AssessmentSection() {
  return (
    <section id="assess" className="bg-forest text-paper" aria-labelledby="assess-heading">
      <div className="slp-grid items-start gap-y-10 py-16 md:py-24">
        <div className="col-span-12 min-w-0 md:col-span-6 md:pr-8">
          <p className="meta text-paper/75">07 / Assessment</p>
          <h2 id="assess-heading" className="display mt-4 max-w-[14ch] text-[clamp(2.2rem,4.6vw,5rem)]">
            See what should be automated on your property.
          </h2>
          <p className="slp-measure mt-6 text-[18px] leading-8 text-paper/80">
            Book a free on-site robotics assessment. We&apos;ll walk the property, identify the
            recurring work that makes sense to automate, and recommend the setup from there.
          </p>
          <a
            href={`tel:${brand.phoneTel}`}
            className="cta-ghost mt-10 text-[clamp(1.05rem,2vw,1.35rem)] text-paper"
          >
            {brand.phoneDisplay}
          </a>
          <p className="font-editorial mt-5 text-[15px] font-semibold tracking-[0.12em] text-paper/80 uppercase">
            {brand.domain}
          </p>
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
