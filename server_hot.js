/**
 * Created by jibin on 17/12/13.
 */

var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.dev');
//var proxyMiddleware = require('http-proxy-middleware');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    inline: true,
    progress: true,
    stats: {
        colors: true,
    }
}));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.listen(8080, function() {
    console.log('正常打开8080端口')
});
