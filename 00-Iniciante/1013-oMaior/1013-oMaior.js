var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let a = Number(lines[0])
let b = Number(lines[1])
let c = Number(lines[2])

let resultado = parseInt(((a + b + Math.abs(a - b)) / 2))
let maiorNumero = parseInt((resultado + c + Math.abs(resultado - c)) / 2)

console.log(`${maiorNumero} eh o maior`)