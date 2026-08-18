import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/thank-you", "/api/"] },
    sitemap: `${brand.url}/sitemap.xml`,
    host: brand.url,
  };
}
