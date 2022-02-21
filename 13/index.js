let altura = 16;
let raio = 4;

let areaBase = (2 * Math.PI) * (Math.pow(raio, 2));
let areaLateral = (2 * Math.PI) * (raio * altura);

let areaTotal = (2 * areaBase) + areaLateral;

console.log(`A área total do cilindro é: ${areaTotal.toFixed(2)}cm²`)






