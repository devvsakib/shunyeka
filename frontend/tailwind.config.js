/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "table_bg": "#FFFAFA",
        "table_border": "#D7D7D7",
      }
    },
  },
  plugins: [require("daisyui")],
}

