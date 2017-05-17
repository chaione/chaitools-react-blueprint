const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
  context: resolve(__dirname, 'src'),

  output: {
    path: resolve(__dirname, 'dist'),
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
    extensions: ['.ts', '.tsx', '.js']
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
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),

    // new webpack.LoaderOptionsPlugin({
    //   postcss: [ autoprefixer, precss ]
    // }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

