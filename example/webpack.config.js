const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [
    new HtmlwebpackPlugin({
      inject: 'body',
      title: 'UPSURGE',
      template: 'src/server/templates/index.html'
    })
  ]
};
