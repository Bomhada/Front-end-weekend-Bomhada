
var uuid = require('uuid')

var users = []

//es5
function User(id, email, name, password){
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
}

//es6
/*
class User(){
    consrtructor(id, email. name, password){
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
    }
}
*/


//회원가입 함수
function signup(email, name, password){

    //해당 email이 우리 유저인지 확인해주고 만약 있다면 오류를 던저야한다.
    // var err = new Error('중복불가');
    // throw err;

    for(var i = 0; i < users.length; i++){
        if(users[i].email === email){
            // throw new Error('중복불가');
            return;
        }
    }

    //uuid 생성
    var id = uuid.v1();

    //새로운 유저 생성
    var newUser = new User(id, email, name, password);
    
    //저장
    users.push(newUser);
    
    //회원가입 완료 메일 전송
}


//로그인 함수
function login(email, password){
    //email과 password를 회원 데이터베이스를 사용하여 만약 정상적으로 로그인 했다면
    //user 정보를 리턴( 비밀번호를 제외 )
    //없다면 null를 리턴

    for(var i = 0; i < users.length; i++){
        if(users[i].email === email && users[i].password === password){
            return;{
                id:users[i].id,
                email:users[i].email,
                name:users[i].name
            }
        }
    }

}

//로그인
var result = login('abc@google.com', 'secret2');
    if result(){
        console.log('로그인 성공', result);
    }else{
        console.log('로그인 실패')
    }

//회원이름 수정 함수
function updateName(id, newName){
    //abc@google.com 게정의 name을 jack으로 수정해보세요.
    //updatename을 사용해서
    //중요! email이 아니라 id입니다.
    for(var i = 0; i < users.length; i++){
        if(user[i].id === id){
            users[i].name = newName;
        }
    }
}

//초기화

var user = login('ab')

//비밀번호 변경 함수
function updatePassword(id, newPassword){
    
}

signup('abc@google.com', 'joy', 'secret');
signup('avv@google.com', 'jack', 'secret');
signup('avv@google.com', 'jack', 'secret');

console.log(users);