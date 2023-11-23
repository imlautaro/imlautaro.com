export default defineNuxtPlugin({
	name: 'bunny-fonts',
	hooks: {
		'app:created': () => {
			const appConfig = useAppConfig()

			const fonts = () => {
				const families = Object.keys(appConfig.fonts)

				if (families.length === 0) {
					return ''
				}

				const family = families
					.map(
						family =>
							`${family}:${appConfig.fonts[
								family as keyof typeof appConfig.fonts
							].join(',')}`
					)
					.join('|')

				return `https://fonts.bunny.net/css?family=${family}`
			}

			useHead({
				link: [
					{
						rel: 'preconnect',
						href: 'https://fonts.bunny.net',
					},
					{
						rel: 'stylesheet',
						href: fonts(),
					},
				],
			})
		},
	},
})
