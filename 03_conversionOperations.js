let score = "33";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN 
// true => 1, false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false 
// "rithik" => true 

let someNumber = 33;
let StringsomeNumber = String(someNumber);
console.log(typeof StringsomeNumber);

// *********************** Operations ***********************

let value = 3;
let negValue = - value;
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 2);
console.log(2 % 2);

let str1 = "Hello";
let str2 = " rithik";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12
console.log("1" + 2 + 2); // 122 "Agar string pehle hai toh sabhi ko string ke tarah treat kiya jaya jayega"
console.log(1 + 2 + "2"); // 32

console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);


