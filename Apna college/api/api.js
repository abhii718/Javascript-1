const URL = "https://cat-fact.herokuapp.com/facts";
let factt = document.querySelector("#fact");
const btn = document.querySelector("#btn");
// let promise = fetch(URL);
// console.log(promise);

// const getFacts = async () => {
//   console.log("getting data ..... ");
//   let response = await fetch(URL);
//   console.log(response); // JSON formate
//   let data = await response.json();
//   factt.innerText = data[1].text
// //   console.log(data[3].text)
// };
// getFacts();
function getFacts() {
  fetch(URL)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      factt.innerText = data[2].text;
      //   console.log(data[2].text);
    });
}

btn.addEventListener("click", getFacts);
