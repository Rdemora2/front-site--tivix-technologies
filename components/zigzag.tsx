"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import FeatImage01 from "@/public/images/features-03-image-01.png"
import FeatImage02 from "@/public/images/features-03-image-02.png"
import FeatImage03 from "@/public/images/features-03-image-03.png"

export default function Zigzag() {
  const [visibleSections, setVisibleSections] = useState<number[]>([])
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting && !visibleSections.includes(index)) {
            setVisibleSections((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.15 },
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleSections])

  const sections = [
    {
      tag: "Sistemas Web",
      title: "Arquitetura que escala",
      description:
        "Microsserviços, filas de mensagens, cache distribuído. Sistemas que mantêm performance sob alta demanda.",
      points: ["APIs RESTful e GraphQL", "Dashboards em tempo real", "CI/CD automatizado"],
      image: FeatImage01,
      imageAlt: "Interface de dashboard",
    },
    {
      tag: "Inteligência Artificial",
      title: "IA que entende seu negócio",
      description:
        "RAG, fine-tuning, embeddings. Assistentes que acessam sua base de conhecimento e respondem com contexto.",
      points: ["Chatbots com memória", "Processamento de documentos", "Análise preditiva"],
      image: FeatImage02,
      imageAlt: "Interface de chatbot com IA",
    },
    {
      tag: "Automação",
      title: "Processos que rodam sozinhos",
      description: "Identificamos gargalos e construímos automações que eliminam trabalho repetitivo.",
      points: ["Workflows condicionais", "Relatórios automáticos", "Alertas inteligentes"],
      image: FeatImage03,
      imageAlt: "Diagrama de workflow",
    },
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-28 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el
              }}
              data-index={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center transition-all duration-1000 ${
                visibleSections.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""} text-center md:text-left`}>
                <span className="inline-block text-[10px] sm:text-xs font-medium text-emerald-500/80 uppercase tracking-widest mb-2 sm:mb-3">
                  {section.tag}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4 tracking-tight">
                  {section.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4 sm:mb-5 max-w-md mx-auto md:mx-0">
                  {section.description}
                </p>
                <ul className="space-y-2 inline-block text-left">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500/70 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`relative group ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-neutral-900 transition-all duration-700 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.imageAlt}
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
