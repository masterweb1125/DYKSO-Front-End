/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Exo", "sans-serif"],
      },
      colors: {
        "custom-green": "#03A89E",
        "light-black": "#323232",
        "light-gray": "#8D8D8D",
      },
    },
  },
  plugins: [],
};

