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
    },

    extend: {
      colors: {
        primary: "#1976d2",
      },
    },
  },
  plugins: [],
};
