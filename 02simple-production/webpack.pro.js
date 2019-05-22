const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')//清除dist
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
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename:'index.html',
                template:'../index.html',//可指定模板，可省略
                inject:true,
                minify: { // 压缩HTML文件
                    removeComments: true, // 移除HTML中的注释
                    collapseWhitespace: true, // 删除空白符与换行符
                    minifyCSS: true// 压缩内联css
                }
            }),
    ]
}