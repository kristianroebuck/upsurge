const webpack = require('webpack');


module.exports = {
  devtool: 'eval',
  entry: 'src/index.js',
  output: {
    path: __dirname,
    name: 'index.js'
  },
  target: 'web',
  module: {
    loaders: [{
      test: /\.js/,
      exclude: /node_modules/,
      loaders: ['babel!eslint'],
      include: ['src', 'test']
    }]
  }
};
