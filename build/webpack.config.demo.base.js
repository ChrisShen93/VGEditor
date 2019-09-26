const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')

module.exports = merge(webpackBaseConfig, {
  resolve: {
    alias: {
      'vg-editor': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      { test: /\.styl(us)?$/, use: ['vue-style-loader', 'css-loader', 'stylus-loader'] }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'shared',
          filename: 'shared.js',
          chunks: 'initial'
        }
      }
    }
  },
  plugins: [
  ]
})
