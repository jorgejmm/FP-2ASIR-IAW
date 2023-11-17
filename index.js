// PRACTICA 1 //

let msg = "hola mundo"

console.log("msg")

document.addEventListener("DOMContentLoaded", init)

function init(event) {
    let title = document.getElementById("title")
    title.style.color = "red"
    title.innerHTML = msg
    loadData("data.json")
}

// No hace falta entender esta funcion todavia //

function loadData(url) {
    let json
    fetch(url)
    .then(response => response.json())
    .then(data => pintaMisHobbies(data))
}

function pintaMisHobbies(json) {
    console.log(json)
}