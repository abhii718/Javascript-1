const user = {
  username: " abhii",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     console.log(this.username);
//     // console.log(this.username);
// }
// chai()

const chai = function () {
  let username = "hitesh ";
  console.log(this.username);
};

chai();

// const addTwo = (num1 , num2) => {
//     return num1+ num2;
// }

const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(3, 6));

// const myArray = [ 5,6,3,2,1]                 

// myArray.forEach()