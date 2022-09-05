const path = require('path');
const { merge: mergeConfig } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = mergeConfig(baseConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 80,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
  },
});
