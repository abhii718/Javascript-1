const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log(" I am new promise ");
    resolve(" success ");
    reject("network error");
  });
};
let promise = getPromise();
promise.then((resolve) => {
  console.log("Promise fulfilled ",  resolve);
});

promise.catch((error) => {
  console.log("rejected", error);
});
