// Exercicio 8

// Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".

//PseudoCodigo

// 1. Inicialize a variável 'salario' com o valor do salário do usuário
// 2. Se 'salario' for menor que 1903.98 então
// 3.     Escreva "ISENTO DE IR" no documento
// 4. Senão
// 5.     Escreva "TRIBUTADO NO IR" no documento
// 6. Fim-Se

let salario = 2000; // Substitua este valor pelo salário do usuário

if (salario < 1903.98) {
  document.write("ISENTO DE IR");
} else {
  document.write("TRIBUTADO NO IR");
}
