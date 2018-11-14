const webpack = require('webpack')
const basicConfigs = require('./base')
const { resolve } = require('path')

console.log('source: ', resolve(__dirname, '../../src'))
const devConfigs = {
  entry: [
    'react-hot-loader/babel',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app.tsx'
  ],

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, '../../src'),
    historyApiFallback: true,
    publicPath: '/',
  },

  devtool: 'inline-source-map',
}
const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),

  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
]

let configs = Object.assign({}, basicConfigs, devConfigs)
configs.plugins = configs.plugins.concat(devPlugins)

module.exports = configs
