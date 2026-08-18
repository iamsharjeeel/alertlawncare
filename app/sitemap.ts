import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : brand.url;
  return [{ url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
