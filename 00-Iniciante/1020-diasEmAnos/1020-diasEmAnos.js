// https://www.beecrowd.com.br/judge/pt/problems/view/1020
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let dias = Number(lines[0])
let anos = parseInt(dias / 365)

let sobraMes = dias % 365
let mes = parseInt(sobraMes / 30)

dias = sobraMes % 30

console.log(`${anos} ano(s)`)
console.log(`${mes} mes(es)`)
console.log(`${dias} dia(s)`)