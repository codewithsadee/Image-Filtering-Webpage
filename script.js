var imgBx = document.querySelector(".imgBx img");

var Default = document.querySelector(".default");
var brightness = document.querySelector(".brightness");
var contrast = document.querySelector(".contrast");
var grayscale = document.querySelector(".grayscale");
var saturate = document.querySelector(".saturate");
var invert = document.querySelector(".invert");

Default.addEventListener("click", function () {
  imgBx.classList.remove("brightness");
  imgBx.classList.remove("contrast");
  imgBx.classList.remove("grayscale");
  imgBx.classList.remove("saturate");
  imgBx.classList.remove("invert");
});

brightness.addEventListener("click", function () {
  imgBx.classList.add("brightness");
  imgBx.classList.remove("contrast");
  imgBx.classList.remove("grayscale");
  imgBx.classList.remove("saturate");
  imgBx.classList.remove("invert");
});

contrast.addEventListener("click", function () {
  imgBx.classList.add("contrast");
  imgBx.classList.remove("brightness");
  imgBx.classList.remove("grayscale");
  imgBx.classList.remove("saturate");
  imgBx.classList.remove("invert");
});

grayscale.addEventListener("click", function () {
  imgBx.classList.add("grayscale");
  imgBx.classList.remove("brightness");
  imgBx.classList.remove("contrast");
  imgBx.classList.remove("saturate");
  imgBx.classList.remove("invert");
});

saturate.addEventListener("click", function () {
  imgBx.classList.add("saturate");
  imgBx.classList.remove("brightness");
  imgBx.classList.remove("contrast");
  imgBx.classList.remove("grayscale");
  imgBx.classList.remove("invert");
});

invert.addEventListener("click", function () {
  imgBx.classList.add("invert");
  imgBx.classList.remove("brightness");
  imgBx.classList.remove("contrast");
  imgBx.classList.remove("grayscale");
  imgBx.classList.remove("saturate");
});
