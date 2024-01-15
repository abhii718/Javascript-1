// Primitive data type

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

/*

const score = false;
const value = 100.0;

const IsLoggedIn = false;
const outsideaTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(log== anotherId);

const bigNumber  = 434334543545345347567567567n;
console.log(bigNumber);

*/

// Reference (Non primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "hitesh",
  age: 22,
 
}
const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof myFunction)

// stack (Promitive) , Heap (Non-primitive)

let myYoutubename = "Abhinavsingh";
let anothername = myYoutubename;

anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userone = {
  email: "abhinaysingh47",
  upi : "user@abhi"
};
let userTwo = userone

userTwo.email= " hitsh@google.com"

console.log(userone.email);
console.log(userTwo.email)