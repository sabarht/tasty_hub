/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#FF0000",
        customOrange: "#F4BD93",
        customGreen: "#2A5846",
        customGreenLight: "#94ABA3",
        customGrey: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
