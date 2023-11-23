//Variables

//var ya no se usa y funciona igual que let

//el nombre de la variable no puede ser una palabra reservada como var,
//let o const, no puede empezar por numero y no pueden tener simbolos
//valores primitivos
let incognita //undefined
let nombre = 'Mi nombre' //String
let edad = 30 //Number
let soltero = true //(o false) tipo Boolean
let zero = null //Valor especial conocido

//Valores referenciales
//Object - parejas clave/valor
let ficha = {
    nombre: 'Mi nombre',
    edad: 30,
    soltero: true
}
//Acceso a propiedades por .
console.log(ficha.nombre)
//por  nombre de propiedad
console.log(ficha['nombre'])

//Array
let lista = [
    'paul',
    'jhon',
    'george',
    'ringo'
]
console.log(lista)

//acceso a elementos
console.log(lista[3])

//Funciones
let imprimir = function algo(usuario) {
    let nosvamosya = true
    console.log('Hola', usuario.nombre)
    console.log('tu edad es: ', usuario.edad)
}
console.log(nosvamosya)
imprimir(ficha)

//diferencia entre valor y referencia
let a = {clave1: 30, clave2: 50}
let b = a
a.clave1 = 40
a.clave2 = 50
console.log(a)
console.log(b)

//let
//const