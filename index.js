const role = sessionStorage.getItem("role");

$("#addbook").hide();
if (role === "admin") {
  $("#addbook").show();
}
