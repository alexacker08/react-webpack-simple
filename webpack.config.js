

const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname,'dist');
const APP_DIR = path.resolve(__dirname,'src');
const htmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const config = {
    mode:'production',
    devServer:{
        contentBase: BUILD_DIR,
        compress:true,
        port:9000,
        disableHostCheck:false,
        open:true,
        hot:true
    },
    optimization: {
        splitChunks: {
            cacheGroups:{
                default:false,
                vendor:{
                    chunks:'all',
                    test:/node_modules/,
                    name:'vendor'
                }
            }
        },
        runtimeChunk:{
            name:'runtime'
        }
    },
    entry: {
        bundle:`${APP_DIR}/index.js`,
    },
    output:{
        path:BUILD_DIR,
        filename:'[name].[hash].js',
        publicPath:'/react-webpack-simple'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:'/node_modules/',
                use:{
                    loader:'babel-loader',
                    options:{
                        babelrc: false,
                        presets:[
                            "@babel/preset-env", 
                            "@babel/preset-react"
                        ],
                        plugins:[
                            "@babel/plugin-proposal-class-properties", 
                            "@babel/plugin-syntax-dynamic-import"
                        ]
                    }
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(png|jpg|jpeg|svg)$/,
                use:'file-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'index.html'
        }),
        new InlineManifestWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
        })
    ]
}

module.exports = config;