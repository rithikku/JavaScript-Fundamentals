const names = "Rithik";
const repoCount = 50;

// console.log(names + repoCount); // This is outdated syntax so... Don't use this type of syntax

console.log(`Hello my name is ${names} my repocount is ${repoCount}`);

const gameName = new String('Rithik-hc');
console.log(gameName[0]);
console.log(gameName[1]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4); // 0 se 3 tak string print karega
console.log(newString);

const anotherString = gameName.slice(-8, 2); // In here we can pass negative value
console.log(anotherString);

const newStringOne = "      Rithik      ";
console.log(newStringOne);
console.log(newStringOne.trim()); // It will remove starting and ending space

const url = "https//hitesh.com/hitesh%20choudhary";
const replacedUrl = url.replace('%20', '-');
console.log(replacedUrl);

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));




