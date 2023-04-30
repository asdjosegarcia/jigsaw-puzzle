const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',//va a tomar como punto de entrada el index.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        // extensions: ['js', '.jsx'], //comentado por que aun no tenemos loaders para esto
        alias: {
            '@components': path.resolve(__dirname, 'src/components/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'html-loader'
                }]
            }
        ]
    },
    plugins: [
         new HtmlWebpackPlugin({ //htmlWebpackPlugin sirve para que la sintaxis jsx pueda transformarse en html
            template: './public/index.html'
        }) 
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },


}