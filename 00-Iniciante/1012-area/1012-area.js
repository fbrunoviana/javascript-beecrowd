
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let A = Number(lines[0])
let B = Number(lines[1])
let C = Number(lines[2])

let pi = 3.14159

let areaTriangulo = (A * C / 2).toFixed(3)
let areaCirculo = (pi * C ** 2).toFixed(3)
let areaTrapezio = ((A + B) * C / 2).toFixed(3)
let areaQuadrado = ( B ** 2 ).toFixed(3)
let areaRetangulo = (A * B).toFixed(3)

console.log("TRIANGULO: " + areaTriangulo)
console.log("CIRCULO: " + areaCirculo) 
console.log("TRAPEZIO: " + areaTrapezio)
console.log("QUADRADO: " + areaQuadrado) 
console.log("RETANGULO: " + areaRetangulo)