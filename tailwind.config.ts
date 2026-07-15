import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#09090b",
          50: "#18181b",
          100: "#27272a",
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 8s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
