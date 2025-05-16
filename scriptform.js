"use strict";
const $form = document.getElementById("loginForm");
$form.addEventListener("submit", (event) => {
  event.preventDefault();
  login();
});

function login() {
  const username = $form.username.value;
  const password = $form.password.value;

  if (username === "pepa" && password === "ABC123") {
    console.log("Bienvenida");
  } else {
    console.log("Acceso denegado");
  }
}

//Video clase 14/05/2025 3:14 hrs
/*
    function login(username, password) {
  if (username === 'pepa' && password === "ABC123") {
      console.log("Bienvenida");
    } else {
      console.log("Acceso denegado");
    }}
*/
