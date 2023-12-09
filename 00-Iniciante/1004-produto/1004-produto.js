// https://www.beecrowd.com.br/judge/pt/problems/view/1004

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valorUm = Number(lines[0]) 
let valorDois = Number(lines[1])
let total = valorUm * valorDois
console.log(`PROD = ${total}`)