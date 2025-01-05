// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

// Kis tarah se data ko memory me rakha jaya jata hai, Or kis tarah se access kiya jaya jata hai... 

// Primitive -- Call by value

// 7 Types : String, Number, Boolean, null, undefined, symbol, bigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 45645674864185125855525666n;

// Referance (Non primitive) -- Call by value 

// Array, Object, Functions

// Non Primitive data type is Object

const heros = ["Shaktiman", "Naagraj", "Doga"];

let myObj = {
    name: "Rithik",
    age: 22
}

const myFunction = function (){
    console.log("Hello World");
}

// +++++++++++++++++++++++++++++++++++++
// Stack (Primitive) -- Copy milta hai
// Heap (Non - primitve) -- Reference milta hai

let myYoutubeName = "rithikkumardotcom";

let anotherYoutubeName = myYoutubeName;
anotherYoutubeName = "roshandotcom";

console.log(myYoutubeName);
console.log(anotherYoutubeName);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
