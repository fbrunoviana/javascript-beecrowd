var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');
lines = lines.map(Number)

function calcularAreaOuPerimetro(a, b, c){
    if (a + b > c && b + c > a && a + c > b){
        perimetro = a + b + c
        console.log(`Perimetro = ${perimetro.toFixed(1)}`)
    } else {
        area = ((a + b) * c) / 2
        console.log(`Area = ${area.toFixed(1)}`)
    }
}

calcularAreaOuPerimetro(lines[0], lines[1], lines[2])