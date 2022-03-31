const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");

const openMouthImg = "./images/open.png";
const closeMouthImg = "./images/close.png";

const openMouthSound = new Audio("./sounds/sound_sound-open.mp3");
const closeMouthSound = new Audio("./sounds/sound_sound-close.mp3");

function openMouth() {
  popcat.src = openMouthImg;
  openMouthSound.play();
}
function closeMouth() {
  popcat.src = closeMouthImg;
  closeMouthSound.play();
}

btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

btn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  openMouth();
});

btn.addEventListener("touchend", function (e) {
  e.preventDefault();
  closeMouth();
});
