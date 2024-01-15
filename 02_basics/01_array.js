// array

const myArr = [13, 1, 2, 3, 4, 5, 6];

const myHeros = ["shaktiman", " abhitab"];

const myArry2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[0]);

// *********  Array methods ************


/*

myArr.push(99);
myArr.push(93);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(11);
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log(myArr.includes(2));

console.log(myArr.indexOf(2));

const newarry = myArr.join();
console.log(myArr);
console.log(newarry);
console.log(typeof newarry);


*/


// slice, splice

console.log("a ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("c ", myArr);

