import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        plaster: "#ECEAE5",
        ink: "#111111",
        hair: "#C9C6BE",
      },
      fontFamily: { sans: ["var(--font-sans)"] },
    },
  },
  plugins: [],
};
export default config;
