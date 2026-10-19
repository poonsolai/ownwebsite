import { siteConfig } from "@/lib/constants";

export function SocialCard() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        color: "#121915",
        background:
          "radial-gradient(circle at 82% 18%, #e5f2fa 0, transparent 34%), linear-gradient(135deg, #ffffff 0%, #f5f8f6 70%, #e3f3e8 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          color: "#4c9364",
          fontSize: "24px",
          letterSpacing: "5px",
        }}
      >
        <span
          style={{
            display: "flex",
            width: "48px",
            height: "48px",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #4c9364",
            fontSize: "26px",
            letterSpacing: "0",
          }}
        >
          P
        </span>
        PORTFOLIO / 2026
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <strong style={{ fontSize: "68px", letterSpacing: "-3px" }}>
          {siteConfig.name}
        </strong>
        <span style={{ color: "#56645b", fontSize: "30px" }}>
          Developer · Building useful things for the web
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#4388b5",
          fontSize: "20px",
          letterSpacing: "2px",
        }}
      >
        <span>THOUGHTFUL INTERFACES</span>
        <span>LEARNING IN PUBLIC</span>
      </div>
    </div>
  );
}
