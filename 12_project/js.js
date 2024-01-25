// generate a random color
let intervalID;
const randomColor = function () {
  const hex = "012345689ABCDf";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changebgcolor, 1000);
  }

  function changebgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};
stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
