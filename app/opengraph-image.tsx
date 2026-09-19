import { ImageResponse } from "next/og";

export const alt = "Tivix Technologies — software, automação e IA aplicada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#f8fafc",
        background:
          "radial-gradient(circle at 85% 10%, rgba(121,169,255,.28), transparent 38%), radial-gradient(circle at 15% 90%, rgba(139,240,207,.18), transparent 42%), #07100e",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,.2)",
            background: "rgba(255,255,255,.06)",
            fontSize: 18,
            fontWeight: 800,
          }}
        >
          TX
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{ fontSize: 28, fontWeight: 800, letterSpacing: ".2em" }}
          >
            TIVIX
          </span>
          <span
            style={{
              marginTop: 4,
              fontSize: 11,
              color: "#82918a",
              letterSpacing: ".32em",
            }}
          >
            TECHNOLOGIES
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
        <span
          style={{
            fontSize: 23,
            color: "#8bf0cf",
            letterSpacing: ".12em",
            textTransform: "uppercase",
          }}
        >
          Software house
        </span>
        <span
          style={{
            marginTop: 20,
            fontSize: 68,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: "-.035em",
          }}
        >
          Tecnologia sob medida para negócios que precisam avançar.
        </span>
      </div>

      <div style={{ display: "flex", gap: 30, fontSize: 20, color: "#9aa8a1" }}>
        <span>Sites</span>
        <span>·</span>
        <span>Sistemas</span>
        <span>·</span>
        <span>Automações</span>
        <span>·</span>
        <span>IA aplicada</span>
      </div>
    </div>,
    size,
  );
}
