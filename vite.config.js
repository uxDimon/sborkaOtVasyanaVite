const { resolve } = require("path");

module.exports = {
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				page2: resolve(__dirname, "page2/index.html"),
			},
		},
		outDir: "docs",
	},
};
