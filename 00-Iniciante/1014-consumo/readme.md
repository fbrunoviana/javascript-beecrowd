## Desafio - Consumo

Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

## Entrada
O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

## Saída
Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".

## Meu comentario

Vou logo para o miolo, pois foi só uma divisão, sem nada de mais.

***Miolo:***

```js
kmPorLitro = Math.abs(x / y).toFixed(3)
```

### Proximo desafio

[1015-distanciaEntreDoisPontos](https://github.com/fbrunoviana/javascript-beecrowd/tree/main/00-Iniciante/1015-distanciaEntreDoisPontos)