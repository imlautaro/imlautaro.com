import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(() => {
	const runtimeConfig = useRuntimeConfig()

	const sitemap = new SitemapStream({
		hostname: runtimeConfig.public.baseUrl,
	})

	const pages = ['/']

	pages.forEach(page => {
		sitemap.write({
			url: page,
		})
	})

	sitemap.end()

	return streamToPromise(sitemap)
})
