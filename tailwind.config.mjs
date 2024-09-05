/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {
			colors: {
				heights: {
					0: "var(--heights-0)",
					1: "var(--heights-1)",
					2: "var(--heights-2)",
					"2-half": "var(--heights-2-half)",
					3: "var(--heights-3)",
					4: "var(--heights-4)",
					5: "var(--heights-5)",
				}
			},

			screens: {
				"3xl": "2048px"
			},

			spacing: {
				"kin-min": "8rem",
				"kin-sm": "3.4rem",
				"kin-base": "1.3rem",
				"kin-lg": "0.8rem",
				"kin-max": "0.3rem",
			},

			fontSize: {
				"body-tiny": "var(--body-size-tiny)",
				"body-base": "var(--body-size-base)",
				"subheader": "var(--subheader-size)",
				"header": "var(--header-size)",
			}
		},
	}
}