const path = require('path');
const webpack = require('webpack'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');

const srcPath = './src';

module.exports = {
  entry: srcPath + '/main.js',
  output: {
    filename: 'js-diagram-chart.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.ProgressPlugin(),
  ]
};