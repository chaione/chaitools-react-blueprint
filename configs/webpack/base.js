const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const { resolve } = require('path')

const srcRoot = resolve(__dirname, '../../src');

var basicConfigs = {
  context: srcRoot,

  output: {
    path: resolve(__dirname, '../../dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [resolve(__dirname, '../../src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loaders: ['awesome-typescript-loader'],
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: "source-map-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
          name: '[name].[ext]',
        },
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '../src/index.html',
      chunksSortMode: 'dependency'
    })
  ]
}

module.exports = basicConfigs
