var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempoGastoEmHoras = Number(lines[0])
let kmPorHora         = Number(lines[1])

let litrosPorKm       = 12
let total             = (tempoGastoEmHoras * kmPorHora / litrosPorKm).toFixed(3)
console.log(total)
