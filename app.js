'use strict'

const arreglo = [
    { value: 1, name: 'CampoUno' },
    { value: 2, name: 'CampoDos' },
    { value: 3, name: 'CampoTres' },
    { value: 4, name: 'CampoCuatro' },
    { value: 5, name: 'CampoCinco' },
    { value: 6, name: 'CampoSeis' }
];

const arreglo2 = [
    { value: 21, name: 'a' },
    { value: 20, name: 'b' },
    { value: 19, name: 'c' },
    { value: 18, name: 'd' },
    { value: 17, name: 'e' },
    { value: 16, name: 'f' }
];

let obj = {};
let valores;

function datos(array) {

    for (const i in array) {

        valores = Object.values(array[i]);

        let value = valores[0];
        let name = valores[1];

        obj[name] = value;

    }

    return obj;

}

const valor = datos(arreglo2);

console.log(valor);






