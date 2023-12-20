// Leia 4 valores inteiros A, B, C e D. A seguir, 
// se B for maior do que C e 
// se D for maior do que A, 
// e a soma de C com D for maior 
// que a soma de A e B e 
// se C e D, ambos, forem positivos e 
// se a variável  A for par 
// escrever a mensagem "Valores aceitos", 
// senão escrever "Valores nao aceitos".

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let a = Number(lines[0])
let b = Number(lines[1])
let c = Number(lines[2])
let d = Number(lines[3])

let somaAeB = a + b
let somaCeD = c + d

if ( b > c && d > a && somaCeD > somaAeB && somaCeD >= 2 && a % 2 === 0 ){
    console.log("Valores aceitos")
} else {
    console.log("Valores nao aceitos") 
}