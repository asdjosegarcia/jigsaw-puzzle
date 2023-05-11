const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin")

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
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles':  path.resolve(__dirname,'src/styles'),
            '@containers': path.resolve(__dirname,'src/containers'),
            '@img':path.resolve(__dirname,'src/img'),
            '@sounds':path.resolve(__dirname,'src/sounds')
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
            },
            {
                test:/\.(css|scss)$/,
                use:[
                    "style-loader", //esto tiene que estar en este orden!
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.(png|svg|mp3|jp(e*)g|gif)$/,
                type:'asset'//asset viene con webpack, reemplazo a varios plugins y loaders de imagenes
            },
        ]
    },
    plugins: [
         new HtmlWebpackPlugin({ //htmlWebpackPlugin sirve para que la sintaxis jsx pueda transformarse en html
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,//commprime la pagina
        port: 9000,//va a salir en el puerto 9000
        hot: true,//va a actualizar la pagina en caliente
    },


}