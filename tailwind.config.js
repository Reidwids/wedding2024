/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontSize: {
				md: "15px",
			},
			colors: {
				mainBlue: "#094C62",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"cover-photo": "url('/coverPhoto3.jpg')",
				"rsvp-bg": "url('/rsvpBg.jpg')",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				card: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
				picture:
					"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
			},
			fontFamily: {
				lora: ["var(--font-lora)", "serif"],
				classy: ["var(--font-classy)", "serif"],
				bodoni: ["var(--font-bodoni)", "serif"],
				motherland: ["var(--font-motherland)", "serif"],
				roseritta: ["var(--font-roseritta)", "serif"],
			},
			rotate: {
				23: "23deg",
				60: "60deg",
			},
			backgroundPosition: {
				"custom-pos1": "center left 40%",
				"custom-pos2": "center bottom 5%",
				"custom-pos2-1": "center bottom 20%",
				"custom-pos3": "center bottom",
			},
		},
	},
	plugins: [],
};
