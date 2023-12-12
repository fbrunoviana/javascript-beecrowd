var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

x = Number(lines[0])
y = Number(lines[1])

kmPorLitro = Math.abs(x / y).toFixed(3)

console.log(`${kmPorLitro} km/l`)