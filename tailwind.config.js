/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	mode: "jit",
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx, png, glb}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx, png, glb}",
		"./components/**/*.{js,ts,jsx,tsx,mdx, png, glb}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx, png, glb}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '20px',
				md: '40px',
				lg: '60px',
				xl: '80px'
			}
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '1440px',
			xl: '1920px'
		},
		extend: {
			colors: {
				primary: '#25D377',
				dark: '#000C04',
				gray: '#999D9E',
				puskur1: '#0063B9',
				puskur2: '#0A0F3F',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			backgroundImage: {
				'puskur-gradient': 'linear-gradient(to top right, #0063B9, #0A0F3F)',
				'kontrib-gradient': 'linear-gradient(to top right, #9678F5, #44366E)',
				'bmk-gradient': 'linear-gradient(to top right, #0063B9, #001B33)',
				'chill-gradient': 'linear-gradient(to top right, #BE2428, #520608)',
				'todolist-gradient': 'linear-gradient(to top right, #FFF020, #BC1316)',
				'study-gradient': 'linear-gradient(to top right, #4497E3, #0D3050)',
				'hokben-gradient': 'linear-gradient(to top right, #FBB716, #E64101)',
				'nuha-gradient': 'linear-gradient(to top right, #0B6463, #032626)',
				'coffeehub-gradient': 'linear-gradient(to top right, #FE9900, #BB4D02)'
			},
			animation: {
				'slowspin': 'spin 8s linear infinite',
				'loop-scroll': 'loop-scroll 10s linear infinite',
				'scroll': 'scroll 15s linear infinite',
				'shine': 'shine 5s linear infinite'
			},
			keyframes: {
				scroll: {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				},
				shine: {
					'0%': {
						'background-position': '100%'
					},
					'100%': {
						'background-position': '-100%'
					}
				}
			},
			filter: {
				gray: 'invert(60%) sepia(4%) saturate(20%) hue-rotate(180deg) brightness(90%) contrast(85%)',
				green: 'invert(45%) sepia(70%) saturate(600%) hue-rotate(100deg) brightness(90%) contrast(85%)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('tailwindcss-filters'), require("tailwindcss-animate")],
}

