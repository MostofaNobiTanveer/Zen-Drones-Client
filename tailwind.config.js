module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        woodsmoke: {
          50: "#f3f3f3",
          100: "#e7e7e7",
          200: "#c3c3c3",
          300: "#9f9f9f",
          400: "#575757",
          500: "#0f0f0f",
          600: "#0e0e0e",
          700: "#0b0b0b",
          800: "#090909",
          900: "#070707",
        },
      },
      fontFamily: {
        body: ["Poppins"],
        title: ["Bebas Neue"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
