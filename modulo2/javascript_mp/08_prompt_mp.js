//libreia que se instalo:
//npm install prompt-sync

const prompt = require("prompt-sync")();

const plato = prompt("¿Qué plato deseas ordenar? ");
console.log(`¡Excelente! Has elegido: ${plato}`);

const cantidadTexto = prompt("¿Cuántas porciones? ");
const cantidad = parseInt(cantidadTexto, 10);

if (isNaN(cantidad)) {
  console.log("Eso no es un número válido.");
} else {
  console.log(`Ordenaste ${cantidad} porciones de ${plato}.`);