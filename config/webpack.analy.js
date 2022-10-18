const { merge: mergeConfig } = require('webpack-merge');
const prodConfig = require('./webpack.prod');
const SpeedWebpackPlugin = require('speed-measure-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = new SpeedWebpackPlugin().wrap(
  mergeConfig(prodConfig, { plugins: [new BundleAnalyzerPlugin()] })
);
