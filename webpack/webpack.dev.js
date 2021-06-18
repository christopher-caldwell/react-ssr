const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // eslint-disable-line
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    // uncomment to see your bundle analysis
    // new BundleAnalyzerPlugin()
  ],
})
