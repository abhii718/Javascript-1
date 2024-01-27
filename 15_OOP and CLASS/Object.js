function multiplyby5(num) {
  return num * 5;
}

multiplyby5.power = 2;
console.log(multiplyby5(5)); // Output: 25
console.log(multiplyby5.power); // Output: 2
console.log(multiplyby5.prototype); // Output: undefined

// ******Constructor*******


function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++; // Correcting the increment
};

createUser.prototype.primeMe = function () {
  console.log(`Price is ${this.score}`); // Correcting the console.log
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 205);

console.log(chai.primeMe()); // Output: Price is 25
console.log(chai.increment()); // Output: undefined (console.log inside the function)
console.log(chai.score); // Output: 26
