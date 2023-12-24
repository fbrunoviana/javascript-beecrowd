## 1041 - Coordenadas de um Ponto

Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

Se o ponto estiver na origem, escreva a mensagem "Origem".

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

Entrada
A entrada contem as coordenadas de um ponto.

Saída
A saída deve apresentar o quadrante em que o ponto se encontra.


## Meus comentarios

Eu fiz duas versoes uma mais noob cheia de if e elses que poupei seus olhos e essa um pouco mais elegante, separando todo codigo repetitivo e deixando-o mais legivel. 

De novo `if (x === 0 && y === 0) return "Origem";` a funcão ja retorna de cara se cair em alguma das opcoes, e retorna a string esperando, creie uma outra funcão só para exibir a saida, desnecessario? Talvez, prefirie dessa forma só para não ficar na mesmisse. 

### Proximo desafio:

[1042-sort](https://github.com/fbrunoviana/javascript-beecrowd/tree/main/00-Iniciante/1042-sort)