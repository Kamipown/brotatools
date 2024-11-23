/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['OpenSans', ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        appear: 'transform, opacity',
      },
    },
  },
  plugins: [],
}
