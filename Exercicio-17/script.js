//Exercicio 17

// Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

//PseudoCodigo

// Solicite ao usuário o número total de eleitores e armazene-o em 'totalEleitores'
// Solicite ao usuário o número de votos brancos e armazene-o em 'votosBrancos'
// Solicite ao usuário o número de votos nulos e armazene-o em 'votosNulos'
// Solicite ao usuário o número de votos válidos e armazene-o em 'votosValidos'

// Se a soma de 'votosBrancos', 'votosNulos' e 'votosValidos' for maior que 'totalEleitores', então:
// Exiba a mensagem de erro: "Erro: A soma dos votos brancos, nulos e válidos não pode ser maior que o número total de eleitores."
// Senão:
// Calcule o percentual de votos brancos e armazene-o em 'percentualBrancos'
// Calcule o percentual de votos nulos e armazene-o em 'percentualNulos'
// Calcule o percentual de votos válidos e armazene-o em 'percentualValidos'

// Exiba 'percentualBrancos', 'percentualNulos' e 'percentualValidos'

let totalEleitores = Number(prompt("Digite o número total de eleitores:"));
let votosBrancos = Number(prompt("Digite o número de votos brancos:"));
let votosNulos = Number(prompt("Digite o número de votos nulos:"));
let votosValidos = Number(prompt("Digite o número de votos válidos:"));

if (votosBrancos + votosNulos + votosValidos > totalEleitores) {
  console.log(
    "Erro: A soma dos votos brancos, nulos e válidos não pode ser maior que o número total de eleitores."
  );
  document.write(
    "Erro: A soma dos votos brancos, nulos e válidos não pode ser maior que o número total de eleitores."
  );
} else {
  let percentualBrancos = (votosBrancos / totalEleitores) * 100;
  let percentualNulos = (votosNulos / totalEleitores) * 100;
  let percentualValidos = (votosValidos / totalEleitores) * 100;

  console.log(
    "Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%"
  );
  console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
  console.log(
    "Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%"
  );
  document.write(
    "Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%<br>"
  );
  document.write(
    "Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%<br>"
  );
  document.write(
    "Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%<br>"
  );
}
