
/*
function test1(){
    console.log('test1')
    for(var i = 0; i < 100; i++){
        if(i%10===0){
            console.log(i)
        }
    }
}

function test2(){
    console.log('test2')
}
function test3(){
    console.log('test3')
}
*/

test1();
console.log('test1 호출했음')
test2();
console.log('test2 호출했음')
test3();
console.log('test3 호출했음')

setTimeout(function('작업1 시작'){
    console.log('3초 뒤')
}, 3000)

setTimeout(function('작업2 시작'){
    console.log('2초 뒤')
}, 2000)

setTimeout(function('작업3 시작'){
    console.log('1초 뒤')
}, 1000)

//promise 문법

//async await 문법 :Promise에 대해서 알고 있어야함.