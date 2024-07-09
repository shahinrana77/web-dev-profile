let menuBtn = document.querySelector(".menu");
let nav = document.querySelector(".navigaions");

menuBtn.addEventListener("click", ()=>{
  nav.classList.toggle("navActive");
})