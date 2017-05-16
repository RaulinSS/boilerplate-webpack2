const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');

const PATHS = require('./paths').PATHS;
const defaults = require('./defaults');

module.exports = Object.assign(defaults, {
    entry: [
        // activate HMR for React
            //'react-hot-loader/patch',

        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        //'webpack-dev-server/client?http://localhost:8080',

        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        //'webpack/hot/only-dev-server',

        // the entry point of our app
        //'./index.js'
        `${PATHS.src}/index.js`
    ],

    devServer: {
        // enable HMR on the server
        hot: true,

        // match the output path
        contentBase: join(__dirname, 'dist'),

        //configure the port
            //port: 9000,
        
        // match the output `publicPath`
            //publicPath: '/'

        //option for open the window automatically
        open: true
    },

    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
    
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),

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