/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          "var(--font-sf)",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        background: "var(--background)",
        surface1: "var(--surface-1)",
        surface2: "var(--surface-2)",
        "surface-glass": "var(--surface-glass)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        accent: "var(--accent)",
        "accent-subtle": "var(--accent-subtle)",
        "accent-hover": "var(--accent-hover)",
        "accent-glow": "var(--accent-glow)",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover":
          "0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.06)",
        nav: "0 2px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
        "nav-dark": "0 2px 20px rgba(0,0,0,0.4)",
      },
      borderRadius: {
        ios: "14px",
        "ios-lg": "20px",
        "ios-xl": "28px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
