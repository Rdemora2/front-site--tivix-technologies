"use client"

import { useEffect, useRef, useState } from "react"

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<
    Array<{
      x: number
      y: number
      baseX: number
      baseY: number
      vx: number
      vy: number
      size: number
      alpha: number
      angle: number
      speed: number
      orbitRadius: number
    }>
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const isMobile = window.innerWidth < 768
      const particleCount = isMobile
        ? Math.min(40, Math.floor((canvas.width * canvas.height) / 20000))
        : Math.min(80, Math.floor((canvas.width * canvas.height) / 12000))
      particlesRef.current = []

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particlesRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.5 + 0.2,
          angle: Math.random() * Math.PI * 2,
          speed: 0.002 + Math.random() * 0.003,
          orbitRadius: 20 + Math.random() * 40,
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        }
      }
    }

    let time = 0

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 1

      particlesRef.current.forEach((particle, i) => {
        particle.angle += particle.speed
        const targetX = particle.baseX + Math.cos(particle.angle) * particle.orbitRadius
        const targetY = particle.baseY + Math.sin(particle.angle * 0.7) * particle.orbitRadius * 0.6

        const wave = Math.sin(time * 0.01 + i * 0.5) * 10

        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        let pushX = 0
        let pushY = 0

        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance
          pushX = -(dx / distance) * force * 40
          pushY = -(dy / distance) * force * 40
        }

        particle.x += (targetX + wave + pushX - particle.x) * 0.03
        particle.y += (targetY + wave * 0.5 + pushY - particle.y) * 0.03

        const pulseAlpha = particle.alpha + Math.sin(time * 0.02 + i) * 0.1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${pulseAlpha})`)
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
        ctx.fillStyle = gradient
        ctx.fill()

        const connectionDistance = window.innerWidth < 768 ? 100 : 120
        particlesRef.current.slice(i + 1).forEach((other) => {
          const dx2 = particle.x - other.x
          const dy2 = particle.y - other.y
          const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2)

          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            const lineAlpha = 0.08 * (1 - dist / connectionDistance)
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.6 }} />
}

function TypeWriter({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(word.slice(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className="text-white">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <ParticleField />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[60px] sm:blur-[100px] md:blur-[120px] animate-[floatOrb1_25s_ease-in-out_infinite]"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            top: "5%",
            left: "-15%",
          }}
        />
        <div
          className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-[50px] sm:blur-[80px] md:blur-[100px] animate-[floatOrb2_30s_ease-in-out_infinite]"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
            bottom: "10%",
            right: "-15%",
          }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 text-center flex-1 flex flex-col justify-center pt-16 sm:pt-20">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-4 sm:mb-6 mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs text-neutral-400">Desenvolvimento Full Stack & IA</span>
        </div>

        <h1
          className={`text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-3 sm:mb-4 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-balance">Construímos</span>
          <span className="block h-[1.3em] sm:h-[1.2em] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            <TypeWriter words={["APIs escaláveis", "interfaces modernas", "automações com IA", "sistemas robustos"]} />
          </span>
        </h1>

        <p
          className={`text-sm sm:text-base md:text-lg text-neutral-400 max-w-[280px] sm:max-w-lg md:max-w-2xl mx-auto mb-5 sm:mb-6 leading-relaxed text-pretty transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Arquitetamos sistemas web robustos, implementamos IA que automatiza operações, e entregamos software que
          escala com seu negócio.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-3 justify-center mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="/contato"
            className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-medium text-black bg-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="relative">Iniciar projeto</span>
            <svg
              className="relative ml-2 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#servicos"
            className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-medium text-neutral-400 rounded-full border border-neutral-800 transition-all duration-500 hover:text-white hover:border-neutral-600 hover:bg-white/[0.02]"
          >
            <span>Ver serviços</span>
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-500 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-md sm:max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "50+", label: "Projetos" },
            { value: "30+", label: "Clientes" },
            { value: "7+", label: "Anos" },
            { value: "99%", label: "Uptime" },
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-0.5 transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-neutral-600 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`relative w-full pb-6 sm:pb-8 transition-all duration-1000 delay-700 hidden sm:flex justify-center ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[8px] text-neutral-600 uppercase tracking-widest">Scroll</span>
          <div className="w-4 h-6 rounded-full border border-neutral-800 flex items-start justify-center p-1">
            <div className="w-0.5 h-1.5 bg-neutral-700 rounded-full animate-[scrollIndicator_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(40px, -60px) scale(1.1); }
          50% { transform: translate(-30px, 30px) scale(0.9); }
          75% { transform: translate(60px, 40px) scale(1.05); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, 40px) scale(0.95); }
          66% { transform: translate(40px, -40px) scale(1.08); }
        }
        @keyframes scrollIndicator {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}
