# Projeto 1 de certificação do DevStart - Trilha 1: Lógica de Programação

## Resumo do projeto

Crie uma aplicação capaz de receber o nome e as notas de um atleta, calcular a média e apresentar ao usuário.

## Introdução

Em uma determinada competição de ginástica artística, vários atletas realizam apresentações para uma banca composta por cinco jurados. Cada jurado é responsável por avaliar um critério em específico, sendo eles o tempo de duração da apresentação, originalidade da coreografia, postura do atleta, dificuldade das acrobacias e sincronismo.

A competição em questão possui a seguinte regra de avaliação:

Cada jurado pode fornecer uma nota de um (1) a dez (10);

A média é calculada com base nas três notas do meio, desconsiderando a maior e menor nota.

O organizador da competição contratou a sua equipe para criar uma aplicação capaz de receber o nome e notas dos atletas e realizar o devido cálculo. Você foi o encarregado de criar a solução utilizando a linguagem JavaScript.

## Especificações

Você deverá criar uma função capaz de receber uma matriz de objetos contendo o nome do atleta e as cinco notas atribuídas. A sua função deverá calcular a média das notas sem considerar a maior e menor nota do atleta. Por fim, deverá apresentar ao usuário o nome de cada atleta, seguido das notas e da média calculada.

Utilize a seguinte entrada:

>let atletas = [<br> 
  {<br> 
  nome: "Cesar Abascal",<br> 
  notas: [10, 9.34, 8.42, 10, 7.88]<br> 
  },<br> 
  {<br> 
   nome: "Fernando Puntel",<br> 
   notas:  [8, 10, 10, 7, 9.33]<br> 
 },<br> 
 {<br> 
   nome: "Daiane Jelinsky",<br> 
   notas: [7, 10, 9.5, 9.5, 8]<br> 
 },<br> 
 {<br> 
   nome: "Bruno Castro",<br> 
   notas: [10, 10, 10, 9, 9.5]<br> 
 }<br> 
];<br> 

### A saída deve ser:

Atleta: Cesar Abascal <br> 
Notas Obtidas: 10,10,7.88,8.42,9.34 <br> 
Média Válida: 8.766666666666666 <br> 

Atleta: Fernando Puntel <br> 
Notas Obtidas: 10,10,7,8,9.33 <br> 
Média Válida: 8.333333333333334 <br> 

Atleta: Daiane Jelinsky <br> 
Notas Obtidas: 10,7,8,9.5,9.5 <br> 
Média Válida: 8.166666666666666 <br> 

Atleta: Bruno Castro <br> 
Notas Obtidas: 10,10,10,9,9.5 <br> 
Média Válida: 9.666666666666666 <br> 

### Dicas

1. Utilize o laço for para percorrer todos os itens da matriz de objetos:

> for (let i = 0; i < objAtletas.length; i++) { <br> 
    // O código que vai aqui será executado <br> 
    // uma vez para cada item da matriz <br> 
} <br> 

2. Você pode utilizar o método .sort() para ordenar as matrizes:

> notas = notas.sort()

3. Você pode utilizar if/else para comparar os valores e eliminar o menor e maior;

4. Você também pode utilizar o método .slice(x, y) para ajudar na seleção dos valores:

> // Elimina a maior e a menor nota <br> 
let notasComputadas = notas.slice(1,4) <br> 

5. Você pode utilizar o método .forEach() para realizar a soma dos valores da média;

6. Você pode utilizar o .length para saber o tamanho da sua matriz na hora do cálculo da média;

7. Utilize o console.log() para mostrar o resultado para o usuário.

### Entrega

Você deverá criar um repositório na sua conta do GitHub chamado notas-atletas e adicionar na branch main/master um arquivo notas-atletas.js contendo a solução do projeto. Configure o repositório como público e insira o link para ele no campo Link da solução. Lembre-se de adicionar o link completo, começando com https://. Ele será parecido com isto:

https://github.com/nomedeusuario/notas-atletas

👉🏻 Dica 1: Para testar o seu projeto de certificação antes de enviá-lo, você pode abrir qualquer atividade do DEVstart, limpar o campo de digitação e inserir o código do seu projeto. Verifique a saída no console do DEVstart para se certificar de que seu projeto está funcionando corretamente.

👉🏻 Dica 2: Você pode procurar por "Como criar um arquivo readme.md" no Google e aprender uma habilidade nova. Assim, você pode criar um arquivo readme.md contendo toda a explicação sobre o seu projeto e como executá-lo. Isso será um diferencial muito interessante para o seu projeto que chamará a atenção de futuros recrutadores.


Link da solução
https://github.com/nomedeusuario/nomedorepositorio
