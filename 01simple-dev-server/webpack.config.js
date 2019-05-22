const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'bundle')
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(png|jpg|gif)$/,use:['file-loader']}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'../index.html'
        })
    ],
    devServer:{
        hot:true,
        port:3000
    }
}