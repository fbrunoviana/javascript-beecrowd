var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseFloat(lines[0])

console.log("NOTAS:")
let sobra = n
let array = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01]
let valor = undefined
for (let i=0; i < array.length; i++){
    n = parseInt( sobra / array[i])
    sobra = (sobra % array[i]).toFixed(2)
    // console.log(`ARRAY: ${array[i]} N: ${n} SOBRA: ${sobra}`)
    valor = (array[i]).toFixed(2)
    if (array[i] > 1){
        
        console.log(`${n} nota(s) de R$ ${valor}`)
    } 
    else if ( array[i] === 1 ){
        console.log("MOEDAS:")
        console.log(`${n} moeda(s) de R$ ${valor}`)
    }
    else {
        console.log(`${n} moeda(s) de R$ ${valor}`)
    }
}
