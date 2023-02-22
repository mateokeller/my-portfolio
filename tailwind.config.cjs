/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      "group-indicator": ["Bebas Neue", "cursive"],
    },
    screens: {
      xs: "320px",
      sm: "426px",
      md: "768px",
      lg: "1024px",
      XL: "1280px",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "auto-100%": "auto 100%",
    },
    extend: {
      backgroundImage: {
        landing: "url('/src/assets/landing.png')",
      },
      colors: {
        "gray-primary": "#ececec",
        "gray-02": "#c1c1c1",
        "gray-03": "#dedede",
        "gray-04": "#2b2b2b",
        "yellow-primary": "#fca311",
      },
    },
  },
  plugins: [],
};
