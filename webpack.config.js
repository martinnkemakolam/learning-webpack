const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        test: path.join(__dirname, 'src/index.js')
    },
    output: {
        path: path.join(__dirname, 'test'),
        filename: '[name][contenthash].js',
        clean: true
    },
    devTool: 'source-map',
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
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, '/test')
        },
        hot: true,
        open: true,
        port: 3100,
        historyApiFallback: true,
        compress: true
    }
}