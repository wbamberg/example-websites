
var dmp = new diff_match_patch();

function diff(text1, text2) {
  var d = dmp.diff_main(text1, text2);
  dmp.diff_cleanupSemantic(d);
  return dmp.diff_prettyHtml(d);
}

function launch() {
  var text1 = $("#text1").val();
  var text2 = $("#text2").val();
  var ds = diff(text1, text2);
  $("#outputdiv").html(ds);

  console.time("t");
  console.profile("p");
  console.log("logged");
  console.dir(launchButton);
  console.info("some info");
  console.warn("a warning");
  console.error("an error");
  console.exception("also an error");
  console.group();
  console.info("indented1")
  console.groupEnd();
  console.trace();
  console.timeEnd("t");
  console.assert(false, "My assertion always fails");

//  console.exception("hgh");

}

var launchButton = $("#launch").click(launch);

//launch();
  foo();

function foo() {
  function bar() {
    console.trace();
  }
  bar();
}