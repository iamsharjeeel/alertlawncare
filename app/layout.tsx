import type { Metadata } from "next";
import { headers } from "next/headers";
import { connection } from "next/server";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import { GHLExternalTracking } from "@/components/GHLExternalTracking";
import { brand } from "@/lib/brand";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: "Smart Lawn Pro | Robotic Lawn, Pool & Floor Maintenance in Texas",
    template: `%s | ${brand.name}`,
  },
  description:
    "Smart Lawn Pro installs and manages robotic lawn, pool and floor systems for residential and commercial properties in Conroe, Montgomery, Willis and The Woodlands, Texas. Book a free on-site assessment.",
  applicationName: brand.name,
  alternates: {
    canonical: brand.url,
  },
  openGraph: {
    title: "Smart Lawn Pro | Robotic Lawn, Pool & Floor Maintenance in Texas",
    description:
      "Smart Lawn Pro installs and manages robotic lawn, pool and floor systems for residential and commercial properties in Conroe, Montgomery, Willis and The Woodlands, Texas. Book a free on-site assessment.",
    url: brand.url,
    siteName: brand.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Lawn Pro | Robotic Lawn, Pool & Floor Maintenance in Texas",
    description:
      "Smart Lawn Pro installs and manages robotic lawn, pool and floor systems for residential and commercial properties in Conroe, Montgomery, Willis and The Woodlands, Texas.",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  await connection();
  const headerStore = await headers();
  const nonce = headerStore.get("x-nonce") ?? undefined;

  return (
    <html lang="en" className={`${archivo.variable} ${ibmPlex.variable} h-full`}>
      <body className="min-h-full bg-paper font-sans text-ink antialiased">
        {children}
        <GHLExternalTracking nonce={nonce} />
      </body>
    </html>
  );
}
