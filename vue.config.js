const appBasePath = '/BrandCenter'
const distAppPath = '/App'

module.exports = {
  lintOnSave: true,
  filenameHashing: false,
  publicPath: process.env.NODE_ENV === 'production' ? appBasePath + distAppPath : '/',
  outputDir: '../..' + distAppPath,
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  chainWebpack: config => {
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].css'
      }])
    }
  },
  configureWebpack: {
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js'
    }
  }
}
