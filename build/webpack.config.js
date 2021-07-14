const path = require('path')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: path.resolve(__dirname,'../src/main.js'),
    output: {
        filename:'bundle.[hash].js'
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        port:8888,
        hot:true 
    },
    plugins: [new HtmlWebpackPlugin({template:path.resolve(__dirname,'../index.html')})],
    mode:'development',
    module:{
        rules:[{
            test:/\.css$/,use:'css-loader'
        },{
            test:/\.ttf$/,use:'url-loader'
        }]
    }
   
}