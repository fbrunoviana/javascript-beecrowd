// Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que 
// o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

// Entrada
// A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

// Saída
// Apresente a duração do jogo conforme exemplo abaixo.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let horaInicio = Number(lines[0])
let horaFim = Number(lines[1])

function calculaHora(horaInicio, horaFim){
    let periodo = horaInicio - horaFim
    if (periodo === 0 ) return 24
    if ( horaFim < horaInicio && periodo >= 1) return 24 - horaInicio + horaFim
    return periodo * -1
}

console.log("O JOGO DUROU %d HORA(S)" ,calculaHora(horaInicio, horaFim))