var navbar = document.querySelector("nav");
var hamburger = document.querySelector(".hamburger");
var version = document.querySelector("#version");
var t_btn = document.querySelector(".t-btn");
var t_show = document.querySelector(".t-show");



version.innerHTML = "~Version 3.2";

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

t_btn.addEventListener("click", () => {
   t_show.classList.toggle("active");
   t_btn.classList.toggle("active");

   
})



 
