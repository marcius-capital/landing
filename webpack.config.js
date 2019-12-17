const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: 'build.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				],
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				],
			},
			{
				test: /\.sass$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader?indentedSyntax'
				],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
						// the "scss" and "sass" values for the lang attribute to the right configs here.
						// other preprocessors should work out of the box, no loader config like this necessary.
						'scss': [
							'vue-style-loader',
							'css-loader',
							'sass-loader'
						],
						'sass': [
							'vue-style-loader',
							'css-loader',
							'sass-loader?indentedSyntax'
						]
					}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/,
				loader: 'url-loader?limit=100000',
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './index.html'),
			filename: 'index.html',
			favicon: './src/static/favicon.ico',
			inject: 'body',
		}),
		// убедитесь что подключили плагин!
		new VueLoaderPlugin(),
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true
	},
	performance: {
		hints: false
	},
	// devtool: '#eval-source-map',
	optimization: {
		minimizer: [new UglifyJSPlugin({
			parallel: true,
			extractComments: true,
		})],
	},
}

if (process.env.NODE_ENV === 'production') {
	// module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new HtmlWebpackPlugin({
			title: 'PRODUCTION prerender-spa-plugin',
			template: path.resolve(__dirname, './index.html'),
			filename: path.resolve(__dirname, 'dist/index.html'),
			favicon: './src/static/favicon.ico',
		}),
		new PrerenderSPAPlugin({
			staticDir: path.resolve(__dirname, './dist'),
			routes: ['/'],
		}),

		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
