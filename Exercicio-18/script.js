//Exercicio 18

// Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:
// A vista: deconto de 2,5% sobre o preço de tabela.
// De 2 até 4 vezes: preço de tabela,sem desconto ou acréscimo.
// De 6 até 10 vezes: Juros de 6% sobre o preço de tabela.
// De 11 até 15 vezes: Juros de 13% sobre o preço de tabela.
// Outras informações:
// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

//PseudoCodigo

// Inicialize precoTabela com 1000
// Inicialize vezes com 10
// Se vezes for igual a 1 então
// Desconte 2.5% do precoTabela
// Senão, se vezes for maior ou igual a 6 e vezes for menor ou igual a 10 então
// Acrescente 6% ao precoTabela
// Senão, se vezes for maior ou igual a 11 e vezes for menor ou igual a 15 então
// Acrescente 13% ao precoTabela
// Fim-Se
// Calcule valorParcela dividindo precoTabela por vezes
// Exiba "Valor total: R$" e o precoTabela arredondado para duas casas decimais
// Exiba "Valor da parcela: R$" e o valorParcela arredondado para duas casas decimais

let precoTabela = Number(prompt("Digite o preço da tabela:"));
let vezes = Number(prompt("Digite o número de vezes:"));

if (vezes === 1) {
  precoTabela -= precoTabela * 0.025;
} else if (vezes >= 6 && vezes <= 10) {
  precoTabela += precoTabela * 0.06;
} else if (vezes >= 11 && vezes <= 15) {
  precoTabela += precoTabela * 0.13;
}

let valorParcela = precoTabela / vezes;

console.log("Valor total: R$" + precoTabela.toFixed(2));
console.log("Valor da parcela: R$" + valorParcela.toFixed(2));
