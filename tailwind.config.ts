import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#0C0E0F",
        panel: "#15181A",
        panel2: "#1C2023",
        ink: "#ECE9E2",
        muted: "#93999E",
        faint: "#5B6166",
        amber: "#FF6A1A",
        amberDim: "#7A3814",
        signal: "#3FE08A",
        line: "rgba(236,233,226,0.10)",
        line2: "rgba(236,233,226,0.18)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        rail: "1240px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
