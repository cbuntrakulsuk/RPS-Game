/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'darkText': 'hsl(229, 25%, 31%)',
      'scoreText': 'hsl(229, 64%, 46%)',
      'headerOutline': 'hsl(217, 16%, 45%)',
      'white':'#ffffff',
    },
    extend: {},
  },
  plugins: [],
}

