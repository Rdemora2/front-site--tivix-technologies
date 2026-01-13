"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"

function Feature3DCard({
  feature,
  index,
  isVisible,
}: {
  feature: { title: string; description: string; tech: string }
  index: number
  isVisible: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 })
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = ((e.clientX - rect.left) / rect.width) * 100
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100

    const rotateX = (e.clientY - centerY) / 20
    const rotateY = (centerX - e.clientX) / 20

    setTransform({ rotateX, rotateY })
    setMousePos({ x: mouseX, y: mouseY })
  }, [])

  const handleMouseEnter = useCallback(() => setIsHovering(true), [])

  const handleMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0 })
    setMousePos({ x: 50, y: 50 })
    setIsHovering(false)
  }, [])

  const gradientColors = [
    { from: "rgba(99,102,241,0.4)", to: "rgba(139,92,246,0.4)" },
    { from: "rgba(139,92,246,0.4)", to: "rgba(236,72,153,0.4)" },
    { from: "rgba(59,130,246,0.4)", to: "rgba(99,102,241,0.4)" },
  ]

  const gradient = gradientColors[index] || gradientColors[0]

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-950 border border-neutral-800/50 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: isHovering ? "100ms" : "500ms",
        transitionTimingFunction: "ease-out",
        transitionDelay: isVisible && !isHovering ? `${index * 150}ms` : "0ms",
        transform: isHovering
          ? `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translateZ(10px) scale(1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)",
      }}
    >
      {/* Glow border */}
      <div
        className="absolute -inset-[1px] rounded-xl sm:rounded-2xl opacity-0 transition-opacity duration-300 blur-sm"
        style={{
          background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
          opacity: isHovering ? 1 : 0,
        }}
      />

      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-neutral-950" />

      {/* Top shine */}
      <div
        className="absolute inset-0 rounded-xl sm:rounded-2xl transition-opacity duration-500"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, transparent 40%)",
          opacity: isHovering ? 1 : 0,
        }}
      />

      {/* Spotlight */}
      <div
        className="absolute inset-0 rounded-xl sm:rounded-2xl transition-opacity duration-200 pointer-events-none"
        style={{
          background: isHovering
            ? `radial-gradient(circle 150px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.12) 0%, transparent 100%)`
            : "none",
          opacity: isHovering ? 1 : 0,
        }}
      />

      <div className="relative z-10">
        <div
          className="text-[10px] sm:text-xs font-medium uppercase tracking-widest mb-2 sm:mb-3 transition-all duration-300"
          style={{
            color: isHovering ? "transparent" : "rgb(82, 82, 82)",
            backgroundImage: isHovering
              ? `linear-gradient(to right, ${gradient.from.replace("0.4", "1")}, ${gradient.to.replace("0.4", "1")})`
              : "none",
            backgroundClip: isHovering ? "text" : "unset",
            WebkitBackgroundClip: isHovering ? "text" : "unset",
          }}
        >
          0{index + 1}
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-neutral-300">
          {feature.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {feature.tech.split(" . ").map((tech, i) => (
            <span
              key={tech}
              className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 sm:py-1 rounded-md bg-neutral-900 text-neutral-500 transition-all duration-300 group-hover:bg-neutral-800 group-hover:text-neutral-300"
              style={{
                transitionDelay: isHovering ? `${i * 50}ms` : "0ms",
                transform: isHovering ? "translateY(-1px)" : "translateY(0)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Border */}
      <div
        className="absolute inset-0 rounded-xl sm:rounded-2xl border transition-all duration-300 pointer-events-none"
        style={{
          borderColor: isHovering ? "rgba(255,255,255,0.12)" : "rgba(38,38,38,0.5)",
        }}
      />
    </div>
  )
}

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      title: "Arquitetura Full Stack",
      description:
        "Aplicações completas com React, Next.js e Node.js. Da interface ao banco de dados, cada camada é projetada para performance e manutenibilidade.",
      tech: "React . Next.js . Node.js . PostgreSQL",
    },
    {
      title: "Inteligência Artificial",
      description:
        "LLMs e machine learning no seu fluxo de trabalho. Chatbots contextuais, análise de documentos e automação cognitiva.",
      tech: "GPT-4 . LangChain . Python . RAG",
    },
    {
      title: "Automação de Processos",
      description:
        "Eliminamos tarefas manuais com workflows inteligentes. Integrações entre ERPs, CRMs e sistemas legados.",
      tech: "n8n . Webhooks . REST APIs . Cron",
    },
  ]

  return (
    <section ref={sectionRef} id="servicos" className="relative py-16 sm:py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`max-w-3xl mb-10 sm:mb-14 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[10px] sm:text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2 sm:mb-3">
            O que fazemos
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3 sm:mb-4 text-balance">
            Engenharia de software
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-neutral-500">com propósito.</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl">
            Cada linha de código resolve um problema real do seu negócio, com arquitetura pensada para o longo prazo.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Feature3DCard key={index} feature={feature} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
