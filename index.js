
// No presente código a resolução não utiliza um meio/forma de diferença entre tipos de combustível.
// Abaixo do mesmo terá o código para a resolução com o tipo de gasolina definido.

const valorCombustivelGasolina = 5.58;
const valorCombustivelEtanol = 3.34;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;

const valorGastoViagem = litrosConsumidos * valorCombustivelGasolina;
console.log(`Valor gasto na viagem de ${distanciaEmKm}km é de R$${valorGastoViagem} reais!`)