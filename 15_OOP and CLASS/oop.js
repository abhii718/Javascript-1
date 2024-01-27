const user = {
  username: "abhi",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};
console.log(this); // Output: {} (In the global context)
console.log(user.getUserDetails()); // Output: Username: abhi, {username: "abhi", loginCount: 8, signedIn: true, getUserDetails: ƒ}

// *****Constructor and Instances: *****

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
}

User.prototype.greeting = function () {
  console.log(`Welcome ${this.username}`);
};

const userOne = new User("Hitesh ", 12, true);
const userTwo = new User("Abhii ", 15, false);

console.log(userOne.constructor); // Output: [Function: User]
console.log(userTwo); // Output: User { username: 'Abhii ', loginCount: 15, isLoggedIn: false }
console.log(userOne.greeting()); // Output: Welcome Hitesh
