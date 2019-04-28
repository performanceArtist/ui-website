const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
const webpack = require('webpack');

const htmlFiles = ['index', 'order', 'gallery', 'feedback', 'contact', 'ui', 'blank'].map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/views/${name}/${name}.pug`,
    filename: `${name}.html`,
    chunks: ['commons', name]
  })
});

const config = {
  entry: {
    index: './src/views/index/index.js',
    order: './src/views/order/order.js',
    gallery: './src/views/gallery/gallery.js',
    feedback: './src/views/feedback/feedback.js',
    contact: './src/views/contact/contact.js',
    ui: './src/views/ui/ui.js',
    blank: './src/views/blank/blank'
  },
  optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: "commons",
					chunks: "initial",
					minChunks: 2,
					minSize: 0
				}
			}
		}
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },

  devServer: {
    port: 5000,
  },
  //devtool: 'source-map',
  module: {
    rules: [
      { 
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader:'css-loader'
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts'
            }
        }]
      },
      {
        test: /[^\.]+\.(png|jpg|gif)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'images/'
            }
        }]
      },
      {
        test: /[^\.]+\.(mp4|webM)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'videos/'
            }
        }]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
   })
  ].concat(htmlFiles),
};

module.exports = config;
