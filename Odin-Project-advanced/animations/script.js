const carousel = document.querySelector(".carousel");
let intervalId;

function startCarousel() {
  intervalId = setInterval(() => {
    carousel.style.transform = "translateX(-100%)";
    setTimeout(() => {
      carousel.appendChild(carousel.firstElementChild);
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)";
      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out";
      });
    }, 500);
  }, 2000);
}

startCarousel();
