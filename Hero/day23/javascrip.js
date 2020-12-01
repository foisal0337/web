let firstName = "Faisal";
let lastName = "Ahmed";
console.log(`${firstName} ${lastName} is a good boy`);
console.log(`i am happy
that you know very well . `);


const numberReturn = (x, y) => x + y;
const numberReturn1 = () => 5;
const numberReturn2 = (x) => x * 5;

console.log(numberReturn(3, 4));
console.log(numberReturn2(3));
console.log(numberReturn1());


const ages = [12, 13, 14];
const ages1 = [10, 11, 15];
const ages2 = [7, 8, 9];

const allAges = [...ages, ...ages1, ...ages2];
console.log(allAges);

const max = Math.max(...ages, ...ages1, ...ages2);
console.log(max);