import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type React from "react";

import AnalyticsConsent from "@/components/analytics-consent";
import CookieConsent from "@/components/cookie-consent";
import WhatsAppButton from "@/components/whatsapp-button";
import Header from "@/components/ui/header";
import { siteConfig } from "@/lib/site-config";

import "./css/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tivix Technologies | Engenharia digital de alto nível",
    template: "%s | Tivix Technologies",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "technology",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Tivix Technologies | Ideias ambiciosas. Software à altura.",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tivix Technologies | Ideias ambiciosas. Software à altura.",
    description: siteConfig.description,
  },
  alternates: { canonical: siteConfig.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07100e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: { "@type": "Country", name: "Brasil" },
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      url: siteConfig.founder.portfolio,
      sameAs: [siteConfig.founder.linkedin, siteConfig.founder.github],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.whatsappLabel,
      availableLanguage: "Portuguese",
    },
  };
  const serializedOrganizationSchema = JSON.stringify(
    organizationSchema,
  ).replace(/</g, "\\u003c");

  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#050806] font-sans text-slate-100 antialiased">
        <a
          href="#conteudo"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition focus:translate-y-0"
        >
          Ir para o conteúdo
        </a>
        <div className="min-h-screen overflow-x-clip">
          <Header />
          {children}
        </div>
        <WhatsAppButton />
        <CookieConsent />
        <AnalyticsConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializedOrganizationSchema }}
        />
      </body>
    </html>
  );
}
