// https://www.beecrowd.com.br/judge/pt/problems/view/1005

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines[0]) 
let b = Number(lines[1])
let total = ((a * 3.5 + b * 7.5 ) / 11).toFixed(5)
console.log(`MEDIA = ${total}`)