const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const demoPath = path.resolve(__dirname, '../demo')

module.exports = merge(webpackBaseConfig, {
  output: {
    path: path.join(demoPath, 'build'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/demo/build/'
  },
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
    new HtmlWebpackPlugin({
      template: path.join(demoPath, 'app.html'),
      title: 'VGEditor flow demo',
      chunks: ['shared', 'flow'],
      filename: 'flow.html'
    }),
    new HtmlWebpackPlugin({
      template: path.join(demoPath, 'app.html'),
      title: 'VGEditor koni demo',
      chunks: ['shared', 'koni'],
      filename: 'koni.html'
    }),
    new HtmlWebpackPlugin({
      template: path.join(demoPath, 'app.html'),
      title: 'VGEditor mind demo',
      chunks: ['shared', 'mind'],
      filename: 'mind.html'
    })
  ]
})
