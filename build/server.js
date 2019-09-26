const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config.demo.dev')

const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}, Ctrl+C to stop`)
})
