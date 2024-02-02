//Exercicio 1

// Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

//PseudoCodigo

// INÍCIO
//   LEIA idade
//   SE idade >= 18 ENTÃO
//     ESCREVA "Pode dirigir"
//   SENÃO
//     ESCREVA "Não pode dirigir"
//   FIM SE
// FIM

let idade = prompt("Por favor, insira sua idade");
console.log(idade >= 18 ? "Pode dirigir" : "Não pode dirigir");
