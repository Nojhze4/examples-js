"use strict";
/*CONTROL DE FLUJO*/

//SECUENCIA
/*
console.log("1...")
console.log("2...")
console.log("3...")*/

// CONDICIONALES = CUMPLE O NO CUMPLE
// se utilizan valores bulianos
// IF = SI (true) cumple
// ELSE = No cumple
// if se puede utilizar solo o con else
// else no se puede utilizar solo
/*
miVariable1 = true;


if (miVariable1){
    console.log("si se cumplio la condición");
}
if (miVariable1){
   console.log("si se cumplio la condición");
} else {
console.log("no se cumplio la condición")
}
console.log("hola") */

// Si es pepita, saludela con un Hola, si es Pepito saludelo con un Hello, de otra manera salude a un desconocido
/*
const nombre = "Anne"

if (nombre === "pepita"){
        console.log("Hola, pepita")
} 
if (nombre === "pepito"){
        console.log("Hello, pepito")
}else {
        console.log("Hola, desconocido 2")
}
*/

/* Crear una función que reciba una palabra
- si la palabra es "hola", imprimir por consola "HOLA"
*/

/*

miVariable = 1;
*/
//Estructura de control
//switch
/*
switch (miVariable) {
        case 1:
                console.log("soy 1")
                break;
        case 2:
                console.log("soy 2")
                break;
        default:
                console.log("no se cumplio ningún caso");
                break;
}
*/

/* Crear una función que reciba una palabra
- si la palabra es "hola", imprimir por consola "HOLA"
crear 2 funciones, una debe utilizar dentro if y la otra debe usar switch
*/

/* Crear una función con 3 parametros
1. va a recibir un numero
2. va a recibir un otro numero
3. recibir una palabra
mostrar el resultado de las operaciones aritmeticas basicas según llamado
suma, resta, multiplicación y división
*/

/* leer 3 numeros y mostrar su promedio*/

/*
function printAverage(a, b, c){
        const suma = a+b+c;
        const average = suma /3;
        console.log('El promedio es: ${average}');
}
        

printAverage (10, 20, 30);
*/

/* Leer un nombre de usuario y una contraseña
-Si el usuario es "Pepa" y la contraseña es "ABC123" mostrar "Bienvenida"
-De otra manera mostrar "Acceso denegado"


*/

//pseudo-código

//Inicio

// entrada a = usuario
// entrada b = contraseña
// salida = "Bienvenida" o "Acceso denegado"

// si el usuario + contraseña es correcto Bienvenida
// si no lo es Acceso denegado
//Final

//Ejercicio 1

function login(usuario, contraseña){
        if (usuario === "Pepa" && contraseña === "ABC123"){
                console.log("Bienvenida");
        } else {
                console.log("Acceso denegado");
        }
}       
login("Pepa", "ABC123");

