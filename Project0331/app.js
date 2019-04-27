var express = require('express')
var bodyParser = require('body-parser');
var auth = require('./auth');
var app = express();
var session = require('express-session')

app.set('views', './views')
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile);

app.use(bodyParser());

app.use(session({
    secret:'noone'
}));

/*
    기본적으로 express
 */

/*
같은 표현
function(req,res){

}
(res,req)=>{

}
*/

app.use((req,res,next)=>{
    console.log(new Date());
    next();
});

function authroize(req,res,next){
    if(req.session.email){
        next();
    }else{
        res.render('login',{})
    }
}

app.get('/', authroize, (req,res,next)=>{
    //로그인이 안돼있으면, 로그인 페이지로 이동
    res.render('index',  {email: req.session.email});
    
    // if(req.session.email){
    //     res.render('index', {});
    // }else{
    //     res.redirect('/login');
    // }
});

app.get('/login', (req,res,next)=>{
    res.render('login',{});
});

app.post('/login', (req,res,next)=>{

    var email = req.body.email;
    var password = req.body.password;

    var result = auth.login(email, password);

    if(result){
        req.session.email = email; //세션에 사용자 이메일 저장
        res.redirect('/');
    }else{
        res.redirect('login')
    }

});

app.listen(3000);

//body-parser 설치하기
//'sudo'를 꼭 앞에 붙여주기 npm install express-generator -g 설치해주기