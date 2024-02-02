// Exercicio 7

// Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.

// PseudoCodigo

// INICIO
//   DECLARE soma = 0
//   DECLARE numero = 10
//   REPITA
//     soma = soma + numero
//     numero = numero + 1
//   ATÉ numero > 100
//   IMPRIMA "A soma de todos os números entre 10 e 100 é: " + soma
// FIM

let soma = 0;
let numero = 10;

do {
  soma += numero;
  numero++;
} while (numero <= 100);

console.log("A soma dos números entre 10 e 100 é: " + soma);
