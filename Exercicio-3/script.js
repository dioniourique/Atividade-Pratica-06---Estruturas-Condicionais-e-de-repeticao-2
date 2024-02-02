//Exercicio 3

// Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

// INÍCIO
//   DECLARE numero COMO INTEIRO
//   ATRIBUA um valor para numero

//   SE numero IGUAL A 1 ENTÃO
//     IMPRIMA "Domingo"
//   SENÃO SE numero IGUAL A 2 ENTÃO
//     IMPRIMA "Segunda-feira"
//   SENÃO SE numero IGUAL A 3 ENTÃO
//     IMPRIMA "Terça-feira"
//   SENÃO SE numero IGUAL A 4 ENTÃO
//     IMPRIMA "Quarta-feira"
//   SENÃO SE numero IGUAL A 5 ENTÃO
//     IMPRIMA "Quinta-feira"
//   SENÃO SE numero IGUAL A 6 ENTÃO
//     IMPRIMA "Sexta-feira"
//   SENÃO SE numero IGUAL A 7 ENTÃO
//     IMPRIMA "Sábado"
//   SENÃO
//     IMPRIMA "Dia não reconhecido"
//   FIM SE
// FIM

let numero = prompt("Digite um número de 1 a 7:");

numero = Number(numero);

if (numero === 1) {
  console.log("Domingo");
} else if (numero === 2) {
  console.log("Segunda-feira");
} else if (numero === 3) {
  console.log("Terça-feira");
} else if (numero === 4) {
  console.log("Quarta-feira");
} else if (numero === 5) {
  console.log("Quinta-feira");
} else if (numero === 6) {
  console.log("Sexta-feira");
} else if (numero === 7) {
  console.log("Sábado");
} else {
  console.log("Dia não reconhecido");
}
