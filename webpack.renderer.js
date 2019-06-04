//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	mode,
	target: 'electron-renderer',
	resolve: {
		extensions: ['.mjs', '.js', '.svelte']
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true
					}
				}
			},
			//{
			//	test: /\.css$/,
			//	use: [
			//		/**
			//		 * MiniCssExtractPlugin doesn't support HMR.
			//		 * For developing, use 'style-loader' instead.
			//		 * */
			//		prod ? MiniCssExtractPlugin.loader : 'style-loader',
			//		'css-loader'
			//	]
			//}
		]
	},
	plugins: [
		//new MiniCssExtractPlugin({
		//	filename: '[name].css'
		//}),
	],
	devtool: prod ? false : 'source-map'
};
