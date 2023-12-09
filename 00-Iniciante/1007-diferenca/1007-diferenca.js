// https://www.beecrowd.com.br/judge/pt/problems/view/1007

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines[0]) 
let b = Number(lines[1])
let c = Number(lines[2])
let d = Number(lines[3])
let total = (a * b - c * d).toFixed(0)
console.log(`DIFERENCA = ${total}`)