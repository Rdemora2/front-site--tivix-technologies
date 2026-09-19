import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt = "Tivix Technologies — software, automação e IA aplicada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public", "images", "logo-tivix-full.png"),
  );
  const logoDataUrl = `data:image/png;base64,${logo.toString("base64")}`;

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
          "radial-gradient(circle at 84% 22%, rgba(121,173,255,.16), transparent 34%), linear-gradient(90deg, transparent 49.9%, rgba(255,255,255,.045) 50%, transparent 50.1%), #05070d",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* ImageResponse supports the generated URL from a static image import. */}
        <img
          src={logoDataUrl}
          alt=""
          width={172}
          height={60}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
        <span
          style={{
            fontSize: 23,
            color: "#79adff",
            letterSpacing: ".12em",
            textTransform: "uppercase",
          }}
        >
          TIVIX / DIGITAL ENGINEERING
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
          Ideias ambiciosas. Software à altura.
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
