// singleton
// object.creat

// object literal

const mysym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  fullname: "Hiteshaaa",
  mysym: "mykey1",
  age: 18,
  location: "jaipur",
  email: "abhiany47639@gmail.com",
  isLoggedIn: false,
  lastLogindays: ["monday", "saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.fullname);
// console.log(JsUser[mysym]); 

// JsUser.email = "hitesh@abhi4545.com";
// Object.freeze(JsUser);
// JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser.email);
 
// // function
JsUser.greeting = function () {
  console.log("Hello Js User");
};
JsUser.greetingTwo = function () {
  console.log(`Hello js user ${this.name}`);
};

// console.log(JsUser.greeting());

// console.log(JsUser)
console.log(JsUser.greeting())
console.log(JsUser.greeting)
console.log(JsUser.greetingTwo())

 