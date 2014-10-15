var boxes = document.getElementsByClassName("box");

for (var i = 0; i < boxes.length; i++) {
  var box = boxes[i];
  console.log(i);
  box.addEventListener("mouseover", function(e) {
    e.target.classList.add("bigbox");
  }, false);

  box.addEventListener("mouseout", function(e) {
    e.target.classList.remove("bigbox");
  }, false);
}