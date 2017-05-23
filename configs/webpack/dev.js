const { resolve } = require('path')
const webpack = require('webpack')

const basicConfigs = require('./base')
const devConfigs = {
  // some overriding
}

module.exports = Object.assign({}, basicConfigs, devConfigs)
