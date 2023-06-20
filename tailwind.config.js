/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E3B3FA',
        primary_dark: '#3A2544',
        primary_light: '#F2E5F9',
        white: '#FDFDFD',
        yellow: '#FCECC2',
        orange: '#FAEBE3',
      },
      fontFamily: {
        primary: ['"Rametto one"', 'serif'],
        secondary: ['Manrope', 'serif'],
      },
    },
  },
}
