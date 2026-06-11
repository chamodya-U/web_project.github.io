//for the index
const nav = document.querySelector("nav");
const menuIcon = document.querySelector(".menu");
let mouseButton = false;

menuIcon.addEventListener("click", () => {
  console.log("clicked");
  if (nav.style.display === "none") {
    display = "block";
    nav.style.animation = "flyoutnav 1s";
  } else {
    nav.style.animation = "flyinnav 1s";
    display = "none";
  }
});
