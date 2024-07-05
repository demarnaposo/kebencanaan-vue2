/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      opacity: {
        '65': '0.65',
      },
    },
    textColor: {
      orange_primary: "#f06e38",
      secondary: "#ffed4a",
      danger: "#e3342f",
      default: "inherit",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

