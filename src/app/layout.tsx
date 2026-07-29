import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

/**
 * Amenable is "Personal Use" only in the brandboard.
 * Nunito is a licensed commercial Google Font with a very similar
 * rounded geometric character, used as the site-wide Amenable substitute.
 */
const amenable = Nunito({
  variable: "--font-amenable",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "reformas Madrid",
    "construcción Madrid",
    "reformas inteligentes",
    "reformas ecológicas",
    "EFICASA",
    "reformas integrales",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/brand/EFICASA-Logo-Horizontal-Positivo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/brand/EFICASA-Logo-Horizontal-Positivo.png",
    apple: "/brand/EFICASA-Logo-Horizontal-Positivo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${amenable.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
