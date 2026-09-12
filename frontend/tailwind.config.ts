import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sc: {
          primary: "var(--sc-primary)",
          "primary-deep": "var(--sc-primary-deep)",
          accent: "var(--sc-accent)",
          ink: "var(--sc-ink)",
          charcoal: "var(--sc-charcoal)",
          night: "var(--sc-night)",
          muted: "var(--sc-muted)",
          line: "var(--sc-line)",
          canvas: "var(--sc-canvas)",
          surface: "var(--sc-surface)",
          danger: "var(--sc-danger)",
          warning: "var(--sc-warning)",
          success: "var(--sc-success)",
        },
      },
      fontFamily: {
        sans: ["var(--sc-font)"],
      },
      borderRadius: {
        sc: "var(--sc-radius)",
        "sc-sm": "var(--sc-radius-sm)",
      },
      boxShadow: {
        sc: "var(--sc-shadow)",
      },
    },
  },
  plugins: [],
};

export default config;
