"use client";

import { useEffect, useRef } from "react";

type SignalPoint = {
  xRatio: number;
  yRatio: number;
  radius: number;
  phase: number;
  velocity: number;
};

type PointerPosition = {
  x: number;
  y: number;
  active: boolean;
};

type CanvasSize = Readonly<{
  width: number;
  height: number;
  pixelRatio: number;
}>;

type RenderedPoint = Readonly<{
  x: number;
  y: number;
  radius: number;
}>;

const createRandomSource = (initialSeed: number): (() => number) => {
  let seed = initialSeed;

  return () => {
    seed += 0x6d2b79f5;
    let value = seed;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4_294_967_296;
  };
};

const buildSignalPoints = (count: number): SignalPoint[] => {
  const random = createRandomSource(1_984_031);

  return Array.from({ length: count }, () => ({
    xRatio: random(),
    yRatio: random(),
    radius: 0.8 + random() * 1.8,
    phase: random() * Math.PI * 2,
    velocity: 0.00012 + random() * 0.0002,
  }));
};

export default function HeroSignal() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const supportsPointerMotion = finePointer.matches;
    const pointer: PointerPosition = { x: 0, y: 0, active: false };
    let size: CanvasSize = { width: 1, height: 1, pixelRatio: 1 };
    let points = buildSignalPoints(28);
    let animationFrame: number | null = null;
    let isVisible = true;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      size = {
        width: Math.max(bounds.width, 1),
        height: Math.max(bounds.height, 1),
        pixelRatio,
      };
      canvas.width = Math.round(size.width * pixelRatio);
      canvas.height = Math.round(size.height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      points = buildSignalPoints(size.width < 720 ? 18 : 36);
    };

    const draw = (timestamp: number) => {
      context.clearRect(0, 0, size.width, size.height);

      const positions: RenderedPoint[] = points.map((point) => {
        const drift = reducedMotion.matches ? 0 : timestamp * point.velocity;
        const x =
          point.xRatio * size.width + Math.sin(point.phase + drift) * 22;
        const y =
          point.yRatio * size.height +
          Math.cos(point.phase + drift * 0.72) * 18;
        const pointerDistance = Math.hypot(pointer.x - x, pointer.y - y);
        const pointerWeight =
          pointer.active && pointerDistance < 180
            ? (180 - pointerDistance) / 180
            : 0;

        return {
          x: x + (pointer.x - x) * pointerWeight * 0.035,
          y: y + (pointer.y - y) * pointerWeight * 0.035,
          radius: point.radius + pointerWeight * 1.2,
        };
      });

      for (let firstIndex = 0; firstIndex < positions.length; firstIndex += 1) {
        const first = positions[firstIndex];
        if (!first) continue;

        for (
          let secondIndex = firstIndex + 1;
          secondIndex < positions.length;
          secondIndex += 1
        ) {
          const second = positions[secondIndex];
          if (!second) continue;
          const distance = Math.hypot(first.x - second.x, first.y - second.y);
          if (distance > 148) continue;

          context.beginPath();
          context.moveTo(first.x, first.y);
          context.lineTo(second.x, second.y);
          context.strokeStyle = `rgba(122, 175, 255, ${0.12 * (1 - distance / 148)})`;
          context.lineWidth = 0.7;
          context.stroke();
        }
      }

      for (const point of positions) {
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(169, 205, 255, 0.56)";
        context.fill();
      }

      if (!reducedMotion.matches && !document.hidden && isVisible) {
        animationFrame = window.requestAnimationFrame(draw);
      } else {
        animationFrame = null;
      }
    };

    const render = () => {
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      if (!isVisible || document.hidden) {
        animationFrame = null;
        return;
      }
      animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
    };
    const handlePointerLeave = () => {
      pointer.active = false;
    };
    const handleVisibilityChange = () => {
      if (document.hidden && animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
        return;
      }
      render();
    };
    const handleMotionChange = () => {
      render();
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      render();
    });
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? false;
        render();
      },
      { rootMargin: "120px 0px", threshold: 0.01 },
    );

    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);
    if (supportsPointerMotion) {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("blur", handlePointerLeave);
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotion.addEventListener("change", handleMotionChange);
    resize();
    render();

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      if (supportsPointerMotion) {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("blur", handlePointerLeave);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotion.removeEventListener("change", handleMotionChange);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-signal" aria-hidden="true" />;
}
