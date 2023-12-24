var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

function determinarQuadrante(x, y) {
    if (x === 0 && y === 0) return "Origem";
    if (y === 0) return "Eixo X";
    if (x === 0) return "Eixo Y";
    if (x > 0 && y > 0) return "Q1";
    if (x > 0 && y < 0) return "Q4";
    if (x < 0 && y > 0) return "Q2";
    return "Q3";
}

function imprimirResultado(resultado) {
    console.log(resultado);
}

let resultado = determinarQuadrante(Number(lines[0]), Number(lines[1]));
imprimirResultado(resultado);