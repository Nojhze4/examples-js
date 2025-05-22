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
  };

  return {
    imprimirNombreCompleto: function () {
      console.log("Nombre completo: " + objeto.nombre + " " + objeto.apellido);
    },
  };
}

/*Crear una función que reciba del usuario nombre y apellido
-Imprimir en consola un objeto con los datos recibidos
-Retornar un arreglo con los datos recibidos
*/

/*
function crearObjeto(nombre, apellido) {
  const objeto = {
    nombre,
    apellido,
  }

  console.log(objeto);
  return [objeto.nombre, objeto.apellido];
}

crearObjeto("Jhon", "Ramirez");
*/

/* Crear 4 funciones, cada una debe realizar una opereación aritmética básica
- (suma, resta, multiplicación y división)
- Cada función debe recibir 2 números y retornar el resultado según corresponda
- Solicitar al usuario que ingrese 2 números enteros
- Mostrarle al usuario el resultado de cada operación
Ej Entrada: 10 2
Ej Salida:
10 + 2 = 12 ...
*/
//Solución
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

let a = parseInt(prompt("Ingresar primer número entero"));
let b = parseInt(prompt("Ingresar segúndo número entero"));

const resultadoFinal = `${a} + ${b} = ${sumar(a, b)}\n${a} - ${b} = ${restar(
  a,
  b
)}\n${a} * ${b} = ${multiplicar(a, b)}\n${a} / ${b} = ${dividir(a, b)}`;
document.write(resultadoFinal);
10;
