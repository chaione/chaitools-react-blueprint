const { resolve } = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
});

const basicConfigs = require('./base')
const productionConfigs = {
  // some overriding
}
const productionPlugins = [
]

// let configs = Object.assign({}, basicConfigs, productionConfigs)
// configs.plugins = Object.assign({}, basicConfigs.plugins, productionPlugins)

// module.exports = {
//   ...basicConfigs,
//   ...productionCO
// }


// module.exports = configs

