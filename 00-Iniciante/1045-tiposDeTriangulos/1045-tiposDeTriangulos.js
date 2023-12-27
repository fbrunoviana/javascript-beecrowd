// Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de 
// modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de 
// triângulo que estes três lados formam, com base nos seguintes casos, sempre 
// escrevendo uma mensagem adequada:
// se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
// se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
// se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
// se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
// se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
// se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES

// Entrada
// A entrada contem três valores de ponto flutuante de dupla precisão 
// A (0 < A) , B (0 < B) e C (0 < C).

// Saída
// Imprima todas as classificações do triângulo especificado na entrada.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

// Ordenar de numeros de ordem decrescente, do menor para o maior
let guelo = lines.map(Number).sort((a, b) => b - a)

function tipoDeTriangulo(a, b, c){
    let tipo = []
    // se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
    if (a * a === b * b + c * c) tipo.push("TRIANGULO RETANGULO"); 
    // se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
    if ( a * a > b * b + c * c ) tipo.push("TRIANGULO OBTUSANGULO");
    // se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
    if (a * a < b * b + c * c) tipo.push("TRIANGULO ACUTANGULO");
    // se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
    if ( a === b && a === c && b === c) tipo.push("TRIANGULO EQUILATERO");
    // se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
    if ( (a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) tipo.push("TRIANGULO ISOSCELES"); 
    // se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
    if (a >= b + c ) tipo = ["NAO FORMA TRIANGULO"];
    return tipo;
}

let oTriangulo = tipoDeTriangulo(guelo[0], guelo[1], guelo[2])
for (let i = 0; i < oTriangulo.length  ; i++){
    console.log(oTriangulo[i])
} 
