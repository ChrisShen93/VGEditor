module.exports = {
  presets: [
    [
      '@vue/app',
      {
        absoluteRuntime: false
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@common': './src/common',
          '@utils': './src/utils'
        }
      }
    ]
  ]
}
