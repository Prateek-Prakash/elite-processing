import { ImageResponse } from "next/og";
import { company } from "@/lib/content";

export const runtime = "edge";
export const alt = "Elite Processing Team — Third-Party Loan Processing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #fff5fa 0%, #ffe1f0 55%, #ffd0e8 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#c01573",
            fontWeight: 700,
          }}
        >
          Third-Party Loan Processing
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 76,
            lineHeight: 1.05,
            color: "#3d1a2e",
            fontWeight: 700,
            marginTop: 24,
            maxWidth: 900,
          }}
        >
          <span>An easy solution for mortgage brokers to&nbsp;</span>
          <span style={{ color: "#e91e8c" }}>expand their business.</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 48,
            fontSize: 30,
            color: "#7a5468",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#e91e8c",
              color: "#fff",
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            E
          </div>
          {company.legalName} · NMLS #{company.nmls}
        </div>
      </div>
    ),
    { ...size }
  );
}
