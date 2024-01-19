// if

// if (condition){
//     // syntax
// }

if (2 != 3) {
  console.log("executed");
}

const balance = 500;

// bad habit
// if (balance > 500) console.log("test "), console.log("test2");

const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;
const loggedInFromGoogle = true;
if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged In");
}
