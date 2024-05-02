import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        textColor: '#808080',
        primary: '#FF9E2C',
        secondry: '#1F1F1F',
        lightWhite: "#00000059",
        error:"#e74c3c"
      },
      fontFamily: {
         gilroyBold: ['Gilroy-Bold'],
         gilroySemiBold: ['Gilroy-SemiBold'],
         gilroyMedium: ['Gilroy-Medium'],
         gilroyRegular: ['Gilroy-Regular'],
         gilroyLight: ['Gilroy-Light'],
      },
      boxShadow: {
        box:"rgba(149, 157, 165, 0.2) 0px 8px 24px;"
      }
    },
  },
  plugins: [],
};
export default config;
