const userEmail = "h@hitesh.ai";
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values

// false , 0, -0, BigInt 0n, null, underfined, NaN

// truthy values

//  "0", 'false' , " " , [], {}, funtion (){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// ecxeptions these are true
// false == true;
// false == ''
// 0 == ''

// Nullish Coalescing Operator(??): null  underfines

let val1;
val1 = 5 ?? 10;

console.log(val1);

val1 = null ?? 10;

console.log(val1);


// Terniary Operator 

// conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 70") : console.log ("more than 80")