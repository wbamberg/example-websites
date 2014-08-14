function setOutput(message, outputName) {
  var output = document.getElementById(outputName);
  output.textContent = message;
}

var clickme = document.getElementById('click-me');
clickme.addEventListener("click", function() {
  setOutput("you clicked!", "click-me-output");
}, false);

var hoverme = document.getElementById('hover-over-me');
hoverme.addEventListener("mouseover", function() {
  setOutput("you hovered!", "hover-over-me-output");
}, false);

var focusme = document.getElementById('focus-me');
focusme.addEventListener("focus", function() {
  setOutput("you focused!", "focus-me-output");
}, false);

var typeinme = document.getElementById('type-in-me');
typeinme.addEventListener("keypress", function() {
  setOutput("you typed in me!", "type-in-me-output");
}, false);

typeinme.addEventListener("hover", function() {
  setOutput("you hovered over me!", "type-in-me-output");
}, false);

window.addEventListener("load", function() {
  console.log("I'm loaded!");
}, false);

