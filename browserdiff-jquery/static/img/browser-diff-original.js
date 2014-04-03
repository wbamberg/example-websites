function launch() {
  var t1 = $("#text1").val();
  var t2 = $("#text2").val();
  $("#output").html(diff(t1, t2));
}
$("#diff").click(launch);
