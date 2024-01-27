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
  console.log(`Hitesh says hello`);
};

heroPower.hitesh(); // OK
myHeros.hitesh(); // Error: myHeros.hitesh is not a function

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
    isAvailable: false,
  };
  
  const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
  };
  
  Teacher.__proto__ = User; // Correcting the prototype assignment
  
  // modern syntax
  Object.setPrototypeOf(TeachingSupport, Teacher);


 // ********String Prototype Modification********
  
 let anotherUsername = "chaiaurcode";

 String.prototype.trueLength = function () {
   console.log(`${this}`);
   console.log(`The length is: ${this.trim().length}`);
 };
 
 anotherUsername.trueLength(); // OK
 
 "hitesh".trueLength(); // Error: "hitesh".trueLength is not a function
 "iceTea".trueLength(); // Error: "iceTea".trueLength is not a function
 