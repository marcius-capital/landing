const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	target: 'web',
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: 'js/[name].[hash].js',
		chunkFilename: 'js/[id].[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					// https://vue-loader.vuejs.org/ru/guide/extract-css.html#webpack-4
					process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
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
		// extract css into its own file
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: 'css/[name].[chunkhash].css'
		}),
		// Compress extracted CSS. We are using this plugin so that possible
		// duplicated CSS from different components can be deduped.
		new OptimizeCSSPlugin({ safe: true }),
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
	// https://webpack.js.org/plugins/split-chunks-plugin/
	optimization: {
		removeAvailableModules: true,
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				},
				default: {
					enforce: true,
					priority: 1
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: 2,
					name: 'vendors',
					enforce: true,
					chunks: 'all'
				}
			}
		},
		minimize: true,
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: false,
				terserOptions: {
					safari10: true,
					warnings: false,
					output: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		],
	},
}


// * PRODUCTION

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './index.html'),
			// filename: config.build.filename,
			inject: true,
			mobile: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				html5: true
				// more options:
				// https://github.com/kangax/html-minifier#options-quick-reference
			},
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			chunksSortMode: 'dependency',
			favicon: './src/static/favicon.ico',
		}),
		// Static webpage
		new PrerenderSPAPlugin({
			staticDir: path.resolve(__dirname, './dist'),
			routes: ['/'],
		}),
	])
}
