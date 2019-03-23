//타입 변환

/*
var name = 'bomi';
console.log(typeof(name));

var num1 = '1';
var num2 = 1;

if(num1 === num2){
    console.log('num1 type : ', typeof(num1));
    console.log('num2 type : ', typeof(num2));
    console.log('true');
}
*/

/*

    == 값이 같으면 된다.
    === 값과 타입이 모두 같아야한다.

    != 갑이 다르면 된다.
    !== 갑과 타입이 모두 달라야한다.
 */

//명시적 타입 변환 - Type casting

/*
var num = 10;
var s+num = String(num);

console.log(typeof(num));
console.log(typeof(s_num));
//-------------------------------
var test = true;
var s+test = String(test);

console.log(s_test);
console.log(typeof(s_string));
//-------------------------------
var unm = 10;
var s_num = num.toString();

console.log(typeof(s_num));
//-------------------------------
var s_num = '100';
var num = Number(s_num);
var num2 = parseInt(s_num);
var num3 = parseFloat(s_num);

console.log(typeof(s_num));
console.log(typeof(num));
console.log(typeof(num2));
console.log(typeof(nume3));
//-------------------------------
*/

//암묵적 타입 변환 - Type coersion

/*
//-----문자열 암묵적 변환--------------------------
var num = 10;
var s_num = 10 + '';

console.log(typeof(s_num));
//------숫자 암묵적 변환-------------------------
var s_num = '10';
var num = s_num*1;

console.log(num);
console.log(typeof(num))
*/

// false
// undefined
// null
// 0, -0
// NaN
// ''

/*
if(''){
    console.log('true')
}
*/

