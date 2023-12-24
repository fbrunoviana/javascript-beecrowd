# Anotações

![Anotacoes](../99-imgs/anotacoesJS.png)

## Basicão

Instruções JavaScript são comandos ou instruções individuais que o navegador executa.
Eles formam a lógica de um programa e pode ser simples ou complexo.

1. Declaração de variavel:
```js
let nome = 'Guelo';
```

2. Condicional
```js
if (nome === 'Guelo') {
    console.log('Voce queima');
} else {
    console.log('Voce não queima');
}
```

3. Loops
```js
for (let i = 0; i < 10; i++) {
    console.log(i); // Executa 10 vezes
}
```

## Sintaxe

Sintaxe são regras que definem uma estrutura valida para um programa, de como ele deve ser executado.

1. Funções:
```js
function somar(x, y) {
    return x + y;
}
```

2. Objeto literal:

```js
const pessoa = {
    nome: 'Guelo',
    sobrenome: 'Queima',
    idade: 24
}
```

3. Array:

```js
const guelo = [24, 'Queima', 'Com', 4, 'Certeza'];
```

## Comentarios

São usados para adicionar informações e documentar o código. São ignorados pelo interpretador.

1. Comentários de uma linha:

```js
// Comentario guelo
```

2. Multiplas linhas:
```js
/*
Comentario guelo
Comentario guelo 24
*/
```

## Variaveis

Variaveis são usadas para armazenar informações, dados, valores. Elas podem ter diferentes tipos de dados, como string, number, boolean.

```js
let nome = 'Guelo'; // String
let idade = 24; // Number
let maiorIdade = true; // Boolean
```
### Tipos de variaveis

1. Primitive Data Types :
    - Number: `let num = 10;`
    - String: `let text = 'Hello';`  
    - Boolean: `let isTrue = true;` 
    - Undefined: `let value;`
    - Null: `let emptyValue = null;` 
2. Complex Data Types :
    - Object: `let person = {name: 'Alice', age: 25 };` 
    - Array: `let numbers = [1,2,3,4,5];`

## LET

O `let` é uma forma de voce criar variaveis. Ele é uma boa pratica de programação. Com ele voce pode alterar o valor de uma variavel futuramente.

```js
let nome = 'Guelo';
nome = 'Guelo Queima';
```

## CONST

O `const` também é uma forma de voce criar variaveis. Ele é uma boa pratica de programação. Com ele voce **NÃO** pode alterar o valor de uma variavel futuramente.

```js
const PI = 3.14159; 
```

## Operadores 

São simbolos que são usados para fazer operações matematicas.

1. Aritmeticos:
    ```js
    let x = 10;
    let y = 5;
    let soma = x + y;
    let subtracao = x - y;
    let divisao = x / y;
    let multiplicacao = x * y;
    let modulo = x % y; // Resto
    ```

2. Comparação:
    ```js
    let x = 10;
    let y = 5;
    let igual = x === y; 
    let diferente = x !== y; 
    let maior = x > y;
    let menor = x < y;
    let maiorIgual = x >= y;
    let menorIgual = x <= y;
    ```

3. Logicos:
    ```js
    let x = true;
    let y = false;
    let e = x && y; // AND As duas opcoes tem que ser verdadeiras para retornar True
    let ou = x || y; // OR Alguma das opcoes tem que ser verdadeira para retornar True
    let nao = !x; // NOT Inverte o valor, se é true vira false, se é false vira true
    ```

## Funcoes

Funções são blocos de código podem ser reeultilizados. 

**Decalando uma função:**

```js
function guelo(nome) {
    return 'Guelo ' + nome + ' <3';
}
```
**Chamando uma função:**

```js
let saida = guelo('Queima'); // 'Guelo Queima <3'
```

**Arrow Function**
Essa é chique:

```js
const guelo = (nome) => 'Guelo ' + nome + ' <3';
let saida = guelo('Queima'); // 'Guelo Queima <3'
```

## Objetos