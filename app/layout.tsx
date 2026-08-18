import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { brand } from "@/lib/brand";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : brand.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | Your Property Maintains Itself`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Three robots. One vendor. Every week covered. Automated lawn, pool, and floor cleaning for residential and commercial properties.",
  applicationName: brand.name,
  keywords: [
    "Smart Lawn Pro",
    "robotic lawn mower",
    "pool robot",
    "floor robot",
    "automated maintenance",
    "Conroe",
    "The Woodlands",
  ],
  openGraph: {
    title: `${brand.name} | Your Property Maintains Itself`,
    description:
      "Three robots. One vendor. Every week covered. Book a free on-site robotics assessment.",
    url: siteUrl,
    siteName: brand.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | Your Property Maintains Itself`,
    description: "Three robots. One vendor. Every week covered.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
