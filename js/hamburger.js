const hamburger = document.querySelector("#hamburger");
const ul = document.querySelector("#navbar");

hamburger.addEventListener("click", () => {
  hamburger.style.transition = "all .3s";
  hamburger.classList.toggle("rotation");
  if (hamburger.classList.contains("rotation")) {
    hamburger.style.transform = "rotate(-180deg)";
    hamburger.innerHTML = `<i class="fas fa-times"></i>`;
    ul.style.transform = "translateX(0)";
  } else {
    hamburger.style.transform = "rotate(180deg)";
    hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
    ul.style.transform = "translateX(100%)";
  }
});
