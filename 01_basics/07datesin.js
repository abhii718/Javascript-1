// Date

let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString());

let TimeStamp = Date.now();
console.log(TimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

console.log(`${newDate.getDate()} and the month is ${newDate.getMonth() + 1}`);

newDate.toLocaleString("default", { weekday: "long" });

