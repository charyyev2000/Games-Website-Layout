VanillaTilt.init(document.querySelectorAll(".games-content > div"), {
  max: 20,
  speed: 4000
});
// VanillaTilt.init(document.querySelectorAll("aside > a >i"), {
//   max: 50,
//   speed: 4000
// });

let navActive = document.querySelector(".ul");
let navToggle = document.querySelector(".fa-bars");
let navClose = document.querySelector(".fa-times");

navToggle.addEventListener("click", () => {
  navActive.classList.add("active");
});

navClose.addEventListener("click", () => {
  navActive.classList.remove("active");
});
