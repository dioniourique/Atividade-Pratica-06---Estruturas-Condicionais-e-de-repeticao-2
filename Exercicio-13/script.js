//Exercicio 13

// Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

//PseudoCodigo

// Solicite ao usuário que insira um número
// Converta a entrada do usuário em um número
// Se o número for um número válido (não NaN):
// Para cada número 'i' de 1 até o número inserido pelo usuário:
// Se 'i' for ímpar:
// Exiba 'i' no console
// Escreva 'i' no documento
// Se o número não for um número válido:
// Exiba "Por favor, insira um número válido." no console
// Escreva "Por favor, insira um número válido." no documento

let numero = prompt("Digite um número:");

numero = Number(numero);

if (numero == numero) {
  for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      document.write(i);
    }
  }
} else {
  console.log("Por favor, insira um número válido.");
  document.write("Por favor, insira um número válido.");
}
