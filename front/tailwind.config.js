/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "primary": "#3f3f46",
        "primary-light": "#a1a1aa",
        "secondary": "#fffbeb",
        "secondary-light": "#fde68a",
      },
    },
  },
  plugins: [],
};
