// menu_calculator.js
const prompt = require("prompt-sync")();

// Funciones puras para cada operación de menú
const calcularSubtotal = (precio, cantidad) => precio * cantidad;
const aplicarIVA       = (subtotal, iva = 0.21) => subtotal * (1 + iva);
const aplicarDescuento = (total, descuento = 0) => total * (1 - descuento);
const calcularPropina  = (total, porcentaje = 0.1) => total * porcentaje;

// Función que calcula el total de un pedido
function calcularTotalPedido(precio, cantidad, descuento = 0, incluirPropina = false) {
  const subtotal = calcularSubtotal(precio, cantidad);
  const conIVA = aplicarIVA(subtotal);
  const conDescuento = aplicarDescuento(conIVA, descuento);
  const propina = incluirPropina ? calcularPropina(conDescuento) : 0;
  return conDescuento + propina;
}

// Función para leer un precio válido
function leerPrecio(mensaje) {
  while (true) {
    const entrada = prompt(mensaje);
    const precio  = parseFloat(entrada);
    if (!isNaN(precio) && precio >= 0) return precio;
    console.log("Precio no válido, intenta de nuevo.");
  }
}

// Función para leer cantidad válida
function leerCantidad(mensaje) {
  while (true) {
    const entrada = prompt(mensaje);
    const cantidad  = parseInt(entrada);
    if (!isNaN(cantidad) && cantidad > 0) return cantidad;
    console.log("Cantidad no válida, intenta de nuevo.");
  }
}

// Programa principal
console.log("=== Calculadora de Pedidos de Restaurante ===");

const precio   = leerPrecio("Precio del plato: $");
const cantidad = leerCantidad("Cantidad: ");
const descuentoTexto = prompt("Descuento (0-1, ej: 0.1 para 10%): ");
const descuento = parseFloat(descuentoTexto) || 0;
const incluirPropina = prompt("¿Incluir propina? (s/n): ").toLowerCase() === 's';

const total = calcularTotalPedido(precio, cantidad, descuento, incluirPropina);