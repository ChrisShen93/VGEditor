module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'module-resolver',
      {
        'alias': {
          '@components': './src/components',
          '@common': './src/common',
          '@utils': './src/utils'
        }
      }
    ]
  ]
}
