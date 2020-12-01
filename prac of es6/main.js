//--> uotput : 


// console.log("Hellow World");
// console.log("We are very poweful cse frild");

// const x = "faisal";

// console.log(x);



//--> defult function : 




// function sum(x, y) {
//     z = x + y;
//     console.log(z);
// }
// sum(50, 60);

// function sum(x = 10, y = 20) {
//     z = x + y;
//     console.log(z);
// }
// sum();

// function sum(x = 10, y = 20) {
//     z = x + y;
//     console.log(z);
// }
// sum(50, 60);




// function say1(massage) {
//     console.log(massage);
// }
// say1();


// function say(massage) {
//     console.log(massage);
// }
// say("hello");

// function say(massage = "hi") {
//     console.log(massage);
// }
// say();





// --> when function has many parametter : rest parameter 



// function sum(...x) {
//     let total = 0;
//     for (let i of x) {
//         total = total + i;
//     }
//     console.log(total);
// }
// sum(1, 2, 3, 4, 4);


// function add(a, b, ...x) {
//     let t = 0;
//     for (let i of x) {
//         t = t + i;
//     }
//     console.log(t);
// }
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



//--> spread operator : -> we have not need to a[0],a[1].. just we can say ...a than it indicatr a[0] to a[last].


// function add(a, b, c) {
//     console.log(a + b + c);
// }

// let n = [1, 2, 3];
// add(...n);

// var first = ["apple", "faisal", "youhana"];
// var secend = ["utsho", "fahim", 'rahat'];
// var third = [...first, ...secend];
// console.log(third);

// var a = ["apple", "faisal", "youhana"];
// var b = ["utsho", ...a, "fahim", 'rahat'];
// console.log(b);



//--> for..of use : ->    for (variable of iterable) {}


// let str = 'abc';
// for (let i of str) {
//     console.log(i);
// }

// let s = [80, 90, 70];
// for (let i of s) {
//     i = i + 5;
//     console.log(i);
// }



//--> strict : -> code worng dorte pare ---> "use strict"

// "use strict"
// let str = "My name is Faisal Ahmed";
// console.log(str);
// console.log(str.length);
// console.log(typeof str);



//--> dynamic function : 
// "use strict"
// var a = function(x) {
//     return x;
// }


// console.log(a(10));




//-> create object : --> // var  x= 10 [variable ] and var  x= {---} [object ]


// var faisal = {
//     shirt: {
//         color: "black",
//         size: "xl",
//         length: "half",
//         price: "250tk"
//     },
//     print: {
//         color: "black",
//         size: "xl",
//         length: "full",
//         price: "500tk"
//     },
//     boby: "good",
//     face: "smile"


// }

// console.log(faisal['shirt']['size']);
// console.log(faisal["boby"]);

// if (faisal["shirt"]["color"] == "black") {
//     console.log("Shirt color is black");
// } else console.log("Shirt color is not found");


//--> simpule function : 
//--> paramiterize function : 
//--> rest parametterize function :
//--> return type function : 

// function fun() {
//     return "Faisal";
// }

// console.log(fun());

// function fun1() {
//     return 10;
// }

// function fun2() {
//     return 20;
// }

// console.log(fun1() + fun2());

// function fun3() {
//     return fun2();
// }
// console.log(fun3());



//--> anonymous function or dynamic function : -> reassin kora jai 


// var a = function(x) {
//     return x;
// }


// console.log(a(10));



//--> arrow function : variablename = ()=>{---}

// var name = () => {
//     console.log("My name is Faisal Ahmed");
// }
// name();

// var num = (...x) => {
//     return x;
// }
// console.log(num(1, 2, 3, 4, 5, 6, 7));