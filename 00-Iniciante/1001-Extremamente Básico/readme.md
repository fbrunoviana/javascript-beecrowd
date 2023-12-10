
## Desafio Extremamente Básico

Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

## Entrada
A entrada contém 2 valores inteiros.

## Saída
Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável X e pelo final de linha. Cuide para que tenha um espaço antes e depois do sinal de igualdade, conforme o exemplo abaixo.

## Meu comentario

Primeira coisa que percebi, é que o propio site nos dá um inicio:

```js
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
```

A linha com `var lines = input.split('\n');` cria um array com os valores do input feitos pelo site, então da aqui para frente usaremos as posições do array como nossas variáveis.

```js
a = Number(lines[0]) 
b = Number(lines[1])  
```

Proximo passo é a soma entre as variáveis `a` e `b`:

```js
x = a + b 
```
E por ultimo imprima o valor da variável `x` no formato pedido no desafio:

```js
console.log(`X = ${x}`)
```

### Proximo desafio:

[1002-calculandoPi](https://github.com/fbrunoviana/javascript-beecrowd/tree/main/00-Iniciante/1002-calculandoPi)