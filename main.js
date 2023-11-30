import {secundaria} from "./practica1.js"

let principal = 100

function saludar() {
    let resultado = document.getElementById("resultado")
    let nombre = document.getElementById("campoNombre")
    resultado.innerHTML = nombre.value
}

let ficha = {
    nombre: "jorge",
    personaFavorita: "cualquier perro",
    ponerNota: calcularNota
}

function calcularNota() {
    //TODO LO QUE SEA
    return 0;
}

//operador igual es ==
console.log("10 es igual a 20", 10 == 20);
console.log("20 es igual a 20", 20 == 20);

//operador distinto de es !=
console.log("10 es distinto de 20", 10 != 20);
console.log("20 es distinto de 20", 20 != 20);

//operador de negacion es !
console.log(!true);

function factorialRecursivo(n) {
    if (n >= 1) return n * factorialRecursivo(n-1);
    return 1;
}

function factorial(n) {
    let m = n;
    let resultado = 1;
    while (m >= 1) {
        resultado = resultado * m;
        m = m-1;
    }
    return resultado;
}

let valor = 10
let resultado = factorial(valor)
console.log("El factorial de", valor, "es:", resultado)

//i++ ---> i=i+1
function suma(lista) {
    resultado = 0;
    for (let i = 0; i < lista.length; i++) {
        resultado = resultado + lista[i]
        //console.log("i = ", i)
        //console.log("el valor en i es:", lista[i])
    }
    return resultado
}

let numeros = [120, 200, 5, 48, 190, -49];
console.log("La suma de la lista es:", suma(numeros))