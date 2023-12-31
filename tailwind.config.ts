import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "32%": "32%",
        "30%": "30%",
      },
      screens: {
        lg: "1000px",
        xl: "1455px",
      },
    },
    colors: {
      bgWhite: "#f5f5f5",
      borderCharcoal: "#75838a",
      accentBlue: "#3185fc",
      red: "#FF0000",
      white: "#FFFFFF",
      placeholder: "#9ca3af",
      searchBorder: "#cccccc",
      placeholderText: "#807f7f",
      buttonHover: "#20549e",
    },
  },
  plugins: [],
};
export default config;
