/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#E3B3FA',
      'secondary': '#3A2544',
      'light': '#FDFDFD',
      'primary_light': '#F2E5F9',
    },
    fontFamily: {
      primary: ['"Rametto one"', 'serif'],
      secondary: ['Manrope', 'serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '32',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}