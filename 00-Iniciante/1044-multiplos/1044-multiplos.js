
// Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem 
// "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são 
// múltiplos entre si.

// Entrada
// A entrada contém valores inteiros.

// Saída
// A saída deve conter uma das mensagens conforme descrito acima.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let numeroUm = Number(lines[0])
let numeroDois = Number(lines[1])

function multiplos(numeroUm, numeroDois){
    if (numeroUm % numeroDois === 0 || numeroDois % numeroUm === 0 ) return "Sao Multiplos";
    return "Nao sao Multiplos" 
}

let valorRetornado = multiplos(numeroUm, numeroDois)
console.log(valorRetornado)