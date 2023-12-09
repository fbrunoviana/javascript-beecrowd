// https://www.beecrowd.com.br/judge/pt/problems/view/1009

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let nomeDoVendedor = Number(lines[0])
let salarioFixo = Number(lines[1])
let totalDeVendas = Number(lines[2])
let salarioFinal = (salarioFixo + totalDeVendas * 0.15 ).toFixed(2)

console.log(`TOTAL = R$ ${salarioFinal}`)