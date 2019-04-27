
//내장객체

/*
var user = {
    name:'jack'
}

console.log(user);

var user1 = new object();
user1.name = 'jack'

console.log(user1);

function User(name){
    this.name = name;
}

var user2 = new User('jack');

console.log(user2.name);
*/

//math

/*
var result = Math.min(4,5,7);
var result = Math.abs(-3);
console.log(result1);
*/

//Date

/*
var result = new Date();
var result = Date.now();

console.log(result);

var user = {
    email:'avvasdasf@asdfasfda.com',
    name:'Bomi',
    password:'secret',
    passwordChangedAt: new Date(),
    createdAt:new Date(),
}

console.log(user);
*/

//This (메소드? 함수?)

/*
function User(name){
    this.name = name;
    // console.log(this);
}

User.prototype.say = function(){
    console.log(this);
}

var user = new User('Jack');

user.say();
*/

//Call by Reference vs Call by Value

//배열 뿌수기 (초기화, 읽기, 추가, 삭제)

/*
var arr = [4, 3, 2, 1];

console.log( arr[2]);

arr.push(80);

console.log(arr);


arr.splice(3,1);

console.log(arr);
*/
/*
for(var i = 0; i < arr.length; i++){
    console.log(arr[1]);
    if(arr[i]===3){
        console.log(arr[i]*2);
    }else{
        console.log(arr[i]);
    }
}
*/



//user라는 생성자 함수를 사용해서 name은 jack age는  20인 객체를 만들어 보세요

//name이 jack인 객체를 users안에 넣어보세요 push를 활용해서

//user라는 생성자 함수를 사용해서 name이 joy이고 age가 21인 객체를 만들고 user안에 넣어보세요

//user라는 생성자 함수를 사용해서 name이 jason이고 age가 26인 객체를 만들고 user안에 넣어보세요

//for문을 사용해서 user에 있는 user들을 출력해보세요

var users = []

function User(name,age){
    this.name = name;
    this.age = age;
}

users.push(new User('jack',20));
users.push(new User('joy',21));
users.push(new User('jason',26));

// for(var i =0; i <users.length; i++){
//     console.log(users[i]);
// }

var sum = 0;
var avg = 0;

//users 안에있는 유저들의 평균 나이를 구하고 출력해보세요. (for문 사용)
//평균은 N개의 값을 다 더한뒤에 n으로 나누면 됩니다.

for(var i = 0; i < users.length; i++){
    sum = sum + users[i].age;
}

avg = sum / users.length;

console.log(avg);

for(var i = 0; i < users.length; i++){
    if(users[i].name ==='joy'){
        users[i].age = 25;
    }
}
console.log(users);

