/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*index.html"],
  theme: {
    extend: {
      fontFamily: {
        Fraunces: ["Fraunces", "serif"],
        Montserrat: ["Montserrat", "sans-seri"],
      },
      colors: {
        primary: {
          DarkCyan: "hsl(158, 36%, 37%)",
          Cream: "hsl(30, 38%, 92%)",
        },
        neutral: {
          VeryDarkBlue: "hsl(212, 21%, 14%)",
          DarkGrayishBlue: "hsl(228, 12%, 48%)",
          White: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
