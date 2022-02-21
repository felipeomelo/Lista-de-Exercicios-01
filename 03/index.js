let dinheiro = 80;
let tenis = 129.99;

let desconto = tenis - dinheiro;

let PorcentagemDoDesconto = (100 * desconto) / tenis;
console.log(`O seu Cupom de Desconto será de: ${PorcentagemDoDesconto.toFixed(2)}%`);



// 129,99 = 100%;
// 49,99 = x