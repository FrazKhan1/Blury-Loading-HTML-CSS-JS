let loadingText = document.querySelector(".num");
let backgroundBlur = document.querySelector(".bg");

let int = setInterval(blur, 30);
let load = 0;

function blur() {
  load++;
  if (load < 101) {
    loadingText.textContent = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    backgroundBlur.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  }
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
