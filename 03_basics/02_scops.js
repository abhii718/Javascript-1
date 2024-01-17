// var c = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   c = 30;
  //   var c = 38;
  console.log("Inner", a);
}

console.log(a);
// console.log(b)
// console.log(c);

// nested scope

function one() {
  const username = "hitesh ";

  function two() {
    const website = " youtube ";
    console.log(username);
  }
  // console.log(website);
  two();
}

one();
if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website); scope base defind
}
// console.log(username); Innerscope

// ++++++++++++interesting +++++++++++++

console.log(addone(5));
function addone(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));
 