'use strict';

const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',
	entry: {
		...common.entry,
		core: './src/core/main.ts',
	},
	devServer: {
		historyApiFallback: true, /* support for react-router  */
		contentBase: './dist',
	},
	plugins: [
		new Webpack.DefinePlugin({
			'__ENV__': JSON.stringify('prod'),
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
	],
});
