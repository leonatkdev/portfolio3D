/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Every token is a CSS variable so light/dark share one class name.
        bg: "rgb(var(--bg) / <alpha-value>)",
        subtle: "rgb(var(--bg-subtle) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        line: "rgb(var(--border) / <alpha-value>)",
        ink: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--fg-muted) / <alpha-value>)",
        faint: "rgb(var(--fg-faint) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-contrast": "rgb(var(--accent-contrast) / <alpha-value>)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        "display-sm": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        display: ["3.25rem", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
        "display-lg": ["4.25rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -12px rgb(0 0 0 / 0.12)",
        lift: "0 1px 2px rgb(0 0 0 / 0.05), 0 20px 40px -20px rgb(0 0 0 / 0.22)",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
