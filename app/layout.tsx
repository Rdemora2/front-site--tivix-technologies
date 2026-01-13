import type React from "react"
import "./css/globals.css"
import "./css/style.css"

import Script from "next/script"

import Header from "@/components/ui/header"
import CookieConsent from "@/components/cookie-consent"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  metadataBase: new URL("https://tivix.com.br/"),
  title: {
    default: "Tivix Technologies | Desenvolvimento Full Stack & IA",
    template: "%s | Tivix Technologies",
  },
  description:
    "Engenharia de software para empresas. Desenvolvemos sistemas web com React e Node.js, implementamos soluções de IA com GPT e LLMs, e automatizamos processos empresariais. São Paulo.",
  keywords: [
    "desenvolvimento full stack",
    "desenvolvimento full stack são paulo",
    "empresa de software",
    "inteligência artificial empresas",
    "chatbot ia empresa",
    "automação de processos rpa",
    "desenvolvimento react next.js",
    "sistemas web sob medida",
    "consultoria ia",
    "integração de sistemas api",
    "software house brasil",
  ],
  authors: [{ name: "Tivix Technologies", url: "https://tivix.com.br" }],
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
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://tivix.com.br/",
    siteName: "Tivix Technologies",
    title: "Tivix Technologies | Engenharia de Software & IA",
    description:
      "Desenvolvemos sistemas web robustos, implementamos IA aplicada e automatizamos processos. Stack moderna com React, Node.js e integração com LLMs.",
    images: [
      {
        url: "/images/logo-tivix-banner.png",
        width: 1200,
        height: 630,
        alt: "Tivix Technologies - Desenvolvimento Full Stack e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tivix Technologies | Full Stack & IA",
    description: "Engenharia de software, IA aplicada e automação para empresas.",
    images: ["/images/logo-tivix-banner.png"],
  },
  alternates: {
    canonical: "https://tivix.com.br/",
  },
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://tivix.com.br/#organization",
    name: "Tivix Technologies",
    url: "https://tivix.com.br/",
    logo: "https://tivix.com.br/images/logo-tivix-full.png",
    description:
      "Empresa de engenharia de software especializada em desenvolvimento full stack, inteligência artificial aplicada e automação de processos empresariais.",
    foundingDate: "2024",
    areaServed: { "@type": "Country", name: "Brasil" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contato@tivix.com.br",
      availableLanguage: "Portuguese",
    },
    sameAs: [
      "https://linkedin.com/company/tivix-technologies",
      "https://github.com/tivix-technologies",
      "https://instagram.com/tivixtech",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development",
    provider: { "@type": "Organization", name: "Tivix Technologies" },
    areaServed: "Brasil",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Desenvolvimento",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desenvolvimento Full Stack",
            description:
              "Sistemas web completos com React, Next.js, Node.js e TypeScript. Arquitetura escalável e código limpo.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Inteligência Artificial",
            description:
              "Implementação de LLMs, RAG, chatbots inteligentes e automação cognitiva com GPT-4 e modelos open source.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automação de Processos",
            description: "Workflows inteligentes, integração entre sistemas e eliminação de tarefas repetitivas.",
          },
        },
      ],
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é desenvolvimento full stack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Desenvolvimento full stack é a criação completa de aplicações web, desde a interface do usuário (frontend) até o servidor e banco de dados (backend). Utilizamos React e Next.js no frontend, Node.js no backend, e bancos como PostgreSQL e MongoDB para entregar sistemas completos e escaláveis.",
        },
      },
      {
        "@type": "Question",
        name: "Como a IA pode automatizar processos na minha empresa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Implementamos IA para automatizar atendimento com chatbots inteligentes que entendem contexto, processar documentos em escala, extrair dados automaticamente e criar workflows que tomam decisões baseadas em regras de negócio. Utilizamos tecnologias como GPT-4, LangChain e RAG.",
        },
      },
      {
        "@type": "Question",
        name: "Quais tecnologias vocês utilizam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trabalhamos com a stack moderna: React, Next.js e TypeScript no frontend; Node.js e Python no backend; PostgreSQL e MongoDB para dados; AWS e Vercel para infraestrutura; e OpenAI, Anthropic e modelos open source para IA.",
        },
      },
    ],
  }

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://a.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="preload" href="/fonts/Inter/InterVariable.woff2" as="font" type="font/woff2" crossOrigin="" />

        <Script
          id="clarity-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var consent = localStorage.getItem('cookie-consent');
                if (consent === 'all') {
                  (function(c,l,a,r,i,t,y){
                      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "rb0e17se05");
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-black text-neutral-100">
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>

        <WhatsAppButton />
        <CookieConsent />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </body>
    </html>
  )
}
