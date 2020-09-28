const p = require('path');

module.exports = {
    entry: p.resolve(__dirname,'./app/index.js'),
    output: {
        path: p.resolve(__dirname,'./build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [ {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        } ]
    },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true 
    }
}