var navbar = document.querySelector("nav");
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
   navbar.classList.toggle("active");
   hamburger.classList.toggle("active");
})

window.addEventListener("scroll", () => {
   if (scrollY > 700) {
      navbar.classList.add("active-bar");
   } else {
      navbar.classList.remove("active-bar");
   }
})
function closeop() {
   navbar.classList.remove("active");
   hamburger.classList.remove("active");
}
