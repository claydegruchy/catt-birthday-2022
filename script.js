let runesElems = document.querySelectorAll(".rune");
  let iring = document.getElementById("inner-ring");
function draw() {
  let vegvisirPaths = document.querySelectorAll("#vegvisir path");
  let circle = document.getElementById("circle");

  for (let i = 0; i < vegvisirPaths.length; i += 1) {
    setStyle(vegvisirPaths[i], i);
  }

  setStyle(circle, vegvisirPaths.length).then((r) => {
iring.classList.add('glow');
    [...runesElems].forEach((ele) => ele.classList.add("hidden"));
  });
}

function setStyle(element, i) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(
        element.setAttribute(
          "style",
          `stroke: #e9e9e9; stroke-dasharray: ${element.getTotalLength()}px; stroke-dashoffset: ${element.getTotalLength()}px; animation: line-animation 1s linear forwards 1s;`
        )
      );
    }, 100 * i)
  );
}

draw();

let runesCode = [
  84,
111,
32,
67,
97,
116,
116,
32,
32,
32,
32,
70,
114,
111,
109,
32,
67,
108,
97,
121,
32,
32,
32,
32,
];

for (let i = 0; i < runesElems.length; i += 1) {
  runesElems[i].textContent = String.fromCharCode(runesCode[i]);
  runesElems[i].style = `transform: rotate(${15 * i}deg)`;
}
