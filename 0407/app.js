var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

app.use(bodyParser());

app.set('views','./views');
app.set('view engine','html');
app.engine('html',require('ejs').renderFile);

//function(){}
//()=>{}

app.get('/',(req,res)=>{
    res.render('index',{});
})

app.get('/services', (req,res)=>{
    const data ={
        result:[
            {
                title:'Database',
                content:'This is sucks'
            },
            {
                title:'Strage',
                content:'What the...'
            },
            {
                title:'Hosting',
                content:'oh my goodness'
            }
        ]
    }
    res.json(data)
})

app.listen(3000);