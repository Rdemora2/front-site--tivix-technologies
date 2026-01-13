export const metadata = {
  title: "Tivix Technologies | Desenvolvimento Full Stack, IA e Automação",
  description:
    "Engenharia de software para empresas. Sistemas web robustos com React e Node.js, soluções de IA com LLMs e automação de processos. São Paulo.",
  alternates: {
    canonical: "https://tivix.com.br/",
  },
  openGraph: {
    siteName: "Tivix Technologies",
    title: "Tivix Technologies | Engenharia de Software & IA",
    description:
      "Transformamos código em resultados. Desenvolvimento full stack, inteligência artificial aplicada e automação de processos para empresas.",
    url: "https://tivix.com.br/",
    images: [
      {
        url: "/images/logo-tivix-banner.png",
        width: 1200,
        height: 630,
        alt: "Tivix Technologies",
      },
    ],
  },
}

import Hero from "@/components/hero"
import Features from "@/components/features"
import Zigzag from "@/components/zigzag"
import Credibility from "@/components/credibility"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Credibility />
      <Zigzag />
      <CtaSection />
    </>
  )
}
