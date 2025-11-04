let con = document.querySelector('.container'),
    cube = document.querySelector(".image-cube"),
    btnNext = document.getElementById("next"),
    btnPrev = document.getElementById("prev");
let pos = 0;
btnNext.addEventListener("click", () => {
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});
btnPrev.addEventListener("click", () => {
  pos += 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});