module.exports = {
	entry: "./script/main.js",
	output: {
		path: "app/js",
		filename: "script.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.scss/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
};