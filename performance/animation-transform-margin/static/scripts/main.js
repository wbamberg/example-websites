var radioGroup = document.getElementById("radio-group");
radioGroup.addEventListener("click", updateTransitionMethod, true);

var use = "use-margin";
var dontUse = "use-transform";

updateTransitionMethod();

function updateTransitionMethod() {
  var useMargin = document.getElementById("use-margin");
  var useTransform = document.getElementById("use-transform");

  if (useMargin.checked) {
    use = "use-margin";
    dontUse = "use-transform";
  }

  else if (useTransform.checked) {
    use = "use-transform";
    dontUse = "use-margin";
  }

  updateClasses();
}

function updateClasses() {
  var boxes = document.getElementsByClassName("moving-box");
  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    box.classList.remove(dontUse);
    box.classList.add(use);
  }
}
