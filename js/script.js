const hamburguer = document.querySelector("#menu picture #hamburguer");
const nav = document.querySelector("#menu #nav");

hamburguer.addEventListener("click", function () {
   const navDisplay = window.getComputedStyle(nav).getPropertyValue("display");

   if (navDisplay === "none") {
      nav.style.display = "flex";
   } else {
      nav.style.display = "none";
   }
});



