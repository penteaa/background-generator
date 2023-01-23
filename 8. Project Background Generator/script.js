var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");

function setGradient(){
  body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
};


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

          
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
  }

btn.addEventListener("click", random_bg_color);