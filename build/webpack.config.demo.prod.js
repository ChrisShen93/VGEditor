const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.config.demo.base')

const demoPath = path.resolve(__dirname, '../demo')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    demo: path.resolve(demoPath, 'app.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(demoPath, 'build'),
    publicPath: '/VGEditor/demo/build/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(demoPath, 'template.html'),
      inject: true,
      filename: 'index.html'
    })
  ]
})
