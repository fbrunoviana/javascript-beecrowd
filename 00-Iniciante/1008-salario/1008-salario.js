// https://www.beecrowd.com.br/judge/pt/problems/view/1008
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numeroFuncioanrio = Number(lines[0])
let numeroDeHorasTrabalhadas = Number(lines[1])
let valorPorHora = Number(lines[2])
let salario = ( numeroDeHorasTrabalhadas * valorPorHora ).toFixed(2)

console.log(`NUMBER = ${numeroFuncioanrio}`)
console.log(`SALARY = U$ ${salario}`)