'use stict'

var totallist = document.getElementsByTagName('li');
console.log(totallist);

//agergar contenido
function anade(){

    var elemento = document.createElement("li");
    var texto = document.createTextNode(prompt("Ingrese un nuevo elemento", texto));
    elemento.appendChild(texto);

    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
}
//fin agregar

// modificar contenido
function anade2(){

    var elemento = document.createElement("li");
    var texto = document.createTextNode(prompt("Ingrese un nuevo elemento", texto));
    elemento.appendChild(texto);

    var lista = document.getElementById("lista");
    lista.replaceChild(elemento, lista.children[2]);
}
//fin modificar

//Eliminar contenido
function anade3(){
    lista.removeChild(lista.children[0]);
}
//fin elminiar