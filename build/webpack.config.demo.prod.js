const fs = require('fs')
const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.demo.base')

const demoPath = path.resolve(__dirname, '../demo')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: fs.readdirSync(demoPath).reduce((entries, dir) => {
    const fullDir = path.join(demoPath, dir)
    const entry = path.join(fullDir, 'app.js')
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[dir] = [entry]
    }
    return entries
  }, {}),
  devtool: 'cheap-module-eval-source-map'
})
