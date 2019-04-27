
var express = require('express')

var app = express();

app.set('views', './views')
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'))

app.get('/', function(req,res){
    var data = {
        message:'this is message',
        date: new Date()
    }
    // console.log(__dirname);
    res.render('index', data);
});

app.get('/service', function(req,res){

    res.render('service');
});

app.get('/product', function(req,res){

    res.render('product');
});

app.listen(3000);