module.exports = {
	entry: "./script/*.js",
	output: {
		path: 'app/js',
		filename: "script.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" }
		]
	}
};