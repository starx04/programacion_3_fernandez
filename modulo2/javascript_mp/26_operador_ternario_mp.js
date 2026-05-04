// Sintaxis: condicion ? valor_si_true : valor_si_false
const platosDisponibles = 8;
const estadoMenu = platosDisponibles > 0 ? "Disponible" : "Agotado";
console.log(`Estado del plato: ${estadoMenu}`);   // Estado del plato: Disponible

// Dentro de template literals — muy útil
const precioUnitario = 25.50;
const cantidadPlatos  = 3;
const totalPedido    = precioUnitario * cantidadPlatos;

console.log(`Pedido: ${cantidadPlatos} plato(s) x $${precioUnitario}`);
console.log(`Total: $${totalPedido.toFixed(2)}`);
console.log(`Propina incluida: ${totalPedido >= 50 ? "Sí ✅" : "No ❌ (mínimo $50)"}`);
// Pedido: 3 plato(s) x $25.50
// Total: $76.50
// Propina incluida: Sí ✅

// Asignación de estado de reserva
const mesasDisponibles = -2;
const estadoReserva = mesasDisponibles >= 0 ? "Disponible" : "Completo";
const colorAlerta  = mesasDisponibles >= 0 ? "verde" : "rojo";
console.log(`[${colorAlerta.toUpperCase()}] Reserva: ${estadoReserva}`);
// [ROJO] Reserva: Completo

// ❌ No anidar ternarios — difícil de leer y de mantener
const categoriaCliente = edad >= 65 ? "senior" : edad >= 18 ? "adulto" : "joven";

// ✅ Mejor usar if/else if para tres o más casos
let categoriaClienteClara;
if (edad >= 65) {
  categoriaClienteClara = "senior";
} else if (edad >= 18) {
  categoriaClienteClara = "adulto";
} else {
  categoriaClienteClara = "joven";