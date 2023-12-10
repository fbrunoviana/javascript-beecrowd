// // https://www.beecrowd.com.br/judge/pt/problems/view/1001

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

a = Number(lines[0]) 
b = Number(lines[1])  
x = a + b
console.log(`X = ${x}`)