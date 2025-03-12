/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "30px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1280px",
      xl: "1676px",

      // sm: "640px",
      // // => @media (min-width: 640px) { ... }

      // md: "768px",
      // // => @media (min-width: 768px) { ... }

      // lg: "1024px",
      // // => @media (min-width: 1024px) { ... }

      // xl: "1280px",
      // // => @media (min-width: 1280px) { ... }

      // "2xl": "1536px",
      // // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        primary: "#1976d2",
      },
      backgroundImage: {
        "hero-img": "url('./img/bg1.jpg')",
        blackOverlay:
          "linear-gradient(to right, rgba(0,0,0,0.66) 0%, rgba(0,0,0,0.66) 100%)",
      },
    },
  },
  plugins: [],
};
