//Exercicio 12

// Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).

//PseudoCodigo

// Início
// Escreva "Por favor, insira sua idade"
// Leia idade
// Converta idade para Número

// Se idade >= 18 E idade <= 67 Então
// Escreva "Você pode doar sangue."
// Senão
// Escreva "Você não pode doar sangue."
// Fim-Se
// Fim

let idade = prompt("Por favor, insira sua idade");

idade = Number(idade);

if (idade >= 18 && idade <= 67) {
  console.log("Você pode doar sangue.");
} else {
  console.log("Você não pode doar sangue.");
}
