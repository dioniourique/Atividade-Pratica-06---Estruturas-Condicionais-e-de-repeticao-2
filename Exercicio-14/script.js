//Exercicio 14

// Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

//PseudoCodigo

// Inicialize a variável 'numero' com um valor inserido pelo usuário
// Inicialize a variável 'soma' com 0
// Enquanto 'soma' for menor que 500, faça o seguinte:
// Adicione ao 'soma' o valor de 'numero' multiplicado por 3
// Multiplique 'numero' por 3
// Exiba o valor final de 'numero'

let numero = prompt("Digite um número:");
let soma = 0;

while (soma < 500) {
  soma += numero * 3;
  numero *= 3;
}

console.log("O último valor é: " + numero);
