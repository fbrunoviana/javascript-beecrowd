// https://www.beecrowd.com.br/judge/pt/problems/view/1010

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');


// let nomeDoVendedor = Number(lines[0])
// let salarioFixo = Number(lines[1])
// let totalDeVendas = Number(lines[2])

let pecaUm = "12 1 5.30".split(' ')
let pecaDois = "16 2 5.10"

let [quantidadeUm, precoUm] = [pecaUm[1], pecaUm[2]]
let [quantidadeDois, precoDois] = [pecaDois[1], pecaDois[2]]

// console.log(`VALOR A PAGAR: R$ ${salarioFinal}`)