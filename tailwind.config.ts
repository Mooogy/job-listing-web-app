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
        primary: "#F0F0F0",
        accent: "#575DCD",
      },
      fontFamily: {
        fjalla: ["Fjalla One", "sans-serif"],
        calistoga: ["Calistoga", "serif"],
        cantarell: ["Cantarell", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
