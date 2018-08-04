// подключаем пути
var path = require('path');
var webpack = require("webpack"); // need be installed in project

module.exports = {

    // обозначаем входную точку
    entry: path.resolve(__dirname, 'app') + '/src/index.js',
    output: {
        // path: path.resolve(__dirname, 'dist') + '/app',
        path: path.resolve(__dirname, 'app') + '/dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },


    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'app'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    // minify bundle
    // plugins: [
    //            new webpack.optimize.UglifyJsPlugin({minimize: true}),
    //          ]

};
