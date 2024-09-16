import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
			},
			gridTemplateColumns: {
				"60/40": "60% 38%",
			},
			colors: {
				limegreen: {
					900: "hsl(66, 71%, 10%);",
					800: "hsl(66, 71%, 20%)",
					700: "hsl(66, 71%, 30%)",
					600: "hsl(66, 71%, 40%)",
					500: "hsl(66, 71%, 50%)",
					400: "hsl(66, 71%, 60%)",
					300: "hsl(66, 71%, 70%)",
					200: "hsl(66, 71%, 80%)",
					100: "hsl(66, 71%, 90%)",
					50: "hsl(66, 71%, 95%)",
				},
				marine: {
					900: "hsl(219, 62%, 10%);",
					800: "hsl(219, 62%, 20%)",
					700: "hsl(219, 62%, 30%)",
					600: "hsl(219, 62%, 40%)",
					500: "hsl(219, 62%, 50%)",
					400: "hsl(219, 62%, 60%)",
					300: "hsl(219, 62%, 70%)",
					200: "hsl(219, 62%, 80%)",
					100: "hsl(219, 62%, 90%)",
					50: "hsl(219, 62%, 95%)",
				},
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
