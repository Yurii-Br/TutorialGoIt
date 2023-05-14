let offSet = 0;
const sliderLine = document.querySelector(".container-img");

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
