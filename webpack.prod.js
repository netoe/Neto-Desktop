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
		rap: './src/graphic/applications/AppReviewAndPlan.tsx',
		netoDashboards: './src/graphic/Neto-Dashboards/index.tsx',
		infraTextTailor: './src/graphic/Infra-Tools/index.tsx',
	},
	optimization: {
		splitChunks: {
			// chunks: 'all',
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
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
