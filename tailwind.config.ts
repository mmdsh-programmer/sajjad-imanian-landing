import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        instrumentSerif: ["var(--font-instrument-serif)"],
      },
      colors: {
        yellow: "#DECB26",
        darkYellow: "#DC9E08",
        black: "#272727",
        grey: "#575757",
      },
    },
  },
};

export default config; 