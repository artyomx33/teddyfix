import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teddy: "#FF5C5C",
        wood: "#8B6F47",
        concrete: "#9E9E9E",
      },
      fontFamily: {
        sans: ["Inter", "DM Sans", "system-ui"],
      },
    },
  },
  plugins: [],
};
export default config;
