/**
 * Created by jibin on 17/12/13.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

config.entry.index.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    progress: true,
    stats: {
        colors: true,
    },
    hot: true,
    //contentBase: './dist/'
});

server.app.get('*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
server.listen(8080,function(){
    console.log('PORT 8080 works OK');
});