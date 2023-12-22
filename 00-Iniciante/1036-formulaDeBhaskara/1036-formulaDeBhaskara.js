// Leia 3 valores de ponto flutuante e efetue o cálculo das raízes 
// da equação de Bhaskara. Se não for possível calcular as raízes, 
// mostre a mensagem correspondente “Impossivel calcular”, caso haja 
// uma divisão por 0 ou raiz de numero negativo.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])

let delta = b ** 2 - 4 * a * c 

if (delta <= 0 || a === 0 ){
    console.log("Impossivel calcular")
}else {
    let xUm = ((-b  + Math.sqrt(delta)) / (2 * a)).toFixed(5)
    let xDois = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(5)
    console.log(`R1 = ${xUm}`)
    console.log(`R2 = ${xDois}`)
}