var friendAge = [15, 16, 17, 19, 20];
console.log(friendAge);
friendAge[3] = 21;
console.log(friendAge[3]);
console.log(friendAge.indexOf(17));

friendAge.push(23);
friendAge.push(22);
console.log(friendAge);
console.log(friendAge.length);

friendAge.pop();
console.log(friendAge);
console.log(friendAge.length);

var teaLine = ["Kamal", "Samal", "Jamal", "Famal"];
teaLine.unshift("Faisal");
console.log(teaLine);
teaLine.shift();
console.log(teaLine);



var x = 10;
while (x != 15) {
    console.log(x);
    x++;
}

for (var i = 0; i < 10; i++) {
    console.log("I am Faisal");
}


function sayLove() {
    console.log("Lan to Baby ... koi gela tumi ");
}

sayLove();

function add(num1, num2) {
    var res = num1 + num2;
    return res;
}
console.log(add(19, 11));

// for single comment 
/**  for multipuleline comment */


var student = { id: 201914046, phn: 01784831040, name: "Fasial" };
console.log(student);
console.log(student.phn);