
## Desafio Área do Círculo

![](https://www.matematica.pt/images/faq/formula-area-circulo.png)

A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

## Entrada
A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

## Saída
Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. Utilize variáveis de dupla precisão (double). Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

## Meu comentario

Duas coisas que fizemos de novo nesse desafio, a primeira é exponencia usando `**` a segunda coisa que fiz foi usar o `toFixed(4)`, para arredondar o resultado para 4 casas decimais.

```js
let circuferencia = (pi * raio ** 2).toFixed(4)
```

#### Proximo desafio:

[1003-Soma Simples](https://github.com/fbrunoviana/javascript-beecrowd/tree/main/00-Iniciante/1003-Soma%20Simples)