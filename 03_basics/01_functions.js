function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, Number2) {
  let result = number1 + Number2;
  console.log(result);
  return result;
  return number1 + Number2;
  //   console.log(number1 + Number2);
}

//
/* addTwoNumbers(3, 4);
const result = addTwoNumbers(4, 6);

console.log(result);
console.log("REsult", result);

function loginUserMessage(username = "sam") {
  if (username === undefined) {
    console.log("Please enter a usename");
    return;
  }
  return `${username} just logged in`;
}

// loginUserMessage("hitesh") will not print

console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());
*/
// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice2(200))
/*
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 300));
*/
/*

const user = {
    username: "hitesh",
    price: 99
}
function handleObejct(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObejct(user) 
handleObejct({
    username : "sam",
    price:399

})
*/
const myNewArray = [100, 200, 3000,4000]
function returnSecondValue(getArray){
    return getArray[1]
}
 console.log(returnSecondValue (myNewArray))