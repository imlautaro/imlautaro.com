import { colors } from '@unocss/preset-mini'

export default defineNuxtConfig({
	colorMode: {
		classSuffix: '',
	},
	css: ['~/assets/css/styles.css'],
	extends: ['oxecore'],
	googleFonts: {
		families: {
			Lexend: [400, 500, 700],
		},
	},
	modules: ['@nuxtjs/color-mode', '@nuxtjs/google-fonts'],
	srcDir: 'src',
	typescript: {
		shim: false,
	},
	unocss: {
		theme: {
			colors: {
				primary: colors!.indigo,
				gray: colors!.neutral,
			},
		},
	},
})
