/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '40px',
        lg: '60px',
        xl: '80px',
      },
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }

      'xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        'primary': '#25D377',
        'dark': '#000C04',
        'gray': '#999D9E',
        'puskur1': '#0063B9',
        'puskur2': '#0A0F3F',
      },
      animation: {
        "slowspin": 'spin 8s linear infinite',
        "loop-scroll": 'loop-scroll 10s linear infinite',
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      filter: {
        gray: 'invert(60%) sepia(4%) saturate(20%) hue-rotate(180deg) brightness(90%) contrast(85%)',
        green: 'invert(45%) sepia(70%) saturate(600%) hue-rotate(100deg) brightness(90%) contrast(85%)',
      },
    },
  },
  plugins: [require('tailwindcss-filters')],
}

