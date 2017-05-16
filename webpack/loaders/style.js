const ENV = process.env.NODE_ENV;
const PATHS = require('../paths').PATHS;

const ExtractTextPlugin = require('extract-text-webpack-plugin');
//need to download autoprefixer from npm 
const autoprefixer = require('autoprefixer');

const isProduction = (ENV === 'production');

const loaders = {
    styleLoader: {
        loader: 'style-loader', 
    },
    cssLoader: {
        loader: 'css-loader',
        options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[local]__[hash:base64:3]',
            minimize: isProduction,
        },
    },    
    sassLoader: {
        loader: 'sass-loader'
    },
    postcssLoader: {
        loader: 'postcss-loader',
        options: {
            plugins: [autoprefixer],
        },
    }
};

const defaultLoaders = [
    loaders.cssLoader,
    loaders.sassLoader,
    loaders.postcssLoader,
];

module.exports = {
  test: /\.scss$/,
  use: (
    isProduction
    ? ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: defaultLoaders,
    })
    : [
      loaders.styleLoader,
      ...defaultLoaders,
    ]
  ),
};