'use strict';

let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do{
    console.log(num);
    num++
}
while(num<=55);


for (let i = 1; i < 8; i++){
    console.log(i);
}

function showFirstMessage(a,b) {
    console.log(a+b);
}

showFirstMessage("Hello", "world");

function calc (a, b){
    return (a+b);
}
console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,3));

const calc = (a, b)=> { return a + b };
