import Link from "next/link";

import Brand from "@/components/brand";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="site-footer border-t border-white/[0.07] bg-[#040605]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 border-b border-white/[0.07] pb-10 md:grid-cols-[1.35fr_0.65fr_0.65fr]">
          <div className="max-w-md">
            <Brand />
            <p className="mt-5 text-sm leading-6 text-slate-500">
              Sites, sistemas, automações e IA aplicada com engenharia sênior do
              diagnóstico à operação.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
              Navegação
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <Link href="/servicos" className="transition hover:text-white">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/cases" className="transition hover:text-white">
                  Cases
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="transition hover:text-white">
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="transition hover:text-white"
                >
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
              Conexões
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  LinkedIn do fundador
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.founder.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  GitHub do fundador
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Tivix Technologies. Todos os direitos
            reservados.
          </p>
          <p>Projetos no Brasil e no exterior</p>
        </div>
      </div>
    </footer>
  );
}
