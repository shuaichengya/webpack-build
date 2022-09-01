const path = require('path');
const { merge: mergeConfig } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = mergeConfig(baseConfig, { mode: 'development' });
