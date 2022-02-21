let raio = 6;
let diametro = raio * 2;

let volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
let volumeEmPi = volume / Math.PI;

console.log(`O volume de uma esfera de raio ${raio} é ${volumeEmPi.toFixed(2)} PI`);

//O volume de uma esfera de raio 3 é 36 PI