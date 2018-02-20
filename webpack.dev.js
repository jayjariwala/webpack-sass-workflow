 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            },{ 
                loader: 'css-loader', options: { importLoaders: 1 } 
            },{
                loader: 'postcss-loader'
            },{
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
 });