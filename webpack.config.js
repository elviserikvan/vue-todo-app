const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src', 'js', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public')
	},
	module: {
		rules:  [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	}
}
