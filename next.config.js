module.exports = {
	images: {
		domains: ['lorempixel.com'],
	},
	webpack: (config) => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: 'empty',
		}

		return config
	},
}
