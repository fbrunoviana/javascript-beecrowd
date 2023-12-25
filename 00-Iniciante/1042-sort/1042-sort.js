var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

function percorre(arrayDesordenado){
    for (let indice = 0; indice < arrayDesordenado.length; indice++){
        console.log(arrayDesordenado[indice])
    }
}

let arrayInteiro = lines.map(Number)
arrayInteiro.sort((a,b)=> a - b)
percorre(arrayInteiro)
console.log()
percorre(lines.map(Number))