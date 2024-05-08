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
      colors: {
        textColor: '#808080',
        primary: '#FF9E2C',
        secondary: '#1F1F1F', // Corrected spelling of 'secondary'
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
        box: "rgba(149, 157, 165, 0.2) 0px 8px 24px", // Removed the semicolon at the end
      }
    },
  },
  plugins: [],
};
export default config;
