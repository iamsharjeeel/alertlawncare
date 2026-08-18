import { AssessmentSection } from "@/components/AssessmentSection";
import { AudienceSplit } from "@/components/AudienceSplit";
import { EditorialStatement } from "@/components/EditorialStatement";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSection } from "@/components/ProcessSection";
import { SystemsSection } from "@/components/SystemsSection";
import { Testimonials } from "@/components/Testimonials";
import { TrustStrip } from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <JsonLd />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <div id="top">
          <Hero />
        </div>
        <TrustStrip />
        <SystemsSection />
        <EditorialStatement />
        <AudienceSplit />
        <ProcessSection />
        <Testimonials />
        <FAQ />
        <AssessmentSection />
      </main>
      <Footer />
    </>
  );
}
