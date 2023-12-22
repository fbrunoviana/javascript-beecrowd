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

