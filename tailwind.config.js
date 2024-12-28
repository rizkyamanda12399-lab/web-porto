/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
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
      backgroundImage: {
        'puskur-gradient': 'linear-gradient(to top right, #0063B9, #0A0F3F)',
        'kontrib-gradient': 'linear-gradient(to top right, #9678F5, #44366E)',
        'bmk-gradient': 'linear-gradient(to top right, #0063B9, #001B33)',
        'chill-gradient': 'linear-gradient(to top right, #BE2428, #520608)',
        'todolist-gradient': 'linear-gradient(to top right, #FFF020, #BC1316)',
        'study-gradient': 'linear-gradient(to top right, #4497E3, #0D3050)',
        'hokben-gradient': 'linear-gradient(to top right, #FBB716, #E64101)',
      },
      animation: {
        "slowspin": 'spin 8s linear infinite',
        "loop-scroll": 'loop-scroll 10s linear infinite',
        "scroll": 'scroll 15s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      filter: {
        gray: 'invert(60%) sepia(4%) saturate(20%) hue-rotate(180deg) brightness(90%) contrast(85%)',
        green: 'invert(45%) sepia(70%) saturate(600%) hue-rotate(100deg) brightness(90%) contrast(85%)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-filters')],
}

