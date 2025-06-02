// /** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}", // si tu utilises le dossier `app`
		"./pages/**/*.{js,ts,jsx,tsx,mdx}", // pour le dossier `pages`
		"./components/**/*.{js,ts,jsx,tsx,mdx}", // pour les composants
		"./src/**/*.{js,ts,jsx,tsx,mdx}", // pour les composants
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				accent: "hsl(var(--accent))",
				"accent-foreground": "hsl(var(--accent-foreground))",
				card: "hsl(var(--card))",
				"card-foreground": "hsl(var(--card-foreground))",
				primary: "hsl(var(--primary))",
				"primary-foreground": "hsl(var(--primary-foreground))",
				secondary: "hsl(var(--secondary))",
				"secondary-foreground": "hsl(var(--secondary-foreground))",
				muted: "hsl(var(--muted))",
				"muted-foreground": "hsl(var(--muted-foreground))",
				destructive: "hsl(var(--destructive))",
				"destructive-foreground": "hsl(var(--destructive-foreground))",
				popover: "hsl(var(--popover))",
				"popover-foreground": "hsl(var(--popover-foreground))",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				"ring-offset": "hsl(var(--ring-offset))",
				"accent-muted": "hsl(var(--accent-muted))",
				"accent-muted-foreground": "hsl(var(--accent-muted-foreground))",
				"accent-border": "hsl(var(--accent-border))",
				"accent-hover": "hsl(var(--accent-hover))",
				"accent-active": "hsl(var(--accent-active))",
				"accent-focus": "hsl(var(--accent-focus))",
				"accent-muted-hover": "hsl(var(--accent-muted-hover))",
				"accent-muted-active": "hsl(var(--accent-muted-active))",
				"accent-muted-focus": "hsl(var(--accent-muted-focus))",
				"accent-foreground-hover": "hsl(var(--accent-foreground-hover))",
				"accent-foreground-active": "hsl(var(--accent-foreground-active))",
				"accent-foreground-focus": "hsl(var(--accent-foreground-focus))",
				"accent-foreground-muted": "hsl(var(--accent-foreground-muted))",
				"accent-foreground-muted-hover":
					"hsl(var(--accent-foreground-muted-hover))",
				"accent-foreground-muted-active":
					"hsl(var(--accent-foreground-muted-active))",
				"accent-foreground-muted-focus":
					"hsl(var(--accent-foreground-muted-focus))",
				"accent-foreground-border": "hsl(var(--accent-foreground-border))",
				"accent-foreground-border-hover":
					"hsl(var(--accent-foreground-border-hover))",
				"accent-foreground-border-active":
					"hsl(var(--accent-foreground-border-active))",
				"accent-foreground-border-focus":
					"hsl(var(--accent-foreground-border-focus))",
				"accent-foreground-border-muted":
					"hsl(var(--accent-foreground-border-muted))",
				"accent-foreground-border-muted-hover":
					"hsl(var(--accent-foreground-border-muted-hover))",
				"accent-foreground-border-muted-active":
					"hsl(var(--accent-foreground-border-muted-active))",
				"accent-foreground-border-muted-focus":
					"hsl(var(--accent-foreground-border-muted-focus))",
				// tu peux ajouter les autres couleurs personnalisées ici
			},
			borderRadius: {
				sm: "var(--radius-sm)",
				md: "var(--radius-md)",
				lg: "var(--radius-lg)",
				xl: "var(--radius-xl)",
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)"],
				mono: ["var(--font-geist-mono)"],
				caption: ["var(--font-caption)"],
			},
		},
	},
	safelist: [
		"bg-background",
		"text-foreground",
		// ajoute d'autres classes dynamiques que tu utilises mais qui pourraient être purgées
		"bg-accent",
		"text-accent-foreground",
		"border-accent",
		"hover:bg-accent/50",
		"hover:text-accent-foreground",
		"hover:border-accent",
	],
	plugins: [
		// require('tailwindcss-animate'),
	],
};

export default config;
