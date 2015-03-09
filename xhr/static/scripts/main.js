
function load(url) {
   var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", onLoaded, false);
    xhr.addEventListener("error", onError, false);

    xhr.open("GET", url);
    xhr.send();

    function onLoaded(e) {
      console.log(xhr.response);
    }

    function onError(e) {
      reject("Error loading " + url + " : " + xhr.status);
    }
  }

var xhrButton = document.getElementById("xhr");
xhrButton.addEventListener("click", loadAnother, false);

function loadAnother() {
  load("/another");
}