import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Conte seu desafio para a Tivix Technologies e receba um caminho claro para sites, sistemas, automações ou IA aplicada.",
  alternates: { canonical: `${siteConfig.url}/contato` },
};

import ContatoClient from "./contato-client";

export default function ContatoPage() {
  return <ContatoClient />;
}
