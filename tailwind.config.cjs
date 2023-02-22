/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "426px",
      md: "768px",
      lg: "1024px",
      XL: "1280px",
    },
    extend: {
      backgroundImage: {
        landing: "url('/src/assets/landing.png')",
      },
    },
  },
  plugins: [],
};
