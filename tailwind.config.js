/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        rebirth: {
          orange: "#C45A2E",
          crimson: "#8B3A32",
          deepRed: "#5C2A28",
          black: "#0A0A0B",
          charcoal: "#141416",
          smoke: "#8E8E93",
          white: "#ECECEA",
          base: "#0A0A0B",
          void: "#060607",
          surface: "#0E0E10",
          elevated: "#141416",
          muted: "rgba(236, 236, 234, 0.52)",
        },
      },
      borderRadius: {
        card: "0.5rem",
        panel: "0.75rem",
      },
      boxShadow: {
        ambient: "0 32px 80px rgba(0, 0, 0, 0.45)",
        glow: "0 1px 0 rgba(255, 255, 255, 0.04)",
        "glow-sm": "0 1px 0 rgba(255, 255, 255, 0.03)",
        card: "0 24px 64px rgba(0, 0, 0, 0.35)",
      },
      transitionDuration: {
        luxury: "420ms",
      },
      maxWidth: {
        content: "80rem",
      },
      letterSpacing: {
        label: "0.2em",
        caps: "0.14em",
      },
    },
  },
  plugins: [],
};
