const prompt = require("prompt-sync")();
const totalPedido = 150;
const MINIMO_DESCUENTO = 100;
const PORCENTAJE_DESCUENTO = 0.10;

let totalFinal = totalPedido;

if (totalPedido >= MINIMO_DESCUENTO) {
  const descuento = totalPedido * PORCENTAJE_DESCUENTO;
  totalFinal = totalPedido - descuento;
  console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
}

console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
// Descuento aplicado: $15.00
// Total a pagar: $135.00

const stockDisponible = 3;
const UMBRAL_STOCK_BAJO = 5;

if (stockDisponible <= UMBRAL_STOCK_BAJO) {
  console.log(`⚠️ Stock bajo: quedan ${stockDisponible} platos. Reabastecer pronto.`);
}

const edadUsuario = 17;
const EDAD_MINIMA = 18;



if (edadUsuario < EDAD_MINIMA) {
  console.log("Acceso denegado: debes ser mayor de edad para ordenar bebidas alcoholicas.");
}

console.log("Pedido procesado.");
// Acceso denegado: debes ser mayor de edad para ordenar bebidas alcoholicas.
// Pedido procesado.


const monto_pedido = prompt("Monto del pedido ");
console.log(`Tu monto del pedido es, ${monto_pedido}!`);

if (monto_pedido > 100) {
    console.log("Aplica descuento por pedido grande");
}

const tiempo_espera = prompt("Tiempo de espera estimado ");
console.log(`El tiempo de espera estimado ${tiempo_espera} minutos!`);

if (tiempo_espera > 30) {
    console.log("Tiempo de espera excesivo");
}

const totalReservas = prompt("Ingrese el total de reservas para hoy: ");

if (totalReservas < 10) {
  console.log("Disponibilidad alta para reservas");
} else {
  console.log("Reservas limitadas");}