const role = sessionStorage.getItem("role");
$("#loginOut").hide();
$("#addbook").hide();
if (role === "admin") {
  $("#addbook").show();
  $("#signLogin1").hide();
  $("#loginOut").show();
}
if(role === "user") {
    $("#signLogin1").hide();
    $("#loginOut").show();
}

$("#loginOut").click(() => {
  sessionStorage.clear();
  window.location.href = "login.html";
});
