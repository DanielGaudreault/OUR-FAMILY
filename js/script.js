const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
themeBtn.innerHTML = "☀️";
}else{
themeBtn.innerHTML = "🌙";
}

});

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

});

function updateClock(){

const now = new Date();

document.getElementById("clock").textContent =
now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();
