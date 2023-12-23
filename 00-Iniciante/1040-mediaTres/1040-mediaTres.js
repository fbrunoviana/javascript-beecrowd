var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notas = lines[0].split(' ') 

let pesos = [2, 3, 4, 1]
let media = 0
let soma = 0
for (let i = 0; i < notas.length; i++){
    soma = soma + pesos[i]
    media = pesos[i] * notas[i] + media 
}
media = (media / soma)

if ( media >= 7 ){
    imprimeResultado(media, 'aprovado')
}else if ( media >= 5 && media <= 6.9){
    let notaDoExame = parseFloat(lines[1])
    let mediaFinal = ((media + notaDoExame) / 2)
    if ( mediaFinal >= 5){
        imprimeResultado(media, 'aprovado', notaDoExame, mediaFinal)
    }else{
        imprimeResultado(media, 'reprovado', notaDoExame, mediaFinal)
    }
    
}
else if ( media < 5){
    imprimeResultado(media, 'reprovado')
}

function imprimeResultado(media, status, notaDoExame=undefined, mediaFinal=undefined){
    console.log(`Media: ${media.toFixed(1)}`)
    if (notaDoExame){
        console.log('Aluno em exame.')
        console.log(`Nota do exame: ${notaDoExame.toFixed(1)}`)
        console.log(`Aluno ${status}.`)
        console.log(`Media final: ${mediaFinal.toFixed(1)}`)
    }else{
        console.log(`Aluno ${status}.`)
    }
}