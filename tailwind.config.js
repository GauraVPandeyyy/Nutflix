/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			neutral: {
  				light: '#F5F5F5',
  				dark: '#333333'
  			},
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
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
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
  		fontFamily: {
  			serif: [
  				'Cormorant Garamond',
  				'serif'
  			],
  			sans: [
  				'Figtree',
  				'sans-serif'
  			]
  		},
  		animation: {
  			grain: 'grain 8s steps(10) infinite',
  			'scroll-x': 'scroll-x 20s linear infinite',
  			float: 'float 6s ease-in-out infinite'
  		},
  		keyframes: {
  			grain: {
  				'0%, 100%': {
  					transform: 'translate(0, 0)'
  				},
  				'10%': {
  					transform: 'translate(-5%, -10%)'
  				},
  				'20%': {
  					transform: 'translate(-15%, 5%)'
  				},
  				'30%': {
  					transform: 'translate(7%, -25%)'
  				},
  				'40%': {
  					transform: 'translate(-5%, 25%)'
  				},
  				'50%': {
  					transform: 'translate(-15%, 10%)'
  				},
  				'60%': {
  					transform: 'translate(15%, 0%)'
  				},
  				'70%': {
  					transform: 'translate(0%, 15%)'
  				},
  				'80%': {
  					transform: 'translate(3%, 35%)'
  				},
  				'90%': {
  					transform: 'translate(-10%, 10%)'
  				}
  			},
  			'scroll-x': {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}