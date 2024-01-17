// Immediately Invoked Function Emperessions

//
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai() {
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNCTED TWO ${name}`);
})(`hitesh`); 
