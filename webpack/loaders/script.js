const PATHS = require('../paths').PATHS;

module.exports = {
  test: /\.jsx?$/,
  use: [ 'babel-loader'],
  exclude: /node_modules/
};