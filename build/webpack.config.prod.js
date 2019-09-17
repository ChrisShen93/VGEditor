const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    bundle: path.resolve(__dirname, '..', 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].js',
    library: 'VGEditor',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.ProgressPlugin(function handler (percentage, msg) {
      console.log((percentage.toFixed(2) * 100) + '%', msg)
    })
  ],
  devtool: 'cheap-module-source-map',
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
})
