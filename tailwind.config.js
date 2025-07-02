/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firasanscondensed: ["Fira Sans Condensed", "sans-serif"]
      },
      colors: {
        primary: "#f47e3a",
        secondary: "#1a3d6d"
      }
    },
  },
  plugins: [],
}

