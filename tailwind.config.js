/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        primary: {
          cyan: "hsl(158, 36%, 37%)",
          "dark-cyan": "hsl(158, 40%, 18%)",
          cream: "hsl(30, 38%, 92%)",
        },
        neutral: {
          dark: "hsl(212, 21%, 14%)",
          medium: "hsl(228, 12%, 48%)",
          light: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
