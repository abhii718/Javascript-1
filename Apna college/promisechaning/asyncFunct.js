function asyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("success");
    }, 2000);
  });
}
function asyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("success");
    }, 4000);
  });
}
console.log("fetching data1...");
asyncFunction1().then((resolve) => {
  console.log(resolve);
  console.log("fetching data2...");
  asyncFunction2().then((resolve) => {}); // this this second way to implement data
});
