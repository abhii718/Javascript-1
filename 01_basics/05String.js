const name = " hitesh";
const repoCount = 50;

// Bad habit to denote
// console.log(name +  repoCount + " value");

console.log(` Hellow my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('abhinay singh')  

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));


const newString = gameName.substring(0,4)
console.log(newString)


const anotherString= gameName.slice(3,1)
console.log(anotherString)


const newlog = "    abhii        "
console.log(newlog)
console.log(newlog.trim())

const url = "https;//hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

