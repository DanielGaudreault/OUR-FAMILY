const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
toggle.innerHTML = "☀️";
}
else{
toggle.innerHTML = "🌙";
}
});

document.querySelector("form").addEventListener("submit", function(e){

e.preventDefault();

alert(
"Message saved successfully. Connect this form to email or a database later."
);

});
