const navbar = document.getElementById("nav");
const section = document.getElementById("section");

window.addEventListener("scroll", () => {
  if (window.scrollY > section.offsetTop - navbar.offsetHeight) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});
