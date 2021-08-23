const body = document.getElementsByTagName("BODY")[0];
const pop = document.getElementById("pop");
let currentValue = 0;

window.addEventListener("click", () => {
  pop.innerText = ++currentValue;
});

window.addEventListener("mousedown", () => {
  body.className = "popcat2";
});

window.addEventListener("mouseup", () => {
  body.className = "popcat1";
});

window.addEventListener("touchstart", () => {
  body.className = "popcat2";
});

window.addEventListener("touchend", () => {
  body.className = "popcat1";
});
