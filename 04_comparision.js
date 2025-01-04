// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 === 1);

// This type of conversion is bit confusing so... Don't do this type of conversion
console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // true
console.log(null == 0); // true
console.log(null >= 0); // false

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === is strictly check the value and their data type...

console.log("2" === 2);
 