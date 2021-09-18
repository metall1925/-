// ctrl + /  for 1 page
/* ctrl + shift + / for more pages  */
'use strict'; // this code works in modern mod
/*let message;
message = 'hello';
alert(message);//hello*/
/*let message = 'hello!';
alert(message);*/
/*et user = 'John';
let age = '25';
let message = 'hello';
alert(user);
alert(age);
alert(message);*/
/*let message;
message = 'hello';
message = 'world';
alert(message);*/
/*let hello = 'hello world';
let message;
message = hello;
alert(message);
alert(hello);
const myBirstday = '11.10.2000';//NO CHAIN*/
/*let admin;
let name = 'JHOSH';
admin = name;
alert(admin);*/
/*let ourPlanetName = 'Earth';
let currentUserName = 'Jhosh';
const BIRSDAY = '11.10.2000';
const age = somecode(BIRSDAY);*/

//not misstake
/*let message = 'hello';
message = 12345;
alert(message);*/ //языки в которых в люмой момент могут быть разные виды данных называются- динамически типизированными

//ТИПЫ ДАННЫХ

/*1 number
  2 bigint
  3 string может содержать ноль или больше символов
	   let name = 'Ivan';
	   alert(`hello, ${name}!`);
	   alert(`result: ${1+2}`);
  4 bolean (true and false)
  5 null для неизвестных значений
  	let age = null;
  6 undefined для неприсвоенных значений
  	let age;
  	alert(age); output undefined
  7 object для более сложных структур данных
  8 symbol для уникальных индификаторов

оператор typeof позволяет увидеть, какой тип данных сохранён в переменной

typeof undefined // 'undefined'
typeof 0 // 'number'
typeof 10n // 'bigint'
typeof true // 'boolean'
typeof 'maks' // 'string'
typeof symbol('id') // 'symbol'
typeof Math // 'object'
typeof null // 'object' this is mistake in programmist
typeof alert // 'function'*/

//ALERT, PROMPT, CONFIRM

/*let age = prompt('how old are you?', 100);
alert(`you have ${age} old!`)// you are have 100 yers!*/
/*let isBoss = confirm('are you Boss?');
alert(isBoss);*/
/*let name = prompt('what is you name?', 'Anna');
alert(`you name is ${name}`);*/

//ПРЕОБРАЗОВАНИЕ ТИПОВ

/*		СТРОКОВОЕ ПРЕОБРАЗОВАНИЕ 

let value = true;
alert(typeof value); //boolean
value = String(value);
alert(typeof value); //string
преобразование происходит так false становится 'false' и так далее
*/

//ЧИСЛЕННОЕ ПРЕОБРАЗОВАНИЕ

/*let str = '132';
alert(typeof str);//string
let num = Number(str);
alert(typeof num); // number*/

/*let age = Number('ten');
alert(age);//NaN, преобразование не удалось*/
/*undefined		NaN
null			0
true/false		1/0
string			пробелы обрезаются остальное превращается в число, если строка пустая то значение будет '0'
*/

//ЛОГИЧЕСКОЕ ПРЕОБРАЗОВАНИЕ

/*значение которые интуитивно пкстые, вроде 0, пустой строки, null, undefined, NaN СТАНОВЯТСЯ false
все остальные значиния становятся true*/
/*alert(Boolean(1)); //true
alert(Boolean(0)); //false*/

/*alert(Boolean('hello')); // true
alert(Boolean('')); // false*/

//ТЕРМИНЫ: УНАРНЫЙ, БИНАРНЫЙ, ОПЕРАНД.

/*let a = prompt('0', 1);
let b = prompt('0', 2);
alert(+a + +b);//12*/

//операторы сравнения

/*a>b, a<b. больше или меньше
a>=b, a<=b. больше или равно или меньше или равно
a==b равно
a!=b не равно
true - означает да, верно, правильно
false - означает нет, неверно, ложь.

alert(2 > 1); // true
alert(2 == 1); // false
alert(2 != 1); // true*/
/*let result = 5 > 4;
alert(result); // true
*/
// сравнение строк

/*alert('s' > 'a');
alert('kasa' > "kabas");
*/
//сравнение разных типов

// при сравнении разных типов, приводят каждое киз них к числовому.

/*let a = 0
alert(Boolean(a)); // false

let b = '0';
alert(Boolean(b)); // true

alert(a==b); //true
*/
//строгое сравнение

// использование обычного сравнения модет вызывать проблемы:

/*alert(0 == false); // true
alert('' == false); // true
// Оператор строгого равенства(=== ) проверяет равенство без приведения типов.
alert(0 === false); // false
// ещё есть оператоор строгого неравенства !==

//сравниние null and undefined

alert( null === undefined); // false

alert(null == undefined); // true*/

/*let year = prompt('how old are you?', '');
if (year <= 20) alert('very sad');
if (year >= 20) alert('you are milf');
*/
/*et year = prompt('how are you&')

if (year == 'fine'){
  alert('it is good');
}
else {
  alert('so sad');
}*/
/*let year = prompt('how old in over WWW');
if (year < 1945) {
alert('early');
} else if (year > 1945) {
  alert('late');
} else {
  alert('true');
}*/

/*let accessAllowed;
let age = prompt('how old are you&');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);*/

/*let age = prompt('how old are you?')
let accessAllowed = (age > 18) ? true : false;
alert(accessAllowed);*/


/*let age = prompt('how old?', '');

let message = (age < 5) ? 'hello, baby':
  (age < 25) ? 'hey':
  (age < 70) ? 'welcome' :
  'amazing';
  alert(message);*/


/*let age = prompt('how old?', '');
let message;
if (age < 5) {
  message = 'hello baby';
} else if (age < 25) {
  message = 'hey';
} else if ( age < 70) {
  message = 'welcome';
} else {
  message = 'amazing';
}
alert(message);*/

/*let name = prompt('what is my name?');
let message;
if (name == 'maks') {
message = 'corect';
} else {
  message = 'not true';
}
alert(message);*/

/*let value = prompt('give me number', 0);

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}*/

/*let age = prompt('how old?', '');

let message = (age < 5) ? 'hello, baby':
  (age < 25) ? 'hey':
  (age < 70) ? 'welcome' :
  'amazing';
  alert(message);*/


/*let login = prompt('you are login?');
let message = (login == 'user') ? 'hello':
(login == 'boss') ? 'welcome':
(login == 'not have') ? 'fuck you':
'';
alert(message);*/

//ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

