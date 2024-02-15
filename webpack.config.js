const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        test: path.join(__dirname, 'src/index.js')
    },
    output: {
        path: path.join(__dirname, 'test'),
        filename: 'test.js'
    },
    module: {
        rules: [{
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']  
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test',
            filename: 'index.html',
            template: 'src/temp.html'
        })
    ]
}