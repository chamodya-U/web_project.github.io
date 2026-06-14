$("#register").hide();
function register() {
  /*let log = document.querySelector(".log");
  let reg = document.querySelector(".register");
  log.style.display = "none";
  reg.style.display = "flex";*/
  $("#log").fadeOut(300);
  $("#register").fadeIn(800);
}

function log() {
  /*
  let reg = document.querySelector(".register");
  let log = document.querySelector(".log");

  reg.style.display = "none";
  log.style.display = "flex";
  */
  $("#register").fadeOut(300);
  $("#log").fadeIn(800);
}

//js login validation

const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("email");
const loginPass = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("password-error");

//error showing function
function showError(errorSpan, message) {
  errorSpan.textContent = message;
}
//function clear error
function clearError(errorSpan) {
  errorSpan.textContent = "";
}
//password validating part function
function validatePass() {
  const value = loginPass.value;

  if (value === "") {
    showError(passError, "Password is required.");
    return false;
  }
  if (value.length < 8) {
    showError(passError, "Password must be at least 8 characters.");
    return false;
  }
  if (!/[A-Z]/.test(value)) {
    showError(passError, "Password must consist uppercase letters.");
    return false;
  }
  if (!/[a-z]/.test(value)) {
    showError(passError, "Password must consist lowercase letters.");
    return false;
  }
  if (!/[0-9]/.test(value)) {
    showError(passError, "Password must consist numbers.");
    return false;
  }
  if (!/[!@#$%^&*]/.test(value)) {
    showError(passError, "Password must consist charactors.");
    return false;
  }
  clearError(passError);
  return true;
}

//email validate part
function validateEmail() {
  const value = loginEmail.value.trim();

  if (value === "") {
    showError(emailError, "Email address is required.");
    return false;
  }
  if (!value.includes("@") || !value.includes(".")) {
    showError(emailError, "Enter a valid email address.");
    return false;
  }
  clearError(emailError);
  return true;
}

//blur listner
//it checks every keystroke untill the right one enters
loginEmail.addEventListener("input", validateEmail);
//loginPass.addEventListener("blur", validatePass);

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = validateEmail();
  const pass = validatePass();

  if (email && pass) {
    const adminEmail = "admin@gmail.com";
    const adminPass = "Admin123#";

    const userEmail = "user@gmail.com";
    const userPass = "User123#";

    if (adminEmail === loginEmail.value && adminPass === loginPass.value) {
      //use to send the data to index.js
      sessionStorage.setItem("role", "admin");
      window.location.href = "index.html";
    }
    if (userEmail === loginEmail.value && userPass === loginPass.value) {
      //use to send the data to index.js
      sessionStorage.setItem("role", "user");
      window.location.href = "index.html";
    } else {
      showError(passError, "Invalid Email or Password");
    }
  }
});

//js validation for the sign up form under construction
/*
//registration js validation
const signForm = document.querySelector("#register-form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const regEmail = document.querySelector("#email");
const regPass = document.querySelector("#password");
const regConfirmPass = document.querySelector("#confirm-pass");
const dep = document.querySelector("#dep");
const regIndex = document.querySelector("#ID_num");
const regTel = document.querySelector("#tel");
//error messeges
const fnameError = document.getElementById("fname-error");
const lnameError = document.getElementById("lname-error");
const regEmailError = document.getElementById("regemail-error");
const regPassError = document.getElementById("regPass-error");
const confirmPassError = document.getElementById("regConfirmPass-error");
const depError = document.getElementById("dep-error");
const idError = document.getElementById("id-error");
const telError = document.getElementById("tel-error");


function validateFname() {
  const value = fname.value.trim();
  if (value === "") {
    showError(fnameError, "First Name is required.");
    return false;
  }
  return true;
}
*/
function signupfun() {
  signForm.addEventListener("submit", (event) => {
    event.preventDefault();
    sessionStorage.setItem("role", "user");
    window.location.href = "index.html";
  });
}

/*
$(".signup-submit").click((event) => {
  event.preventDefault();
  sessionStorage.setItem("role", "user");
  window.location.href = "index.html";
});
*/
