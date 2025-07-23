import "./css/style.css";

import Script from "next/script";

import Header from "@/components/ui/header";

export const metadata = {
  metadataBase: new URL("https://tivix.com.br/"),
  title: {
    default: "Tivix Technologies | Desenvolvimento Web, Mobile e IA",
    template: "%s | Tivix Technologies",
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
  creator: "Tivix Technologies",
  publisher: "Tivix Technologies",
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
    url: "https://tivix.com.br/",
    siteName: "Tivix Technologies",
    title: "Tivix Technologies | Soluções Digitais Inovadoras",
    description:
      "Desenvolvemos soluções tecnológicas de ponta para transformar ideias em produtos digitais inovadores. Conheça nossos serviços.",
    images: [
      {
        url: "/images/logo-tivix-banner.png",
        width: 1200,
        height: 630,
        alt: "Tivix Technologies",
      },
    ],
  },
  alternates: {
    canonical: "https://tivix.com.br/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect para origens externas críticas */}
        <link rel="preconnect" href="https://a.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        {/* Preload das fontes locais críticas para melhor LCP */}
        <link
          rel="preload"
          href="/fonts/Inter/InterVariable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        {/* Microsoft Clarity - adicionado com afterInteractive para melhor performance */}
        <Script
          id="clarity-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "rb0e17se05");
            `,
          }}
        />
      </head>
      <body className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
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
              name: "Tivix Technologies",
              url: "https://tivix.com.br/",
              logo: "https://tivix.com.br/images/logo-tivix-full.png",
              description:
                "Desenvolvimento de soluções tecnológicas personalizadas com foco em web, mobile e inteligência artificial.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Owner",
                name: "Roberto",
                email: "robertomoraeszar@gmail.com",
                telephone: "+55-11-99999-9999",
              },
              sameAs: ["https://www.linkedin.com/company/tivix-technologies"],
            }),
          }}
        />
      </body>
    </html>
  );
}
