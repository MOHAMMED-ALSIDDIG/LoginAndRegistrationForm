let x = document.getElementById("btn");
let y = document.getElementById("login");
let z = document.getElementById("register");
let form_login = document.getElementById("form-login");
let form_register = document.getElementById("form-register");

function login() {
  x.style.left = "0px";
  y.style.color = "#fff";
  z.style.color = "#000";
  form_login.style.left = "50px";
  form_register.style.left = "450px";
}
function reg() {
  x.style.left = "110px";
  y.style.color = "#000";
  z.style.color = "#fff";
  form_login.style.left = "-450px";
  form_register.style.left = "50px";
}
