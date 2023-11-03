/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        rings:
          "0 0 0 60px rgba(43, 57, 86, 1), 0 0 0 120px rgba(37, 52, 83, 1), 0 0 0 180px rgba(33, 48, 79, 1)",
      },
      colors: {
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        white: "#ffffff",
        black: "black",
      },
    },
  },
  plugins: [],
};
