const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_DEV === 'development'

module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, '../dist'),
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: { '@': path.join(__dirname, '../src') }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(less)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'static/images/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      inject: true,
      hash: false
    })
  ].filter(Boolean)
}
