const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      { test: /\.(js|vue)$/, use: ['eslint-loader'], enforce: 'pre', exclude: /node_modules/ },
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.vue$/, use: ['vue-loader'] },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
