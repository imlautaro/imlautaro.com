import { colors } from '@unocss/preset-mini'

export default defineNuxtConfig({
	colorMode: {
		classSuffix: '',
	},
	extends: ['oxecore'],
	modules: ['@nuxtjs/color-mode'],
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
		webFonts: {
			fonts: {
				sans: 'Lexend:400,500,700',
			},
		},
	},
})
