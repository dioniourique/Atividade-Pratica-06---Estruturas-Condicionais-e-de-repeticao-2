// Exercio 4

// Reescreva o exercício 3, utilizando apenas o SWITCH.

// PseudoCodigo

// INÍCIO
//   DECLARE numero COMO INTEIRO
//   ATRIBUA um valor para numero A PARTIR DE UM PROMPT

//   ESCOLHA numero
//     CASO 1:
//       IMPRIMA "Domingo"
//       PARE
//     CASO 2:
//       IMPRIMA "Segunda-feira"
//       PARE
//     CASO 3:
//       IMPRIMA "Terça-feira"
//       PARE
//     CASO 4:
//       IMPRIMA "Quarta-feira"
//       PARE
//     CASO 5:
//       IMPRIMA "Quinta-feira"
//       PARE
//     CASO 6:
//       IMPRIMA "Sexta-feira"
//       PARE
//     CASO 7:
//       IMPRIMA "Sábado"
//       PARE
//     CASO CONTRÁRIO:
//       IMPRIMA "Dia não reconhecido"
//   FIM ESCOLHA
// FIM

let numero = Number(prompt("Digite um número de 1 a 7:")); // Solicita ao usuário que digite um número

switch (numero) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia não reconhecido");
}
