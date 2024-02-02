//Exercicio 9

//Informe um valor a uma variável e imprima no console se o número
//é primo.

//PseudoCodigo

// Solicite ao usuário para inserir um número (num)
// Inicialize uma variável (ehPrimo) como verdadeira
// Se num for menor ou igual a 1
// Defina ehPrimo como falso
// Senão
// Para cada número i de 2 até num - 1
// Se num for divisível por i (ou seja, num mod i é igual a 0)
// Defina ehPrimo como falso
// Pare o loop
// Se ehPrimo for verdadeiro
// Exiba num + " é um número primo."
// Senão
// Exiba num + " não é um número primo."

let num = prompt("Digite um número para verificar se é primo:");
let ehPrimo = true;

if (num <= 1) {
  ehPrimo = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      ehPrimo = false;
      break;
    }
  }
}

if (ehPrimo) {
  console.log(num + " é um número primo.");
  document.write(num + " é um número primo.");
} else {
  console.log(num + " não é um número primo.");
  document.write(num + " não é um número primo.");
}
