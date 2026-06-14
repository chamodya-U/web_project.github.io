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

//password validating part
function validatePass() {
  const value = loginPass.value.trim();

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
    const correntEmail = "admin@gmail.com";
    const correctPass = "Admin123#";
    if (correntEmail === loginEmail.value && correctPass === loginPass.value) {
      window.location.href = "index.html";
    } else {
      showError(passError, "Invalid Email or Password");
    }
  }
});

//registration js validation
