// for loops

for (let i = 0; i <= 10; i++) {
  console.log(i);
  console.log("outer loop");
  for (let j = 0; j <= 10; j++) {
    // console.log(` Inner loop v ${j} and inner loop ${i}`);
    console.log(i + " * " + j + " = " + i * j);
  }
}
let myArray = ["flash ", "batman", "superman"];

console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// while loops

let index = 0;
while (index <= 10) {
  console.log(`value of index is ${index}`);
  index = index + 2;
}

let arr = 0;
while (arr < myArray.length) {
  console.log(`Value is ${myArray}`);
  arr = arr + arr + 1;
} 

// do loops

let score  = 1;
do {
  console.log(`Score is ${score}`);

  score++;
} while (score <= 10);
