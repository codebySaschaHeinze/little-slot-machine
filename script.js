let colors = [
  "aqua",
  "chocolate",
  "Cornflowerblue",
  "crimson",
  "gold",
  "darkcyan",
  "mediumorchid",
];

function init() {
  randomIt();
}
let tries = 0;

function generateColors() {
  let random1 = Math.floor(Math.random() * 7) + 1;
  let random2 = Math.floor(Math.random() * 7) + 1;
  let random3 = Math.floor(Math.random() * 7) + 1;
  let color1 = colors[random1 - 1];
  let color2 = colors[random2 - 1];
  let color3 = colors[random3 - 1];
  return {
    random1: random1,
    random2: random2,
    random3: random3,
    color1: color1,
    color2: color2,
    color3: color3,
  };
}

function randomIt() {
  tries++;
  let result = generateColors();
  if (result.random1 === result.random2 && result.random2 === result.random3) {
    let winRef = document.getElementById("content");
    winRef.innerHTML = "";
    winRef.innerHTML = winTemplate(result, tries);
    tries = 0;
  } else {
    let loseRef = document.getElementById("content");
    loseRef.innerHTML = "";
    loseRef.innerHTML = loseTemplate(result, tries);
  }
}
