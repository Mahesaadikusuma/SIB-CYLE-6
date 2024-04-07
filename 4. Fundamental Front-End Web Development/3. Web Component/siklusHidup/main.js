// import awesomeComponent from "./src/awesome-component.js";
import "./src/awesome-component.js";
import "./src/my-paragraph.js";

let awesomeComponentEl = document.querySelector("awesome-component");
console.log(awesomeComponentEl);

const changeColorButton = document.querySelector("#changeColor");
const changeSizeButton = document.querySelector("#changeSize");
const removeElementButton = document.querySelector("#removeElement");
changeColorButton.onclick = () => {
  // Ubah/Tambahkan nilai attribute `color`
  awesomeComponentEl.setAttribute("color", "lightblue");
};

changeSizeButton.onclick = () => {
  // Ubah/Tambahkan nilai attribute `size`
  awesomeComponentEl.setAttribute("size", "250");
};

removeElementButton.onclick = () => {
  // Hapus elemen
  awesomeComponentEl.remove();
};

// paragraph
let myParagraphEl = document.querySelector("my-paragraph");

const changeSizeButtons = document.querySelector("#changeSizes");
const changeColorButtons = document.querySelector("#changeColors");

changeSizeButtons.onclick = () => {
  myParagraphEl.setAttribute("size", "24");
};

changeColorButtons.onclick = () => {
  myParagraphEl.setAttribute("color", "lightblue");
};
