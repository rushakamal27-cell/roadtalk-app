/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-deep": "#080c10",
        "bg-panel": "#0d1219",
        "bg-card": "#111820",
        "bg-card2": "#151e28",
        cyan: "#00c8ff",
        green: "#00e87a",
        red: "#ff3c3c",
        orange: "#ff8c00",
        yellow: "#ffd600",
      },
      fontFamily: {
        display: ['"Exo 2"', "sans-serif"],
        mono: ['"Share Tech Mono"', "monospace"],
        ui: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
