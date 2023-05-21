let offSet = 0;
const sliderLine = document.querySelector(".container-img");
const modalWind = document.querySelector(".modalwind");
const openMod = document.querySelector(".btn-open");
const closeMod = document.querySelector(".btn-close");
const isClose = document.querySelector(".is-close");

document.querySelector(".btn-next").addEventListener("click", function () {
  offSet = offSet + 250;
  if (offSet > 750) {
    offSet = 0;
  }
  sliderLine.style.left = -offSet + "px";
});

document.querySelector(".btn-prew").addEventListener("click", function () {
  offSet = offSet - 250;
  if (offSet < 0) {
    offSet = 750;
  }
  sliderLine.style.left = -offSet + "px";
});

document.querySelector(".btn-open").addEventListener("click", function () {
  modalWind.classList.remove("is-close");
});
document.querySelector(".btn-close").addEventListener("click", function () {
  modalWind.classList.add("is-close");
});
