/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "768px",
			md: "1024px",
			lg: "1440px"
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "16px",
				sm: "24px",
				md: "28px",
				lg: "32px"
			},
		},
		extend: {
			fontFamily: {
				heading: ['Playfair Display', 'serif'],
				body: ['Inter', 'sans-serif'],
			},
			colors: {
				white: '#FFFFFF',        // trắng tinh
				gray: '#D1D5DB',         // xám trung tính
				mediumGray: '#9CA3AF',   // xám vừa
				darkGray: '#4B5563',     // xám đậm
				black: '#111827',        // gần đen
				lightGray: '#F7F2EC',
				blue: '#c8daea',

			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
