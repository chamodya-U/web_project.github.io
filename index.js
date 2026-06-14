//login as admin or user
const role = sessionStorage.getItem("role");
$("#loginOut").hide();
$("#addbook").hide();
//to show add book & log out when login as admin
if (role === "admin") {
  $("#addbook").show();
  $("#signLogin1").hide();
  $("#loginOut").show();
}
//to hide add book &show log out when login as user
if(role === "user") {
    $("#signLogin1").hide();
    $("#loginOut").show();
}
//to clear sessionStorage
$("#loginOut").click(() => {
  sessionStorage.clear();
  window.location.href = "login.html";
});
