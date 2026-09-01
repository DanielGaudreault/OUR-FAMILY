const btn = document.getElementById("themeBtn");

btn.onclick = () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light"))
{
btn.innerHTML = "☀️";
}
else
{
btn.innerHTML = "🌙";
}

};

function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();

document.querySelector("form")
.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Message saved successfully!"
);

});
