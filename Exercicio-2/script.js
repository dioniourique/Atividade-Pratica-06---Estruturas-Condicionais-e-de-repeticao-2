//Exercicio 2

// Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

//Pseudocodigo

// Início
//    Solicite ao usuário para inserir sua idade e armazene na variável 'idade'
//    Solicite ao usuário se ele possui habilitação e armazene na variável 'habilitacao'

//    Se 'idade' for maior ou igual a 18 E 'habilitacao' for igual a "sim"
//       Exiba "Pode dirigir"
//    Senão
//       Exiba "Não pode dirigir"
// Fim

let idade = prompt("Por favor, insira sua idade");
let habilitacao = prompt("Você possui habilitação? (sim/não)");

if (idade >= 18 && habilitacao.toLowerCase() === "sim") {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}
