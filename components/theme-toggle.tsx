"use client";

import { Moon, Sun } from "lucide-react";

import { themeStorageKey, type Theme } from "@/lib/theme";

function isTheme(value: string | undefined): value is Theme {
  return value === "dark" || value === "light";
}

function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  root.dataset["theme"] = theme;
  root.style.colorScheme = theme;
  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((meta) => {
      meta.content = theme === "light" ? "#f4f6f2" : "#050806";
    });

  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    // The visual preference still applies when storage is unavailable.
  }
}

export default function ThemeToggle() {
  const handleClick = (): void => {
    const currentTheme = document.documentElement.dataset["theme"];
    applyTheme(
      isTheme(currentTheme) && currentTheme === "light" ? "dark" : "light",
    );
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Alternar entre tema claro e escuro"
      title="Alternar tema"
      onClick={handleClick}
    >
      <Sun className="theme-toggle-sun" size={17} aria-hidden="true" />
      <Moon className="theme-toggle-moon" size={17} aria-hidden="true" />
    </button>
  );
}
