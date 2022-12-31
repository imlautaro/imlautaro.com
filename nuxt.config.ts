import { colors } from '@unocss/preset-mini'

export default defineNuxtConfig({
	extends: ['oxecore'],
	srcDir: 'src',
	typescript: {
		shim: false,
	},
	unocss: {
		theme: {
			colors: {
				primary: colors!.indigo,
			},
		},
		webFonts: {
			fonts: {
				sans: 'Lexend:400,500,700',
			},
		},
	},
})
