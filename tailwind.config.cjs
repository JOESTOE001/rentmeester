/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			colors: {
				'green': {
					800: '#166534',
					900: '#14532d',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
} 