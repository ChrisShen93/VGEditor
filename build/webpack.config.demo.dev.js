// const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.config.demo.base')

const demoPath = path.resolve(__dirname, '../demo')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: {
    demo: ['webpack-hot-middleware/client', path.resolve(demoPath, 'app.js')]
  },
  output: {
    filename: '[name].js'
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(demoPath, 'template.html'),
      inject: true,
      filename: 'index.html'
    })
  ]
})
