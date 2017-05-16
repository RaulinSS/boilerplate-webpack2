const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');

const PATHS = require('./paths').PATHS;
const defaults = require('./defaults');

module.exports = Object.assign(defaults, {
    entry: [
        // activate HMR for React
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?http://localhost:3000/',
        // the entry point of our app
        `${PATHS.src}/index.js`
    ],
    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
    
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),

        //create virtual index.html or custom index template
        new HtmlWebpackPlugin({
            title: "Project Demo Webpack",
            minify: {
                collapseWhitespace: true
            },
            //add dynamic hash to the bundle
                //hash: true,
            template: `${PATHS.src}/index.html`
        })
    ]
});