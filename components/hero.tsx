import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircuitBoard,
  Layers3,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ProofPoint = Readonly<{ value: string; label: string }>;
type SystemAccent = "mint" | "blue" | "violet" | "amber";
type SystemStage = Readonly<{
  icon: LucideIcon;
  label: string;
  detail: string;
  accent: SystemAccent;
}>;

const proof = [
  { value: "6", label: "portais migrados" },
  { value: "20M+", label: "requisições/mês" },
  { value: "0s", label: "downtime na migração" },
] as const satisfies readonly ProofPoint[];

const systemStages = [
  {
    icon: CircuitBoard,
    label: "Estratégia",
    detail: "objetivo + métrica",
    accent: "mint",
  },
  {
    icon: Layers3,
    label: "Produto",
    detail: "UX + engenharia",
    accent: "blue",
  },
  {
    icon: Workflow,
    label: "Automação",
    detail: "integrações + fluxo",
    accent: "violet",
  },
  {
    icon: Sparkles,
    label: "IA aplicada",
    detail: "dados + contexto",
    accent: "amber",
  },
] as const satisfies readonly SystemStage[];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-[4.75rem]">
      <div className="hero-mesh absolute inset-0 -z-20" />
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[40rem] max-w-6xl bg-[radial-gradient(circle_at_50%_0%,rgba(139,240,207,0.13),transparent_62%)]" />

      <div className="mx-auto grid min-h-[46rem] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8bf0cf]/20 bg-[#8bf0cf]/[0.06] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#a8f7dd]">
            <span className="size-1.5 rounded-full bg-[#8bf0cf] shadow-[0_0_14px_#8bf0cf]" />
            Software house · São Paulo + remoto
          </div>

          <h1 className="mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.5rem]">
            Tecnologia sob medida para negócios que precisam{" "}
            <span className="text-gradient">avançar.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Sites que convertem, sistemas que sustentam a operação, automações
            que eliminam gargalos e IA aplicada onde ela realmente gera valor.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contato" className="button-primary">
              Falar sobre seu projeto
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="#cases" className="button-secondary">
              Ver experiência comprovada
            </Link>
          </div>

          <p className="mt-5 flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
            <Check size={15} className="text-[#8bf0cf]" aria-hidden="true" />
            Diagnóstico direto, escopo transparente e contato com quem constrói.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[36rem] lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-14 -z-10 rounded-full bg-[#76a9ff]/10 blur-3xl" />
          <div className="rounded-[2rem] border border-white/10 bg-[#0a100d]/90 p-4 shadow-[0_36px_100px_rgba(0,0,0,0.55)] sm:p-6">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Tivix delivery system
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Da ideia à operação
                </p>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-[#8bf0cf]/15 bg-[#8bf0cf]/[0.06] px-3 py-1.5 text-[0.65rem] font-bold text-[#8bf0cf]">
                <span className="size-1.5 rounded-full bg-[#8bf0cf]" /> ativo
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {systemStages.map((item, index) => (
                <div
                  key={item.label}
                  className="system-card"
                  data-accent={item.accent}
                >
                  <div className="flex items-center justify-between">
                    <span className="system-icon">
                      <item.icon size={17} aria-hidden="true" />
                    </span>
                    <span className="text-[0.65rem] font-bold text-slate-600">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-5 text-sm font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-400">
                  Resultado de negócio
                </span>
                <span className="text-[#8bf0cf]">mensurável</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#8bf0cf] via-[#79c8ff] to-[#a58bff]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-white/[0.07] bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-[1.35fr_repeat(3,1fr)] sm:px-8">
          <p className="self-center text-xs font-bold uppercase leading-5 tracking-[0.16em] text-slate-500">
            Evidências da experiência
            <br className="hidden sm:block" /> da liderança técnica
          </p>
          {proof.map((item) => (
            <div
              key={item.label}
              className="border-white/[0.08] sm:border-l sm:pl-6"
            >
              <p className="text-2xl font-semibold tracking-tight text-white">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
