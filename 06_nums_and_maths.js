const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // This show .00 -- Output 100.00

const otherNumber = 123.998;
console.log(otherNumber.toPrecision(3)); // Dhyan se use karna hai agar pata hai precison value 3 meh he aayega fir ussi hisab se use karna hai -- Output 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // For right representation of number -- Output 10,00,000

// +++++++++++++++++++++++ Maths +++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); // Negative to positive
console.log(Math.round(4.6)); // Round off the value
console.log(Math.ceil(4.2)); // Top value
console.log(Math.floor(4.6)); // Low value

console.log(Math.min(3, 2, 6, 9)); // Min value
console.log(Math.max(3, 2, 6, 9)); // Max value

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Important line






