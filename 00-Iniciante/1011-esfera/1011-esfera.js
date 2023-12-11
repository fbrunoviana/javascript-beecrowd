//https://www.beecrowd.com.br/judge/pt/problems/view/1011

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let raio = Number(lines[0])
let pi = 3.14159
let total = ((4/3) * pi * raio ** 3).toFixed(3)

console.log(`VOLUME = ${total}`)