// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123";
tinderUser.name = "Abhii";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@.com",
  fullname: {
    userfullname: {
      firstname: "ab hii",
      lastname: "choudhary",
    },
  },
};

console.log(regularUser.fullname.userfullname);
console.log();

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: " b", 4: "d" };

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3)

const users = [
  {
    it: 1,
    email: "hotmail",
  },
  {
    it: 1,
    email: "hotmail",
  },
  {
    it: 1,
    email: "hotmail",
  },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));
