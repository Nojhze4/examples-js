"use strict";
//Video clase 14/05/2025 3:14 hrs
/*
    function login(username, password) {
  if (username === 'pepa' && password === "ABC123") {
      console.log("Bienvenida");
    } else {
      console.log("Acceso denegado");
    }}
*/

/*
Pedir al usuario que adivine un número entre 1 y 5, dar máximo 2 intentos
Si el usuario adivina el número mostrar "Ganaste! adivinaste el número secreto"
Si el usuario pierde mostrar "Perdiste, tuviste 2 intentos".
*/

const miObjeto = {
  nombre: "Jhon",
  edad: 28,
  ciudad: "Bogotá",
  greeting: () => {
    console.log("Hola, soy " + this.nombre);
  }
};

console.log(miObjeto.nombre, miObjeto.edad);
