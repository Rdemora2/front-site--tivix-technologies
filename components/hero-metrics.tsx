"use client";

import { useEffect, useRef, useState } from "react";

type MetricDecimals = 0 | 2;
type MetricSuffix = "" | "M+" | "%";

type MetricDefinition = Readonly<{
  endValue: number;
  decimals: MetricDecimals;
  suffix: MetricSuffix;
  label: string;
  accessibleValue: string;
}>;

type MetricValues = readonly [number, number, number];

const metrics = [
  {
    endValue: 4,
    decimals: 0,
    suffix: "",
    label: "anos de mercado",
    accessibleValue: "4",
  },
  {
    endValue: 20,
    decimals: 0,
    suffix: "M+",
    label: "requisições por mês",
    accessibleValue: "mais de 20 milhões",
  },
  {
    endValue: 99.99,
    decimals: 2,
    suffix: "%",
    label: "de uptime",
    accessibleValue: "99,99 por cento",
  },
] as const satisfies readonly MetricDefinition[];

const initialValues: MetricValues = [0, 0, 0];
const finalValues: MetricValues = [4, 20, 99.99];
const integerFormatter = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 0,
});
const decimalFormatter = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatMetric(value: number, metric: MetricDefinition): string {
  const formatter = metric.decimals === 2 ? decimalFormatter : integerFormatter;
  return `${formatter.format(value)}${metric.suffix}`;
}

function easeOutCubic(progress: number): number {
  return 1 - (1 - progress) ** 3;
}

export default function HeroMetrics() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<MetricValues>(initialValues);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame: number | null = null;
    let hasAnimated = false;

    const handleMotionChange = (): void => {
      if (!reducedMotion.matches) return;
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
      hasAnimated = true;
      setValues(finalValues);
    };

    const animate = (): void => {
      if (hasAnimated) return;
      hasAnimated = true;

      if (reducedMotion.matches) {
        setValues(finalValues);
        return;
      }

      const startTime = performance.now();
      const duration = 1_450;

      const update = (timestamp: number): void => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = easeOutCubic(progress);
        setValues([
          metrics[0].endValue * easedProgress,
          metrics[1].endValue * easedProgress,
          metrics[2].endValue * easedProgress,
        ]);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(update);
        }
      };

      animationFrame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(root);
    reducedMotion.addEventListener("change", handleMotionChange);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", handleMotionChange);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={rootRef} className="hero-outcomes">
      <p>Escala não é discurso.</p>
      <dl>
        {metrics.map((metric, index) => (
          <div key={metric.label}>
            <dt>
              <span aria-hidden="true">0{index + 1}</span>
              {metric.label}
            </dt>
            <dd aria-label={metric.accessibleValue}>
              <span aria-hidden="true">
                {formatMetric(values[index] ?? 0, metric)}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
