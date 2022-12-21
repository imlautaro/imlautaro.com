export default defineEventHandler(event => {
	const config = {
		'User-Agent': '*',
		'Disallow': '',
	}

	event.node.res.setHeader('Content-Type', 'text/plain')

	return Object.keys(config)
		.map(key => `${key}: ${config[key as keyof typeof config]}`)
		.join(`\n`)
})
