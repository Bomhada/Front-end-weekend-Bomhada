
var list = [10,undefined,5,7];

var sum = 0;
try{
    for(var i = 0; i < list.length; i++){
        if(list[i]===undefined){
            throw new Error('숫자가 아니다.')
        }
        sum = sum + list[i];
    }
}catch(e){
    sum = 0;
}finally{
    console.log(sum);
}


console.log('sum = ', sum)

/*
//해야하는 일
console.log('do0')

//오류를 뱉어내는 코드
try{
    console.log('try문 안 코드')
}catch(e){
    console.log('오류발생!');
}finally{
    console.log('무조건 실행')
}
*/
