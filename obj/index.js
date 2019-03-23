
/*
var name = 'bomi';
var age = 20;

var user = {
    name: 'bomi',
    age: 20,
    address: 'secret'
}

console.log(user);
console.log(user,name);
console.log(user,age);
console.log(user,address);
console.log(typeof(user));
*/

//객체의 나이가 10 이상 20미만이면 console.log('어린놈')
//객체의 나이가 20이상이면 console.log('청춘')

/*
if(user.age>=10 && user.age<20){
    console.log('어린놈');
}else if(user.age>=20){
    console.log('청춘');
}else{
    console.log('??');
}
*/

/*
var user1 = new Object();
user1.name = 'ddd';
user1.age = 20;
user1.address = 'secret';

console.log(user1);
console.log(user1.name);
console.log(user1.age);
console.log(user1.address);
*/

//이름이 jack이고 나이가 20인 변수 user1
//이름이 joi이고 낭기ㅏ 20인 변수 user2


var user1 = {
    name : 'jack',
    age : 20,
    say:function(){
        console.log('hi');
    }
}
var user2 = {
    name : 'joi',
    age : 20,
    say:function(){
        console.log('hi');
    }
}
