// https://www.beecrowd.com.br/judge/pt/problems/view/1006

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines[0]) 
let b = Number(lines[1])
let c = Number(lines[2])
let total = ((a * 2 + b * 3 + c * 5 ) / 10).toFixed(1)
console.log(`MEDIA = ${total}`)