let capital = 1300;
let taxa = 14;
let juros = (taxa / 100);
let tempo = 8;

let montante = capital * Math.pow((1 + juros), tempo);
console.log(`O valor do montante após ${tempo} meses é: R$ ${montante.toFixed(2)}`);

