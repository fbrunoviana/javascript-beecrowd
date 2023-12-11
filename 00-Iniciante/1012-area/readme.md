## Desafio - Area

Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.

## Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

## Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

## Meu comentario

Nessa eu vacilei, não percebi que o input seria no formato `3 4 5.2`, escrevi o codigo baseado no convecional, linha abaixo de linha, então na minha maquina dava certo, `echo "3\n4\n5.2" | node 00-Iniciante/1012-area/1012-area.js`. Gastei todo o meu pomodoro nisso, hahaha, o comando certo seria: `echo "3 4 5.2" | node 00-Iniciante/1012-area/1012-area.js`.

Beleza, beleza, superado esse momento, eu fiz o `split` baseado em espaço, então a unica coisa nova foi essa, nos proximos desafios vou tentar usar outras bibliotecas, para me expor a outras situaçoes.

***Miolo:***

```js
var lines = input.split(' ');
```

## Proximo desafio

[1013-O Maior](https://github.com/fbrunoviana/javascript-beecrowd/tree/main/00-Iniciante/1013-oMaior)