const webpack = require('webpack')
const basicConfigs = require('./base')

const devConfigs = {}
const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),

  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
]

let configs = Object.assign({}, basicConfigs, devConfigs)
configs.plugins = configs.plugins.concat(devPlugins)

console.log('Dev configs')
console.log(configs.plugins)
module.exports = configs
