import { colors } from '@unocss/preset-mini'

export default defineNuxtConfig({
	css: ['~/assets/css/styles.css'],
	extends: ['oxecore'],
	modules: ['@nuxt/content'],
	runtimeConfig: {
		public: {
			baseUrl: 'http://localhost:3000',
		},
	},
	srcDir: 'src',
	typescript: {
		shim: false,
	},
	unocss: {
		theme: {
			colors: {
				primary: colors!.violet,
				gray: colors!.neutral,
			},
		},
	},
})
