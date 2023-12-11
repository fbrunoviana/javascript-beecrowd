## Desafio - O Maior

Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

## Entrada
O arquivo de entrada contém três valores inteiros.

## Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

## Meu comentario

Como eu tinha prometido, usei o `Math.abs` para fazer as contas de subtração, inicalmente eu fiz o calculo em uma linha só, mas ficou uma zorra, então eu separei.

***O miolo ficou assim:***

```js
let resultado = parseInt(((a + b + Math.abs(a - b)) / 2))
let maiorNumero = parseInt((resultado + c + Math.abs(resultado - c)) / 2)
```

### Proximo desafio

[1014-consumo](https://github.com/fbrunoviana/javascript-beecrowd/tree/main/00-Iniciante/1014-consumo)