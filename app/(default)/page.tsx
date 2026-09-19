import type { Metadata } from "next";

import CaseStudies from "@/components/case-studies";
import Credibility from "@/components/credibility";
import CtaSection from "@/components/cta-section";
import Faq, { faqs } from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Process from "@/components/process";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Software, automação e IA aplicada",
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const serializedFaqSchema = JSON.stringify(faqSchema).replace(
    /</g,
    "\\u003c",
  );

  return (
    <>
      <Hero />
      <Features />
      <CaseStudies />
      <Process />
      <Credibility />
      <Faq />
      <CtaSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializedFaqSchema }}
      />
    </>
  );
}
