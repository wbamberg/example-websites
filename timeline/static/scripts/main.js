function greet() {
  console.count(user);
  return "hi " + user;
}

var user = "bob";
console.log(greet());
user = "alice";
console.log(greet());
console.log(greet());
console.count("alice");

function assertion() {
  console.assert(false, "assertion failed");
}

function call_assertion() {
  assertion();
}

call_assertion();

/*********/

function error() {
  console.error("an error");
}

function call_error() {
  error();
}

call_error();

/*********/

function warn() {
  console.warn("a warning");
}

function call_warn() {
  warn();
}

call_warn();

/*********/

function info() {
  console.info("some info");
}

function call_info() {
  info();
}

call_info();

/*********/

function log() {
  console.log("some logging");
}

function call_log() {
  log();
}

call_log();

/*********/

function trace() {
  console.trace("a trace");
}

function call_trace() {
  trace();
}

call_trace();


/*
function handleButtonClick() {
  var welcome = document.getElementById('welcome');
  welcome.textContent = "";
  welcome.textContent = makeGreeting();
}

var greetme = document.getElementById('greetme');
greetme.addEventListener("click", handleButtonClick, false);

var user = document.getElementById('user');

user.addEventListener("focus", function() {
  var welcome = document.getElementById('welcome');
  welcome.textContent = "";
  user.value = "";

}, false);


*/

//var arrayOfThings = ["a", 123, true, {"foo" : "blah"}];