//Exercicio 11

// Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

//PseudoCodigo

// INÍCIO
// CRIAR variável 'turno'
// PERGUNTAR ao usuário "Em que turno você estuda? Digite 'M' para matutino, 'V' para vespertino ou 'N' para noturno." e ARMAZENAR a resposta na variável 'turno'

// AVALIAR 'turno'
// SE 'turno' é 'M' ENTÃO
// MOSTRAR alerta "Bom dia!"
// SENÃO SE 'turno' é 'V' ENTÃO
// MOSTRAR alerta "Boa tarde!"
// SENÃO SE 'turno' é 'N' ENTÃO
// MOSTRAR alerta "Boa noite!"
// SENÃO
// MOSTRAR alerta "Valor inválido"
// FIM DA AVALIAÇÃO
// FIM

let turno = prompt(
  "Em que turno você estuda? Digite 'M' para matutino, 'V' para vespertino ou 'N' para noturno."
).toUpperCase();

switch (turno) {
  case "M":
    alert("Bom dia!");
    break;
  case "V":
    alert("Boa tarde!");
    break;
  case "N":
    alert("Boa noite!");
    break;
  default:
    alert("Valor inválido");
}
