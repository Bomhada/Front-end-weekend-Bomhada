
var express = require('express');
//npm isntall express
//npm install ejs

var server = express();

server.set('views', './views');
server.set('view engine', 'html');
server.engine('html', require('ejs').renderFile);


server.get('/', function(req,res){
    res.render('index');
});

server.listen(3000);