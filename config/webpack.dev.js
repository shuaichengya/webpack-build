const path = require('path');
const { merge: mergeConfig } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const ReactFreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = mergeConfig(baseConfig, {
  mode: 'development',
  plugins: [new ReactFreshWebpackPlugin()],
  devServer: {
    port: 80,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
  },
});
