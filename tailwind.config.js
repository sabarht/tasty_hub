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
    extend: {},
    // colors: {
    //   current: "currentColor",
    //   green: "#2A5846",
    //   orange: "#F4BD93",
    //   "bubble-gum": "#ff77e9",
    // },
  },
  plugins: [],
};
