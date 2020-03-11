// This Js file controls "Open Button" and "close button" of calc's window
// For example, If you press open button, the calculator app will be open.
// After open is opend, If you press close button of calculator,
// the calculator app will be removed on screen.

//To control open button
const openbtn = document.getElementById("open");
const calc = document.querySelector(".calc-bg");
//to control close button of calc app
const closeBtn = calc.querySelector(".close");

const openCalc = () => {
  calc.classList.remove("hidden");
};

const closeCalc = () => {
  calc.classList.add("hidden");
};

closeBtn.addEventListener("click", closeCalc);
openbtn.addEventListener("click", openCalc);
