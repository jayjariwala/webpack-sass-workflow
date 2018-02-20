 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");

 const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

 module.exports = merge(common, {
 	 module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader" ,  options: { importLoaders: 1 } 
                }, {
                    loader: "postcss-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
   plugins: [
     new UglifyJSPlugin(),
     extractSass
   ]
 });