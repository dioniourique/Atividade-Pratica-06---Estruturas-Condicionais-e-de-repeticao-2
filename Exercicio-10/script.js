// Exercicio 10

// Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7

// PseudoCodigo

// Início
// Solicitar ao usuário para digitar sua altura em metros e armazenar na variável 'altura'
// Solicitar ao usuário para digitar seu sexo (1 para feminino, 2 para masculino) e armazenar na variável 'sexo'

// Se 'sexo' é igual a '1' então
// Calcular o peso ideal usando a fórmula 62.1 * altura - 44.7 e armazenar na variável 'pesoIdeal'
// Senão, se 'sexo' é igual a '2' então
// Calcular o peso ideal usando a fórmula 72.7 * altura - 58 e armazenar na variável 'pesoIdeal'
// Senão
// Exibir a mensagem "Sexo inválido. Use 1 para feminino e 2 para masculino."
// Fim Se

// Exibir a mensagem "O peso ideal é " + pesoIdeal + " kg."
// Fim

let altura = prompt("Digite sua altura em metros:");
let sexo = prompt("Digite seu sexo (1 para feminino, 2 para masculino):");

let pesoIdeal;

if (sexo === "1") {
  pesoIdeal = 62.1 * altura - 44.7;
} else if (sexo === "2") {
  pesoIdeal = 72.7 * altura - 58;
} else {
  console.log("Sexo inválido. Use 1 para feminino e 2 para masculino.");
}

console.log(`O peso ideal é ${pesoIdeal.toFixed(2)} kg.`);
