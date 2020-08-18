const path = require('path');
const { VueLoaderPlugin  }  = require('vue-loader');

module.exports = {
	entry: ['@babel/polyfill', path.join(__dirname, 'src', 'js', 'index.js') ],
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
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'css-loader' },
					{ loader: 'style-loader' }
				] 
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
}
