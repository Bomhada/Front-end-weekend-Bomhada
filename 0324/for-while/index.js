//반복문

//for
/*

    for(초기화식; 조건식(true or false); 증감식;){

    }

    i++의 뜻은
    i = i + i;

    i--의 뜻은
    i = i - i;
*/
/*
for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log("done");
*/

// 9부터 0까지 출력
/*
for(var b = 9; b >= 0; b--){
    console.log(b);
}
console.log("done")
*/

//1부터 20까지 수 중 짝수만 출력해 보세요  number % 2== 0 =>짝수
/*
for(var b = 1; b <= 20; b++;){
    console.log(b)
}
console.log('done')
*/

//정답
/*
for(var i=1; i<=20; i++){
    if(i%2==0){
        console.log(i)
    }
}

for(var i = 1; i <= 20; i++){
    if(i%2==1){
        continue;
    }
    console.log(i);
}
*/

//break; continue;

//1부터 10가지 출력을 하는데 5가 있으며 반복문을 빠져나와라.

/*
for(var i = 10; i <= 10; i++){
    if(i == 5){
        break;
    }
    console.log(i)
}
console.log('done')
*/
//control + c

for(var i = 0; i<10; i++){
    for(var j = 0; j<10; j++){
        console.log(i,j);
    }
}

//구구단을 출력해보세요

//console.log(i+'x'+j+'='+(i*j));
//i : 1~9
//j : 1~9

/* 정답
for(var i = 1; i <= 9; i++){
    for(var j = 1; j <= 9; j++){
        console.log(i+'x'+j+'='+(i*j))
    }
}
*/
//while
/*
while(조건식){

}
*/
/*
var isDone = false;

while(isDone){
    if(isDone){
        break;
    }
}
*/
/*
var i = 0;
while(i<10){
    i++;
    console.log(i);
}

var i = 0;
while(true){
    i++;

    console.log(i);

    if(i==10){
        break;
    }
}
*/