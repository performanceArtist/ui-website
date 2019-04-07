const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require("mini-css-extract-plugin");

const config = {
  entry: {
    app: './src/app.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
  },

  devServer: {
    port: 5000,
  },

  module: {
    rules: [
      { 
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /[a-z]*\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
  ],
};

module.exports = config;
