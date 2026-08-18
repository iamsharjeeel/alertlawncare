import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.name,
    short_name: "SLP",
    description: "Automated property maintenance for residential and commercial properties.",
    start_url: "/",
    display: "browser",
    background_color: "#f2f1ee",
    theme_color: "#184f3b",
  };
}
