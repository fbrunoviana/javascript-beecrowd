// https://www.beecrowd.com.br/judge/pt/problems/view/1010

// Comente essas duas linhas para testar no vscode
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Descomente a linha abaixo para usar no vscode:
// let lines = ["12 1 5.30", "16 2 5.10"]

let pecaUm   = lines[0].split(' ').map(Number)
let pecaDois = lines[1].split(' ').map(Number)

let [quantidadeUm, precoUm]     = [pecaUm[1], pecaUm[2]]
let [quantidadeDois, precoDois] = [pecaDois[1], pecaDois[2]]

let total = (quantidadeUm * precoUm + quantidadeDois * precoDois).toFixed(2)
console.log(`VALOR A PAGAR: R$ ${total}`)