const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'; // console.log(process.env.NODE_ENV)

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '',
  lintOnSave: true,
  devServer: {
    proxy: {
      '/SunApi/': {
        target: 'http://localhost:9581',
        // target: 'https://www.nianran.net/SunApi/',
        changeOrigin: true,
        pathRewrite: {
          '^/SunApi': '/'
        },
      },
    }
  },
  chainWebpack: (config) => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('style', resolve('src/assets/style'))
  },
  configureWebpack: config => {
    // 用cdn方式引入
    config.externals = {
      'vue': 'Vue',
      // 'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      // 'axios': 'axios',
      // 'vconsole': 'VConsole',
      // 'md5': 'md5',
      // 'wx': 'jWeixin',
      // 'mint-ui': 'MINT',
      // 'vue-amap': 'VueAMap',
      'dayjs': 'dayjs',
      'html2canvas': 'html2canvas',
      'jspdf': 'jsPDF',
    }
    if (isProduction) {
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true,
            },
          },
          sourceMap: false,
          parallel: true,
        })
      )
    }
    config.performance = {
      hints: 'warning',
      //入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1,
}