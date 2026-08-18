import { brand, faqs, systems } from "@/lib/brand";

export function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: brand.name,
      url: brand.url,
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: brand.name,
      url: brand.url,
      telephone: brand.phoneTel,
      areaServed: [
        { "@type": "City", name: "Conroe", addressRegion: "TX" },
        { "@type": "City", name: "Montgomery", addressRegion: "TX" },
        { "@type": "City", name: "Willis", addressRegion: "TX" },
        { "@type": "City", name: "The Woodlands", addressRegion: "TX" },
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: "TX",
        addressCountry: "US",
      },
      description:
        "Smart Lawn Pro installs and manages robotic lawn, pool and floor systems for residential and commercial properties.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: brand.name,
      url: brand.url,
      telephone: brand.phoneTel,
    },
    ...systems.map((system) => ({
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${system.label} robotic maintenance`,
      provider: { "@type": "LocalBusiness", name: brand.name, url: brand.url },
      areaServed: brand.serviceArea,
      description: system.body,
    })),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
