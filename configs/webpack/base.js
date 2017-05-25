const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const { resolve } = require('path')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

var basicConfigs = {
  context: resolve(__dirname, '../../src'),

  output: {
    path: resolve(__dirname, '../../dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app.tsx'
  ],

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'src'),
    historyApiFallback: true,
    publicPath: '/',
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
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
          { loader: 'style-loader', options: { sourceMap: true }  },
          { loader: 'css-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true }  },
          { loader: 'css-loader',     options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader',    options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024
          }
        }
      }
    ]
  },

  plugins: [
    new TsConfigPathsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

module.exports = basicConfigs
