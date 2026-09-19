"use client";

import { useEffect, useId, useRef, useState } from "react";

import { fontScaleStorageKey, type FontScale } from "@/lib/theme";

const fontScales = [
  { value: "compact", label: "A−", title: "Texto menor" },
  { value: "default", label: "A", title: "Tamanho padrão" },
  { value: "large", label: "A+", title: "Texto maior" },
] as const satisfies readonly Readonly<{
  value: FontScale;
  label: string;
  title: string;
}>[];

function getCurrentScale(): FontScale {
  const value = document.documentElement.dataset["fontScale"];
  return value === "compact" || value === "large" ? value : "default";
}

function applyFontScale(fontScale: FontScale): void {
  document.documentElement.dataset["fontScale"] = fontScale;

  try {
    localStorage.setItem(fontScaleStorageKey, fontScale);
  } catch {
    // The preference still applies for the current visit when storage is blocked.
  }
}

export default function FontScaleControl() {
  const [fontScale, setFontScale] = useState<FontScale>("default");
  const [open, setOpen] = useState(false);
  const optionsId = useId();
  const controlRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent): void => {
      if (
        event.target instanceof Node &&
        !controlRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleToggle = (): void => {
    setFontScale(getCurrentScale());
    setOpen((current) => !current);
  };

  const handleScaleChange = (nextScale: FontScale): void => {
    applyFontScale(nextScale);
    setFontScale(nextScale);
    setOpen(false);
  };

  return (
    <div className="font-scale-control" ref={controlRef}>
      <button
        ref={triggerRef}
        type="button"
        className="font-scale-summary"
        aria-label="Ajustar tamanho do texto"
        aria-controls={optionsId}
        aria-expanded={open}
        title="Ajustar tamanho do texto"
        onClick={handleToggle}
      >
        Aa
      </button>
      {open ? (
        <div
          id={optionsId}
          className="font-scale-options"
          aria-label="Tamanho do texto"
        >
          {fontScales.map((scale) => (
            <button
              key={scale.value}
              type="button"
              title={scale.title}
              aria-label={scale.title}
              aria-pressed={fontScale === scale.value}
              onClick={() => handleScaleChange(scale.value)}
            >
              {scale.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
