## Desafio - Conversao de numeros

Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, 
e informe-o expresso no formato horas:minutos:segundos.

## Entrada
O arquivo de entrada contém um valor inteiro N.

## Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, 
conforme exemplo fornecido.

## Meus comentarios

O miolo ficou mais do mesmo, não tive muitas dificuldades em fazer esse desafio.

```js
let hora = parseInt(n / 3600)
let sobraHora = n % 3600
let minutos = parseInt(sobraHora / 60)
let segundos = sobraHora % 60
console.log(`${hora}:${minutos}:${segundos}`)
```

hora é o um numero inteiro resultante da divisão de `n` com 3600, crio uma variavel para colocar o resultado da sobra dessa divisão. Sigo o mesmo raciocinio para os minutos e os segundos é todo o resto. 

