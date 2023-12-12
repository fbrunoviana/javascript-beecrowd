## Desafio - Distância Entre Dois Pontos

Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia =

## Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

## Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

## Meu comentário
Juro que das proximas vezes eu vou prestar mais atencão em como os dados de entrada são lidos. Dessa vez demorei um tempo para perceber que `x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2` mas essa foi a razão de eu ter pesquisado uma nova forma de resolver esse problema, usei o `Math.pow` para subtrair os dois numero e depois elevar a dois, só no final eu usei o `Math.sqrt` para pegar a raiz quadrada.

***Miolo:***
```js
p1 = (Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))).toFixed(4);
```
## Proximo desafio
[1016-distancia](https://github.com/fbrunoviana/javascript-beecrowd/tree/main/00-Iniciante/1015-distancia)