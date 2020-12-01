console.log(10);
console.log("Fasial Ahmed");
console.log("I am very excited");

var bananaPrice = 12;
console.log(typeof bananaPrice);

var name = "Fasial Ahmed";
console.log(typeof name);

var isHot = true;
var isPoor = false;

console.log(typeof isHot);
console.log(typeof isPoor);


// number boolan string 
// typeof 


var nam = "I promise i will work hard to become a coder oky";
console.log(nam.toLowerCase());
console.log(nam.toUpperCase());
console.log(nam.indexOf("will"));
console.log(nam.split(" "));


// toLowerCase() ... toUpperCase() ... indexof() .. split()...



var number1 = 25;
var number2 = "15.5";
number2 = parseFloat(number2);
number1 = parseInt(number2);
console.log(number1 + number2);
console.log(number1 + number2);

number2 = +number2;
console.log(number2);

// parseFloat ,, parseInt ,, +number2 ....
// ''+number2 --> string convert 
// toFixed() 

number2 = '' + number2;
console.log(typeof number2);


var price1 = 25;
var price2 = 10;
var total = price1 + price2;
console.log(total);
var total = price1 - price2;
console.log(total);
var total = price1 * price2;
console.log(total);
var total = price1 / price2;
console.log(total);
var total = price1 % price2;
console.log(total);



var x = 5.0003;
x = Math.abs(x);
console.log(x);
x = Math.ceil(x);
console.log(x);
x = Math.floor(x);
console.log(x);
x = Math.round(x);
console.log(x);
x = Math.random(x) * 100;
console.log(Math.round(x));

// Math.abs() ,,, Math.ceil() .. Math.floor() ... Math.round() ... Math.random()..


var biskitPrice = 12;
if (bananaPrice < 10) {
    console.log("I will eat the biskit");
} else {
    console.log("Khali cha is better");
}