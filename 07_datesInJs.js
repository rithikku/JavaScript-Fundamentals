// Dates 

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); // Tue Jan 07 2025 19:48:57 GMT-0800 (Pacific Standard Time) --- Imp
console.log(myDate.toDateString()); // Tue Jan 07 2025 --- Imp
console.log(myDate.toISOString()); // 2025-01-08T03:48:57.378Z
console.log(myDate.toJSON()); // 2025-01-08T03:48:57.378Z
console.log(myDate.toLocaleString()); // 1/7/2025, 7:48:57 PM --- Imp
console.log(myDate.toLocaleDateString()); // 1/7/2025 --- Imp

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 11, 24); // For Date
let myCreatedDates = new Date(2023, 11, 23, 5, 3); // For both date and Timing

let myCreatedDatess = new Date("2023-01-12");
let myCreatedDatesss = new Date("01-14-2023"); // MM-DD-YY --- Imp
console.log(myCreatedDates.toLocaleString());

// Time Stamp -- For designing Quiz and games 
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDatesss.getTime());

// For Milisecond 
console.log(Math.floor(Date.now()/1000)); // --- Imp

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());


// Important Methods 
newDate.toLocaleString('default',{
    weekday: "long",
    timeZone : ''
});








