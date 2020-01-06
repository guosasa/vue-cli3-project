/**
 * Created by hztangzhao on 2019-08-26.
 */
// const $path = require('./configs/webpack.params')
//
// const distConfig = {
//   publicPath: $path.cdn_path_dist,
//   devServer: {
//     host: '0.0.0.0',// can be overwritten by process.env.HOST
//     port: 3008, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
//     autoOpenBrowser: true,
//     disableHostCheck: true,
//   }
// }
//
// const releaseConfig = {
//   publicPath: $path.cdn_path_release,
//   outputDir:'release',
//   productionSourceMap:false
// }
//
// if(process.env.release) {
//   module.exports = process.env.release === 'true' ? releaseConfig:distConfig
//
// }


const $path = require('./configs/webpack.params')
const distConfig = {
  publicPath: $path.cdn_path_dist,
}
const releaseConfig = {
  publicPath: $path.cdn_path_release,
  outputDir:'release',
  productionSourceMap:false
}
if(process.env.release) {
  module.exports = process.env.release === 'true' ? releaseConfig:distConfig
} else {
  module.exports = {
    devServer: {
      port: '3008',
      host: '0.0.0.0',
      disableHostCheck: true,
    }
  }
}

