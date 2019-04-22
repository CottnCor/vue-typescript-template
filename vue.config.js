const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// XXXXXX
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'dist', // XXXXXX
  assetsDir: '', // XXXXXXXXXXX，XX outputDir
  indexPath: 'index.html', // XXXXX index.html XXXX，XX outputDir
  pages: undefined, // XXXX
  productionSourceMap: false, // XXXXXXX source map
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"] // XX ts|tsx
    },
  },
  chainWebpack: config => {
    // XXXXXX
    config.resolve.alias
      .set('@', resolve('src'))
  },
  css: {
    modules: false, // XX CSS modules
    extract: true, // XXXX CSSXXXX
    sourceMap: false, // XX CSS source maps
    loaderOptions: {
      // XXXXscssXX
      sass: {
        data: `@import "@/styles/index.scss";`
      },
      less: {
        // ant design vue XXXX
        modifyVars: {
          'primary-color': '#1890ff', // XXXX
          'link-color': '#1890ff', // XXX
          'success-color': '#32978c', // XXX
          'warning-color': '#fd8732', // XXX
          'error-color': '#d0505d', // XXX
          'box-shadow-base': '0 1px 3px rgba(0, 0, 0, .09)' // XX
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {}
}