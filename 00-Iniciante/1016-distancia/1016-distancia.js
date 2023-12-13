var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let quilometros = Number(lines[0]) * 2
console.log(`${quilometros} minutos`)
