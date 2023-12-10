## Desafio - Salario com comissão

Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

## Meu comentario

Esse desafio é quase identico ao desafio passada, porém adiciomos o valor da comissão.ß

```js
let salarioFinal = (salarioFixo + totalDeVendas * 0.15 ).toFixed(2)
```

### Proximo desafio

[1010-Salario Com Bonus](https://github.com/fbrunoviana/javascript-beecrowd/tree/main/00-Iniciante/1010-calculo)