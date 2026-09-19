export type Theme = "dark" | "light";
export type FontScale = "compact" | "default" | "large";

export const themeStorageKey = "tivix-theme:v1";
export const fontScaleStorageKey = "tivix-font-scale:v1";

export const themeInitializationScript = `
(function () {
  var storageKey = "${themeStorageKey}";
  var theme;
  try {
    var stored = localStorage.getItem(storageKey);
    theme = stored === "light" || stored === "dark" ? stored : undefined;
  } catch (_) {}
  if (!theme) {
    theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelectorAll('meta[name="theme-color"]').forEach(function (meta) {
    meta.setAttribute("content", theme === "light" ? "#f4f7fb" : "#05070d");
  });

  var fontScaleKey = "${fontScaleStorageKey}";
  var fontScale;
  try {
    var storedScale = localStorage.getItem(fontScaleKey);
    fontScale = storedScale === "compact" || storedScale === "large" || storedScale === "default"
      ? storedScale
      : "default";
  } catch (_) {
    fontScale = "default";
  }
  document.documentElement.dataset.fontScale = fontScale;
})();`;
