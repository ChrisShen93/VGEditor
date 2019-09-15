const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')

const demoPath = path.resolve(__dirname, '../demo')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: fs.readdirSync(demoPath).reduce((entries, dir) => {
    const fullDir = path.join(demoPath, dir)
    const entry = path.join(fullDir, 'app.js')
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[dir] = ['webpack-hot-middleware/client', entry]
    }
    return entries
  }, {}),
  output: {
    path: path.join(demoPath, '__build__'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },
  devtool: 'cheap-module-eval-source-map',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
