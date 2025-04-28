export const metadata = {
  title: "Inovalabs Technologies | Desenvolvimento Web, Mobile e IA",
  description:
    "Somos apaixonados por transformar ideias em soluções digitais robustas. Oferecemos serviços de desenvolvimento web, aplicativos móveis, IA e cloud computing com foco em qualidade e inovação.",
  alternates: {
    canonical: "https://front-site-inovalabs-technologies.vercel.app/",
  },
  openGraph: {
    siteName: "Inovalabs Technologies",
    title: "Inovalabs Technologies | Desenvolvimento Web, Mobile e IA",
    description:
      "Transformamos ideias em soluções digitais robustas com desenvolvimento web, aplicativos móveis e inteligência artificial para impulsionar seu negócio.",
    url: "https://front-site-inovalabs-technologies.vercel.app/",
    images: [
      {
        url: "/images/logo-inovalabs-banner.png",
        width: 1200,
        height: 630,
        alt: "Inovalabs Technologies - Soluções Digitais",
      },
    ],
  },
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  );
}
