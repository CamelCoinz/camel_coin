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
        background: "var(--background)",
        btn_green: "#26A17B",
        main_border: "#627D2B",
        main_orange: "#E63E21",
        txt_brown: "#542122",
        brown_34: "#341800",
      },
      boxShadow: {
        orange_shadow: "0 0 30px -10px #e63e21",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1)" },
        },
        spin: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(360deg)" },
        },
        dots: {
          "0%": {
            content: "",
          },
          "40%": {
            content: "'.'",
          },
          "60%": {
            content: "'..'",
          },
          "100%": {
            content: "'...'",
          },
        },
      },
      animation: {
        zoom: "zoom 0.5s ease-in-out",
        spin: "spin 2s linear;",
        spin_infinite: "spin 1s infinite;",
        dots: "dots 1.5s steps(4, end) infinite;",
      },
    },
  },
  plugins: [],
};
export default config;
