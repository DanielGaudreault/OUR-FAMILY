console.log("OUR-FAMILY LOADED");

window.addEventListener("scroll", () => {

let nav = document.querySelector("nav");

if(window.scrollY > 50){
nav.style.background = "#000";
}
else{
nav.style.background = "#1b1b1b";
}

});
