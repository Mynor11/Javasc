'use stict'

if (typeof (Storage) !== 'undefined') {
    console.log('LocalStorage es compatible con el navegador')
} else {
    console.log('LocalStorage no es compatible con el navegador')
}
var conteocurs = 0;

var elementos1 = [];

var elementos2 = [];

localStorage.clear();

var visualizar = 0;

function anade() {

    var campo = document.getElementsByTagName("input");
    var curso = campo[0];
    elementos2.push(curso.value);


    localStorage.setItem("curso" + conteocurs, curso.value);


    var elemento = document.createElement("li");
    var elemento2 = document.createElement("li");
    elemento.append(localStorage.getItem("curso" + conteocurs));
    elemento2.append(localStorage.getItem("curso" + conteocurs));

    var list1 = document.getElementsByClassName("list1");
    list1[0].append(elemento);
    list1[1].append(elemento2);
    conteocurs++;
    visualizar = 0;
}

function anade2() {
    var list1 = document.getElementsByClassName("list1");
    var campo = document.getElementsByTagName("input");
    var curso = campo[2];

    if (visualizar === 0) {
        for (var i = 0; i < conteocurs; i++) {
            try {
                elementos1.push(list1[0].lastChild.textContent);
                elementos1.push(list1[1].lastChild.textContent);
                list1[0].lastChild.remove();
                list1[1].lastChild.remove();
            } catch (error) {
                elementos1.push('');
                elementos1.push('');
            }

        }
    } else {
        visualizar = 1;
    }

    for (var i = 0; i < conteocurs; i++) {

        if (elementos1.pop() === curso.value) {
            console.log(elementos1.pop());
        } else {
            var elemento = document.createElement("li");
            var elemento2 = document.createElement("li");
            var el = elementos1.pop()
            if (el === '') {

            } else {
                elemento.append(el);
                elemento2.append(el);

                var list1 = document.getElementsByClassName("list1");
                list1[0].append(elemento);
                list1[1].append(elemento2);
            }

        }

    }
    for (var i = 0; i < conteocurs; i++) {
        if (curso.value === elementos2[i]) {
            localStorage.removeItem("curso" + i);
        }
    }
}