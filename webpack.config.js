const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [HtmlWebPackPluginConfig],
}
