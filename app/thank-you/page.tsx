import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Assessment received",
  robots: { index: false, follow: false },
  alternates: { canonical: `${brand.url}/thank-you` },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const params = await searchParams;
  const busy = params.status === "busy";
  const error = params.status === "error";

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="bg-paper">
        <div className="slp-grid py-20 md:py-28">
          <div className="col-span-12 md:col-span-8">
            <h1 className="display text-[clamp(2.4rem,5vw,5rem)]">
              {error ? "We could not send that just now." : busy ? "Please wait a moment." : "Request received."}
            </h1>
            <p className="slp-measure mt-6 text-body">
              {error || busy
                ? `Call ${brand.phoneDisplay} and we will set up the assessment from there.`
                : `We'll use this information to contact you about your property assessment. You can also call ${brand.phoneDisplay}.`}
            </p>
            <Link href="/" className="cta-ghost mt-10 text-[13px] text-ink">
              Back to Smart Lawn Pro
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
