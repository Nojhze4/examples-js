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
/*
const miObjeto = {
  nombre: "Jhon",
  edad: 28,
  ciudad: "Bogotá",
  greeting: () => {
    console.log("Hola, soy " + this.nombre);
  }
};

console.log(miObjeto.nombre, miObjeto.edad);
*/

/*Crear una función
-Recibir por parametros nombre y apellido
-Guardar los párametros recibidos en un objeto
-Imprimir nombre completo usando el objeto,*/

//Solución 
/*
function printName(name, lastname) {
  const obj ={
    name,
    lastname,
  }
  console.log("Nombre completo: " + obj.name + " " + obj.lastname);
}
printName("Jhon", "Ramirez");
printName("Alejandro", "Alfonso");
printName("Pepa", "Perez");
*/

/*Crear una función
-Recibir por parametros nombre y apellido
-Guardar los párametros recibidos en un objeto
Ejemplo de salida : Pepita Perez*/

function crearObjeto(nombre, apellido) {
  const objeto = {
    nombre,
    apellido,
  }

  return {
    imprimirNombreCompleto: function() {
      console.log("Nombre completo: " + objeto.nombre + " " + objeto.apellido);
    }
  };
}

/*Crear una función que reciba del usuario nombre y apellido
-Imprimir en consola un objeto con los datos recibidos
-Retornar un arreglo con los datos recibidos
*/
function crearObjeto(nombre, apellido) {
  const objeto = {
    nombre,
    apellido,
  }

  console.log(objeto);
  return [objeto.nombre, objeto.apellido];
}

crearObjeto("Jhon", "Ramirez");
