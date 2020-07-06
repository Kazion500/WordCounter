/** @format */

let form = document.querySelector("#my-form");
let btn = document.querySelector("#clear");
let mgs = document.querySelector("#mgs");
let num = document.querySelectorAll(".num");
let letterResult = document.querySelector(".letter");
let wordResult = document.querySelector(".word");
// let err = document.querySelector('#err');
mgs.addEventListener("input", cal);
btn.addEventListener("click", (e) => {
  e.preventDefault();
  num.forEach((value) => {
    value.innerHTML = 0;
    mgs.value = "";
  });
});
function cal() {
  // count the letters
  const letterNum = mgs.value.length;
  letterResult.textContent = letterNum;
  // count words
  const words = mgs.value.split(" ");
  const wordNum =
    words[words.length - 1] === "" ? words.length - 1 : words.length;
  console.log(words.length - 1)
  wordResult.textContent = wordNum;
}
