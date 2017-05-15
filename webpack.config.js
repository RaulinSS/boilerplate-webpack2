//const path = require('path');
const { resolve, join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: resolve(__dirname, 'src'),

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
        './index.js'
    ],

    output: {
        // the output bundle
        filename: 'bundle.js',

        path: resolve(__dirname, 'dist'),

        // necessary for HMR to know where to load the hot update chunks
            //publicPath: '/'
    },

    //allow editing and saving your changes from chrome devtools.
    //devtool: 'inline-source-map',

    //provides a server and live reloading (you will need add to scripts
    //at package.json) 
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

    module: {
        rules: [      
            {
                test: /\.jsx?$/,
                use: [ 'babel-loader', ],
                exclude: /node_modules/
            },            
            {   
                //without sass
                    //test: /\.css$/,
                //with sass
                test: /\.scss$/,
                //with css modules
                    //use: [ 'style-loader', 'css-loader?modules' ]
                //without css modules
                use: [ 'style-loader', 'css-loader', 'sass-loader']
                /*  This has the disadvantage that you will not be able to utilize 
                    the browser's ability to load CSS asynchronously and parallel. 
                    Instead, your page will have to wait until your whole JavaScript bundle is loaded, 
                    to style itself. for production you will use << ExtractTextWebpackPlugin plugin >> */
            },
        ],
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
            hash: true,
            template: "index.html"
        })
    ]
}
