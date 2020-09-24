import store from './src/store/index'
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: store.state.themecolor === 'gray' ? '~theme/gray' : '~theme/pure'
      }
    ]
  ]
}
