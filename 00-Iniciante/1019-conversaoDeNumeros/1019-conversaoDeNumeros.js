var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines[0])

let hora = parseInt(n / 3600)
let sobraHora = n % 3600
let minutos = parseInt(sobraHora / 60)
let segundos = sobraHora % 60
console.log(`${hora}:${minutos}:${segundos}`)