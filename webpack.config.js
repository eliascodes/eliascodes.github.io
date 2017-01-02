const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',//path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'assets', 'js'),
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
