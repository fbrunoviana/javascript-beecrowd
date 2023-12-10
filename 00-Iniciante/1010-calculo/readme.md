## Desafio - Calculo
![Calculo](https://img.freepik.com/vetores-premium/formula-matematica-calculo-matematico-no-quadro-negro-da-escola-algebra-e-geometria-ciencia-giz-padrao-conceito-educacao-vetorial-analise-cientifica-calculo-de-numeros-conhecimento-complexo_102902-3216.jpg)

Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

## Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

## Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

## Meu comentario

Nesse já começou a ser desafiante, o input veio em um formado diferente: ```12 1 5.30``` então o processamento vai ser diferente, principalmente pegar as posições.

Usei o `.split(' ')` para separar os itens.

Para transformar em numero eu optei pela forma mais simplesß `.map(Number)`, mas passou pela minha cabeca também criar um loop que percorrece o array, transformando em numero e populando um novo array ou converter todos os numeros em `Number` na hora de fazer o calculo, na variavel `total`.

***O Milolo ficou assim:***

```js
let pecaUm   = lines[0].split(' ').map(Number)
let pecaDois = lines[1].split(' ').map(Number)

```

Adicionei as variveis para fazer o calculo.

Eu poderia ter feito algo como:
```js
let [quantidadeUm, precoUm]     = [pecaUm[1], pecaUm[2]]
let [quantidadeDois, precoDois] = [pecaDois[1], pecaDois[2]]
```

Gostei dessa forma juveal de adicionar os valores, como venho do python, me senti confortavel escrevendo.

```js
let [quantidadeUm, precoUm] = [lines[0].split(' ').map(Number)[1], lines[0].split(' ').map(Number)[2]]
let [quantidadeDois, precoDois] = [lines[1].split(' ').map(Number)[1], lines[1].split(' ').map(Number)[2]]
```
Mas a legibilidade do codigo não ficaria boa. Nesse caso ser mais descritivo é a melhor opcao. 

### Proximo desafio

[1011-Esfera](https://github.com/fbrunoviana/javascript-beecrowd/tree/main/00-Iniciante/1011-esfera)