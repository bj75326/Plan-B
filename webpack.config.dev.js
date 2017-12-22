/**
 * Created by jibin on 17/11/15.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, './dist');

module.exports = {

    entry: {
        index: ['./src/app.js'],
        common: [
            'react',
            'react-dom',
            'react-router-dom',
            'redux',
            'react-redux',
            'immutable',
            'react-fastclick'
        ]
    },

    output: {
        path: BUILD_PATH,
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    /src\/component\/requires\/([^/]+\/)*([^/]+)\.js$/
                ],
                loader: 'babel-loader'
            },
            {
                test: /src\/component\/requires\/([^/]+\/)*([^/]+)\.js$/,
                loaders: ['bundle-loader?lazy', 'babel-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                //loader: 'style-loader!css-loader'
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath: './'
                })
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                include: /fonts/,
                loader: 'url-loader?limit=10000&name=fonts/[name].[md5:hash:hex:7].[ext]'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                include: /img/,
                loader: 'file-loader?name=img/[name].[ext]'
            }
        ]
    },

    devServer: {
        inline: true,
        hot: true
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'common.bundle.js'}),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),

        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/template/index.html',
            inject: 'body',
            hash: true,
        }),

        new ExtractTextPlugin('style.css'),

        new webpack.HotModuleReplacementPlugin(),

        /*
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })*/
    ]
};
