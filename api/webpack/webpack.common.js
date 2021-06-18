const path = require('path')
const serverlessWebpack = require('serverless-webpack')
const webpack = require('webpack')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  stats: 'minimal',
  context: path.resolve(process.cwd()),
  entry: serverlessWebpack.lib.entries,
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'lambdas/'),
    },
    extensions: ['.ts', '.tsx', '.json', '.js'],
  },
  target: 'node',
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /date-fns$/,
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
}
