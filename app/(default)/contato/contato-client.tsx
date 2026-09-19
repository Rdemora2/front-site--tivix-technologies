"use client";

import type { SubmitEvent } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

import { siteConfig, whatsappUrl } from "@/lib/site-config";

type ProjectType = "site" | "system" | "automation" | "ai" | "guidance";

type ContactBrief = Readonly<{
  name: string;
  company: string | null;
  projectType: ProjectType;
  message: string;
}>;

type ContactFormControls = Readonly<{
  name: HTMLInputElement;
  company: HTMLInputElement;
  projectType: HTMLSelectElement;
  message: HTMLTextAreaElement;
}>;

const projectTypeLabels = {
  site: "Site ou landing page",
  system: "Sistema ou produto web",
  automation: "Automação e integrações",
  ai: "Inteligência artificial",
  guidance: "Preciso de orientação",
} as const satisfies { readonly [Key in ProjectType]: string };

const projectTypeOptions = [
  { value: "site", label: projectTypeLabels.site },
  { value: "system", label: projectTypeLabels.system },
  { value: "automation", label: projectTypeLabels.automation },
  { value: "ai", label: projectTypeLabels.ai },
  { value: "guidance", label: projectTypeLabels.guidance },
] as const satisfies readonly Readonly<{ value: ProjectType; label: string }>[];

const nextSteps = [
  "Entendemos objetivo, contexto e urgência.",
  "Avaliamos o melhor caminho técnico.",
  "Você recebe uma proposta clara antes de qualquer execução.",
] as const;

function isProjectType(value: string): value is ProjectType {
  return value in projectTypeLabels;
}

function readContactFormControls(
  form: HTMLFormElement,
): ContactFormControls | null {
  const name = form.elements.namedItem("name");
  const company = form.elements.namedItem("company");
  const projectType = form.elements.namedItem("projectType");
  const message = form.elements.namedItem("message");

  if (
    !(name instanceof HTMLInputElement) ||
    !(company instanceof HTMLInputElement) ||
    !(projectType instanceof HTMLSelectElement) ||
    !(message instanceof HTMLTextAreaElement)
  ) {
    return null;
  }

  return { name, company, projectType, message };
}

function buildWhatsappMessage(brief: ContactBrief): string {
  return [
    "Olá! Vim pelo site da Tivix e quero conversar sobre um projeto.",
    "",
    `Nome: ${brief.name}`,
    `Empresa: ${brief.company ?? "Não informada"}`,
    `Tipo de projeto: ${projectTypeLabels[brief.projectType]}`,
    "",
    "Contexto:",
    brief.message,
  ].join("\n");
}

export default function ContatoClient() {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const elements = readContactFormControls(event.currentTarget);
    if (!elements) return;

    const projectType = elements.projectType.value;

    if (!isProjectType(projectType)) {
      elements.projectType.setCustomValidity(
        "Selecione um tipo de projeto válido.",
      );
      elements.projectType.reportValidity();
      return;
    }

    elements.projectType.setCustomValidity("");
    const company = elements.company.value.trim();
    const brief: ContactBrief = {
      name: elements.name.value.trim(),
      company: company.length > 0 ? company : null,
      projectType,
      message: elements.message.value.trim(),
    };

    const destination = whatsappUrl(buildWhatsappMessage(brief));
    const whatsappWindow = window.open(
      destination,
      "_blank",
      "noopener,noreferrer",
    );
    if (!whatsappWindow) window.location.assign(destination);
    setOpened(true);
  };

  return (
    <section className="contact-page relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_50%_0%,rgba(121,173,255,0.11),transparent_62%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Vamos conversar</p>
          <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            Conte onde você quer chegar.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Não precisa chegar com a solução pronta. Descreva o desafio e a
            Tivix ajuda a organizar o caminho.
          </p>

          <div className="contact-steps mt-9 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              O que acontece depois
            </p>
            <ol className="mt-5 space-y-4">
              {nextSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#79adff]/10 text-[0.7rem] font-bold text-[#79adff]">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="contact-option"
            >
              <Mail size={18} aria-hidden="true" />
              <span>
                <small>E-mail</small>
                {siteConfig.contact.email}
              </span>
            </a>
            <a
              href={whatsappUrl(
                "Olá! Vim pelo site da Tivix e gostaria de conversar.",
              )}
              target="_blank"
              rel="noreferrer"
              className="contact-option"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>
                <small>WhatsApp</small>
                {siteConfig.contact.whatsappLabel}
              </span>
            </a>
          </div>
        </div>

        <div className="contact-form-panel rounded-[2rem] border border-white/[0.09] bg-[#0a0f18] p-6 shadow-2xl sm:p-9">
          <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#79adff]">
                Briefing inicial
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Sobre o seu projeto
              </h2>
            </div>
            <ArrowUpRight
              size={22}
              className="text-slate-600"
              aria-hidden="true"
            />
          </div>

          <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field">
                <span>Seu nome *</span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Como podemos chamar você?"
                />
              </label>
              <label className="form-field">
                <span>Empresa</span>
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Nome da empresa"
                />
              </label>
            </div>

            <label className="form-field">
              <span>Tipo de projeto *</span>
              <select name="projectType" required defaultValue="">
                <option value="" disabled>
                  Selecione uma opção
                </option>
                {projectTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-field">
              <span>Contexto do projeto *</span>
              <textarea
                name="message"
                rows={6}
                required
                minLength={20}
                placeholder="Qual problema precisa ser resolvido, quem usa a solução e o que seria um bom resultado?"
              />
            </label>

            <button type="submit" className="button-primary w-full sm:w-fit">
              Continuar no WhatsApp
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
            <p className="text-xs leading-5 text-slate-600">
              O texto será aberto no WhatsApp e nada será enviado até você
              confirmar por lá.
            </p>
            {opened ? (
              <p
                className="flex items-center gap-2 text-sm text-[#79adff]"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 size={17} aria-hidden="true" /> Briefing aberto no
                WhatsApp.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
