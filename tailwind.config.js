const { colors, spacing, borderRadius, fontSize, fontFamily, fontWeight } = require('./tokens/index.ts')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      spacing,
      borderRadius,
      fontSize,
      fontFamily,
      fontWeight
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};