
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom sci-fi colors
				space: {
					DEFAULT: '#0B0B1E', // Deep space blue
					light: '#1C1C3C',
				},
				neon: {
					cyan: '#00FFFF',
					magenta: '#FF00FF',
					yellow: '#FFFF00',
					blue: '#0088FF',
					purple: '#9B30FF',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-slow': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 10px 2px rgba(0, 255, 255, 0.5), 0 0 20px 4px rgba(0, 255, 255, 0.3)'
					},
					'50%': { 
						opacity: '0.7',
						boxShadow: '0 0 15px 3px rgba(0, 255, 255, 0.7), 0 0 30px 6px rgba(0, 255, 255, 0.5)'
					}
				},
				'rotation': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-slow': 'fade-in-slow 1.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'rotation': 'rotation 20s linear infinite',
				'shimmer': 'shimmer 2s linear infinite',
			},
			backgroundImage: {
				'cyberpunk-gradient': 'linear-gradient(to right, #00FFFF, #FF00FF)',
				'dark-space': 'linear-gradient(145deg, #0B0B1E 0%, #1A1A40 100%)',
				'glowing-dots': 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
				'grid-lines': 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'hsl(var(--foreground))',
						p: {
							lineHeight: '1.75',
						},
						h1: {
							color: 'hsl(var(--foreground))',
						},
						h2: {
							color: 'hsl(var(--foreground))',
						},
						h3: {
							color: 'hsl(var(--foreground))',
						},
						li: {
							color: 'hsl(var(--foreground))',
						},
						a: {
							color: 'hsl(var(--foreground))',
							'&:hover': {
								color: 'hsl(var(--primary))',
							},
						},
					},
				},
			},
			boxShadow: {
				'neon-cyan': '0 0 5px #00FFFF, 0 0 10px rgba(0, 255, 255, 0.8)',
				'neon-magenta': '0 0 5px #FF00FF, 0 0 10px rgba(255, 0, 255, 0.8)',
				'neon-yellow': '0 0 5px #FFFF00, 0 0 10px rgba(255, 255, 0, 0.8)',
				'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
