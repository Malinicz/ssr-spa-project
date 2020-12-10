const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './spa/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'spa', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: '/spa/public/index.ejs',
    filename: 'index.html'
  })]
};