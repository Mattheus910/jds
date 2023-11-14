const hamburguer = document.querySelector("#menu picture #hamburguer");
const nav = document.querySelector("#menu #nav");

hamburguer.addEventListener("click", function(){ 
   if (nav.style.display == "none"){
    nav.style.display = "flex";
   } else {
    nav.style.display = "none";
   }
});
