"use client"

import { useState, useEffect, useRef } from "react"

export default function Credibility() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const techStack = [
    "AWS",
    "Google Cloud",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "OpenAI",
    "Docker",
    "Kubernetes",
  ]

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 border-t border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 sm:mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm sm:text-base md:text-lg font-medium tracking-tight text-neutral-400 mb-1.5 text-balance">
            Especialistas em <span className="text-white">AWS</span> e <span className="text-white">GCP</span> com
            experiência internacional
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">Stack moderna para soluções escaláveis</p>
        </div>

        {/* Tech stack ticker */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="flex gap-2.5 sm:gap-3 animate-ticker">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-800/50 bg-neutral-900/30 text-neutral-500 text-[11px] sm:text-xs whitespace-nowrap transition-all duration-300 hover:border-neutral-700 hover:text-neutral-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 20s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-ticker {
            animation: ticker 15s linear infinite;
          }
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
