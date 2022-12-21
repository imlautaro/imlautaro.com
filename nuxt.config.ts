import { colors } from '@unocss/preset-mini'

const range = (size: number, startAt = 1) =>
	Array.from(Array(size).keys()).map(i => i + startAt)

export default defineNuxtConfig({
	appConfig: {
		nuxtIcon: {
			size: '1.5em',
		},
	},
	modules: ['@unocss/nuxt', 'nuxt-icon'],
	srcDir: 'src',
	typescript: {
		shim: false,
	},
	unocss: {
		preflight: true,
		safelist: [
			...range(12).map(i => `space-x-${i}`),
			...range(12).map(i => `space-y-${i}`),
			'items-start',
			'items-baseline',
			'items-center',
			'items-stretch',
			'items-end',
			'justify-start',
			'justify-end',
			'justify-center',
			'justify-between',
			'justify-around',
			'justify-evenly',
		],
		theme: {
			colors: {
				primary: colors!.indigo,
			},
		},
		typography: true,
		webFonts: {
			fonts: {
				sans: 'Lexend:400,500,700',
			},
		},
	},
})
