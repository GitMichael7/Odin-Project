document.querySelector(".right").addEventListener("click", () => {
  StartToLast();
  Resize();
  showPos();
});

document.querySelector(".left").addEventListener("click", () => {
  showPos();
  LastToStart();
  Resize();
});

const img1 = document.querySelector("#one");
const img2 = document.querySelector("#two");
const img3 = document.querySelector("#three");
const img4 = document.querySelector("#four");
const img5 = document.querySelector("#five");

let slides = [img1, img2, img3, img4, img5];
const carousel = img1.parentElement;
Resize();
function LastToStart() {
  carousel.removeChild(slides[4]);
  carousel.insertBefore(slides[4], slides[0]);
  let lastElement = slides.pop();
  slides.unshift(lastElement);
  console.log(slides);
}

function StartToLast() {
  carousel.removeChild(slides[0]);
  carousel.appendChild(slides[0]);
  let firstElement = slides.shift();
  slides.push(firstElement);
}

function Resize() {
  slides[0].style.width = "100px";
  slides[0].style.height = "150px";

  slides[1].style.width = "200px";
  slides[1].style.height = "200px";

  slides[2].style.width = "500px";
  slides[2].style.height = "300px";

  slides[3].style.width = "200px";
  slides[3].style.height = "200px";

  slides[4].style.width = "100px";
  slides[4].style.height = "150px";
}

function showPos() {
  if (slides[2] === img3) {
    document.querySelectorAll(".point").forEach((point) => {
      point.style.backgroundColor = "#ccc";
    });
    document.querySelector("#PThree").style.backgroundColor = "purple";
  }
  if (slides[2] === img2) {
    document.querySelectorAll(".point").forEach((point) => {
      point.style.backgroundColor = "#ccc";
    });
    document.querySelector("#PTwo").style.backgroundColor = "purple";
  }
  if (slides[2] === img1) {
    document.querySelectorAll(".point").forEach((point) => {
      point.style.backgroundColor = "#ccc";
    });
    document.querySelector("#POne").style.backgroundColor = "purple";
  }
  if (slides[2] === img5) {
    document.querySelectorAll(".point").forEach((point) => {
      point.style.backgroundColor = "#ccc";
    });
    document.querySelector("#PFive").style.backgroundColor = "purple";
  }
  if (slides[2] === img4) {
    document.querySelectorAll(".point").forEach((point) => {
      point.style.backgroundColor = "#ccc";
    });
    document.querySelector("#PFour").style.backgroundColor = "purple";
  }
}
