## Desafio - Media 3

Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno.

## Entrada
A entrada contém quatro números de ponto flutuante correspendentes as notas dos alunos.

## Saída
Todas as respostas devem ser apresentadas com uma casa decimal. As mensagens devem ser impressas conforme a descrição do problema. Não esqueça de imprimir o enter após o final de cada linha, caso contrário obterá "Presentation Error".

## Meus comentarios

Nesse desafio eu demorei cerca de 75 minutos para resolver, 3 pomodoros, olha que não é que é dificil, mas exige muita atencão, principalmente no output.

Um coisa que me fez muita raiva, é que o `.toFixed()` retorna uma string e mesmo vc usando o `parseFloat` alguns calculos não consegem converter para float, deixa eu ser mais claro. Se tu pegar uma string e tentar usar o `toFixed()` vai dar um erro.

Tentei inumeras vezes brigar entre fazer contas depois de ter usado o .toFixed() e o parseFloat, mas não deu certo, pensei em usar o toFixed no console.log para mostrar o resultado.

```js
let guelo = ["5.2", 4.9];
let media = parseFloat(guelo[0]) + guelo[1] / 2;
console.log(`NOTA DO EXAME: ${guelo[0]} e ${guelo[1]}`);
console.log(`MEDIA = ${media.toFixed(5)}`);
```

Dessa vez eu fiquei muito curioso para saber como o chatGPT resolveria esse problema, então perguntei. O resultado dele foi muito melhor que o meu, algo semelhante a se eu tivesse feito em python, que é a linguagem que eu mais domino.

```js
var fs = require('fs');

function calcularMediaFinal(notas, notaExame) {
    let pesos = [2, 3, 4, 1];
    let somaNotas = notas.reduce((acumulador, nota, indice) => acumulador + nota * pesos[indice], 0);
    let media = somaNotas / 10;

    console.log(`Media: ${media.toFixed(1)}`);

    if (media >= 7.0) {
        console.log("Aluno aprovado.");
    } else if (media < 5.0) {
        console.log("Aluno reprovado.");
    } else {
        console.log("Aluno em exame.");
        console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
        media = (media + notaExame) / 2;
        if (media >= 5.0) {
            console.log("Aluno aprovado.");
        } else {
            console.log("Aluno reprovado.");
        }
        console.log(`Media final: ${media.toFixed(1)}`);
    }
}

var input = fs.readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var notas = lines[0].split(' ').map(Number);
var notaExame = parseFloat(lines[1]);
calcularMediaFinal(notas, notaExame);
```


## Proximo Desafio
[1043-multiplos](https://github.com/fbrunoviana/javascript-beecrowd/tree/main/00-Iniciante/1043-multiplos)