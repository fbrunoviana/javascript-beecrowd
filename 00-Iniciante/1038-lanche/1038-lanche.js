var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let valorUm = parseFloat(lines[0])
let valorDois = parseFloat(lines[1])

let valores = {
    1: 4.00,
    2: 4.50,
    3: 5.00,
    4: 2.00,
    5: 1.50
}
let total = (valores[valorUm] * valorDois).toFixed(2) 
console.log(`Total: R$ ${total}`)