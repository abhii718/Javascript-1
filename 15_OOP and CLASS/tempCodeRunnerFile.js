// let myName = "Abhinay   "

// console.log(myName.trim().length)

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hamer",
  spiderman: "sling:",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function (s) {
  console.log(`Hitesh say hello`);
};

heroPower.hitesh();
myHeros.hitesh();
// heroPower.heyHitesh();

//***********Inheritance*************
const User = {
  name: "chai",
  email: "cjai@jfdf.com",
};

const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailble: false,
};

const TASupport = {
  makeAssignment: `JS assignment`,
  fullTime: true,

  ___proto___: TeachingSupport,
};

Teacher.___proto___ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "chaiaurcode";

String.prototype.trim().length = function () {
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`Thue lenght is: ${this.trim().length}`);
};
anotherUsername.trim().length;

"hitesh".trueLength();
"iceTea".trueLength;
