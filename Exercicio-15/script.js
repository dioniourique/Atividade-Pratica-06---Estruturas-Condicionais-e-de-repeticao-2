//Exercicio 15

// Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

//PseudoCodigo

// Solicite ao usuário para inserir o valor do lado A do triângulo e armazene-o em A
// Solicite ao usuário para inserir o valor do lado B do triângulo e armazene-o em B
// Solicite ao usuário para inserir o valor do lado C do triângulo e armazene-o em C
// Converta A, B e C para números
// Se A é menor que a soma de B e C E B é menor que a soma de A e C E C é menor que a soma de A e B, então:
// Se A é igual a B e B é igual a C, então:
// Imprima "Triângulo equilátero"
// Senão, se A é igual a B OU B é igual a C OU A é igual a C, então:
// Imprima "Triângulo isósceles"
// Senão:
// Imprima "Triângulo escaleno"
// Senão:
// Imprima "Os valores fornecidos não formam um triângulo"

let A = prompt("Digite o valor do lado A do triângulo:");
let B = prompt("Digite o valor do lado B do triângulo:");
let C = prompt("Digite o valor do lado C do triângulo:");

A = Number(A);
B = Number(B);
C = Number(C);

if (A < B + C && B < A + C && C < A + B) {
  if (A == B && B == C) {
    console.log("Triângulo equilátero");
  } else if (A == B || B == C || A == C) {
    console.log("Triângulo isósceles");
  } else {
    console.log("Triângulo escaleno");
  }
} else {
  console.log("Os valores fornecidos não formam um triângulo");
}
