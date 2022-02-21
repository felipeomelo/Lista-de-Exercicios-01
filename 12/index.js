let montante = 250000;
let capital = 125000;
let tempo = 48;

let taxaDeJuros = Math.pow((montante / capital), (1 / tempo)) - 1;

console.log(`O seu financiamento de R$ ${capital},00 teve uma taxa de juros de ${taxaDeJuros.toFixed(2)}%, pois após ${tempo} meses você teve que pagar R$ ${montante},00`)

// O seu financiamento de C reais teve uma taxa de juros de i%, pois após n meses você teve que pagar M reais
// Math.pow(1 / tempo)