var i = 0;
const max = 512;
const container = document.getElementById("container");

function allocOneBox() {
  var box = document.createElement("span");
  box.setAttribute("class", "box");
  container.appendChild(box);
}

function makeBoxes() {
  var i = 0;
  for (i; i < max; i++) {
    allocOneBox();
  }
  console.log("made some boxes");
}

function timedMakeBoxes(i) {
  i = 0;
  setTimeout(function() {
    makeBoxes();
    i++;
    if (i < max) {
      timedMakeBoxes(i);
    }
  }, 10);
}

var allocButton = document.getElementById("alloc");
allocButton.addEventListener("click", timedMakeBoxes, false);

