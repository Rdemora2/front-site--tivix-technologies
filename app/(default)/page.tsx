import type { Metadata } from "next";

import CaseStudies from "@/components/case-studies";
import Credibility from "@/components/credibility";
import CtaSection from "@/components/cta-section";
import Features from "@/components/features";
import Hero from "@/components/hero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Ideias ambiciosas. Software à altura.",
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CaseStudies />
      <Credibility />
      <CtaSection />
    </>
  );
}
