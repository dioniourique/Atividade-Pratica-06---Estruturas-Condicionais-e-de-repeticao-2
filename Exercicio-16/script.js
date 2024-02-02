//Exercicio 16

// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

//PseudoCodigo

// Inicialize a variável 'anoAtual' com o valor inserido pelo usuário (solicite ao usuário para digitar o ano atual)
// Inicialize a variável 'anoNascimento' com o valor inserido pelo usuário (solicite ao usuário para digitar o ano de nascimento)
// Calcule a idade subtraindo 'anoNascimento' de 'anoAtual'
// Se a idade for maior ou igual a 16,
// 4.1 Exiba a mensagem "Você pode votar este ano."
// Caso contrário,
// Exiba a mensagem "Você não pode votar este ano."

let anoAtual = prompt("Digite o ano atual: ");
let anoNascimento = prompt("Digite o ano de nascimento: ");

let idade = anoAtual - anoNascimento;

if (idade >= 16) {
  console.log("Você pode votar este ano.");
} else {
  console.log("Você não pode votar este ano.");
}
