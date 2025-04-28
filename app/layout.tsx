import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://inovalabs.com.br"),
  title: {
    default: "Inovalabs Technologies | Desenvolvimento Web, Mobile e IA",
    template: "%s | Inovalabs Technologies",
  },
  description:
    "Transformamos ideias em soluções digitais robustas com desenvolvimento web, aplicativos móveis, IA e cloud computing para impulsionar seu negócio.",
  keywords: [
    "desenvolvimento web",
    "aplicativos móveis",
    "inteligência artificial",
    "cloud computing",
    "software house",
    "desenvolvimento de software",
    "tecnologia",
    "inovação digital",
  ],
  authors: [
    { name: "Roberto Zarzur", url: "https://linkedin.com/in/robertozarzur" },
  ],
  creator: "Inovalabs Technologies",
  publisher: "Inovalabs Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://inovalabs.com.br",
    siteName: "Inovalabs Technologies",
    title: "Inovalabs Technologies | Soluções Digitais Inovadoras",
    description:
      "Desenvolvemos soluções tecnológicas de ponta para transformar ideias em produtos digitais inovadores. Conheça nossos serviços.",
    images: [
      {
        url: "/images/logo-inovalabs-banner.png",
        width: 1200,
        height: 630,
        alt: "Inovalabs Technologies",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "https://inovalabs.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Inovalabs Technologies",
              url: "https://inovalabs.com.br",
              logo: "https://inovalabs.com.br/images/logo-inovalabs-full.png",
              description:
                "Desenvolvimento de soluções tecnológicas personalizadas com foco em web, mobile e inteligência artificial.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Owner",
                name: "Roberto",
                email: "robertomoraeszar@gmail.com",
                telephone: "+55-11-99999-9999",
              },
              sameAs: [
                "https://www.linkedin.com/company/inovalabs-technologies",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
