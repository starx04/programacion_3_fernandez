// menu.js
const prompt = require("prompt-sync")();

console.log("=== Calculadora de menú ===");

const precioTexto = prompt("Precio del plato: ");
const cantidadTexto = prompt("Cantidad: ");

const precio = parseFloat(precioTexto) || 0;
const cantidad = parseFloat(cantidadTexto) || 0;

const subtotal     = precio * cantidad;
const iva          = subtotal * 0.21;
const total        = subtotal + iva;
const descuento    = cantidad >= 3 ? total * 0.1 : 0;
const totalFinal   = total - descuento;

console.log(`
Pedido de ${cantidad} platos a $${precio} cada uno:
  Subtotal:   $${subtotal.toFixed(2)}
  IVA (21%):  $${iva.toFixed(2)}
  Total:      $${total.toFixed(2)}
  Descuento:  $${descuento.toFixed(2)}
  A pagar:    $${totalFinal.toFixed(2)}`);