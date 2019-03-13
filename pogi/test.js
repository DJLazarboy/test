'use strict';





var number = 5;
var string = "hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string '*9)
let persone = {
    name:"Jasd",
    age: 25,
    isMarried : false 
};
console.log(persone["name"]);

let arr = ['plum.png' ,'orange.jpg','apple.bpm'];
//console.log(arr[0])//выбирает то что укажешь 

//alert("Hellow");// модальное окно и выскакиевает то что введешь 
//let answer = +prompt("Есть ли вам 18","Да"); // можно вызвать да или нет в браузере 

//console.log(answer);//получаем буливы значения 
//console.log(typeof(answer));

//console.log("arr" + " - object");// складывание строк 
//console.log(4 + " - object");

let incr = 10,
decr = 10;


//префексная форма возвращает уже измененное значение а постфиксное старое 
console.log(incr++);// инкримент и дикримент (увел)
console.log(decr--);// уменьшение

console.log(5%2);//остаток от деления 
console.log("2"=== 2 );//ели стоит 1 равно то это присваевание если 2 раза то проверка на равинство, а если 3 раза то это строгая проверка по типам данныхи
 let isChecked = true ,
 isClose = false;
 console.log(isChecked || isClose);