function makeGreeting() {
/*  console.time("timer");
  var user = document.getElementById('user');
  var greeting = "Hi, " + user.value + "!";
  console.trace();
  console.assert(false, "failed!");
*/  console.dir(user);
//  console.timeEnd("timer");
/*  console.info("some info");
  console.warn("a warning");
  console.error("an error");
  console.exception("also an error");
*/  console.group();
  console.info("indented once")
  console.group();
  console.info("indented twice")
  console.info("indented twice, another line")
  console.groupEnd();
  console.groupEnd();
  console.info("not indented")
  console.exception("hgh");
}

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
}, false);

var user = document.getElementById('user');
console.dir(user);

foo();

function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

console.info("not indented")