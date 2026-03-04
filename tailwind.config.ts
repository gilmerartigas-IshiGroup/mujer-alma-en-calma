import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "rgb(var(--cream-50) / <alpha-value>)",
          ivory: "rgb(var(--ivory-100) / <alpha-value>)",
          sage: "rgb(var(--sage-200) / <alpha-value>)",
          sand: "rgb(var(--sand-300) / <alpha-value>)",
          terracotta: "rgb(var(--terracotta-500) / <alpha-value>)",
          cocoa: "rgb(var(--cocoa-900) / <alpha-value>)",
          rose: "rgb(var(--rose-400) / <alpha-value>)",
          lavender: "rgb(var(--lavender-300) / <alpha-value>)",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(74, 63, 74, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config
