var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines[0])
console.log(n)
let sobra = n
let array = [100, 50, 20, 10, 5, 2, 1]
for (let i=0; i < array.length; i++){
    n = parseInt( sobra / array[i])
    sobra = sobra % array[i]
    console.log(`${n} nota(s) de R$ ${array[i]},00`)
}

// let cedulasDeCem = parseInt(n / 100) // 5 * 100 - n
// let sobra = (n % 100)
// let cedulasdeCinquenta = parseInt( sobra / 50) // 76 / 50
// sobra = sobra % 50 
// let cedulasDeVinte = parseInt( sobra / 20)
// sobra = sobra % 20
// let cedulasDeDez = parseInt( sobra / 10) 
// sobra = sobra % 10
// let cedulasDeCinco = parseInt(sobra / 5)
// sobra = sobra % 5
// let cedulasDeDois = parseInt(sobra / 2)
// sobra = sobra % 2
// let cedulasDeUm = parseInt(sobra / 1)


// console.log(`
// ${cedulasDeCem} nota(s) de R$ 100,00
// ${cedulasdeCinquenta} nota(s) de R$ 50,00
// ${cedulasDeVinte} nota(s) de R$ 20,00
// ${cedulasDeDez} nota(s) de R$ 10,00
// ${cedulasDeCinco} nota(s) de R$ 5,00
// ${cedulasDeDois} nota(s) de R$ 2,00
// ${cedulasDeUm} nota(s) de R$ 1,00`)