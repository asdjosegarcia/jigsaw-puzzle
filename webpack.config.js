const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin")

module.exports = {
    entry: './src/index.js',//va a tomar como punto de entrada el index.js
    output: {
        path: path.resolve(__dirname, 'docs'),//carpeta de salida
        filename: 'main.js',//nombre de salida
        // publicPath: '/'
    },
    // mode: 'development',
    resolve: {
        // extensions: ['js', '.jsx'], //comentado por que aun no tenemos loaders para esto
        alias: {//nos evitan tener que escribir todo el nombre de la ruta
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles':  path.resolve(__dirname,'src/styles'),
            '@containers': path.resolve(__dirname,'src/containers'),
            '@img':path.resolve(__dirname,'src/img'),
            '@sounds':path.resolve(__dirname,'src/sounds'),
            '@common':path.resolve(__dirname,'src/common'),
            '@utils':path.resolve(__dirname,'src/utils'),
            '@context':path.resolve(__dirname,'src/context/'),
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
                use:[//06/10/23 desactivar y eliminar style-loader de aqui reemplazanlodo por MiniCssExtractPlugin.loader,
                    // "style-loader", //esto tiene que estar en este orden!
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"//lo dejamos activo a pesar de que solo se usar css comun, por el momento, talvez a futuro se use
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
            template: './index.html',
            filename: 'index.html'

        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dev-server'),
        },
        compress: true,//commprime la pagina
        port: 3000,//va a salir en el puerto 9000
        hot: true,//va a actualizar la pagina en caliente
        open:true,//va a abrirse en el navegador al iniciar dev-server
    },


}