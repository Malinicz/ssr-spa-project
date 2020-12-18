const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './spa/src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'spa', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?ts$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: '/spa/public/index.html',
    filename: 'index.html',
    inject: false
  })]
};