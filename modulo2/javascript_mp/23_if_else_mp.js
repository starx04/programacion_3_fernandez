const prompt = require("prompt-sync")();

const horaActual = 14; // hora en formato 24h

if (horaActual < 12) {
  console.log("Buenos días. Servicio de desayuno disponible.");
} else {
  console.log("Buenas tardes. Servicio de almuerzo/cena disponible.");
}
// Buenas tardes. Servicio de almuerzo/cena disponible.

const presupuestoCliente = 800;
const precioPedido = 200;
const PRESUPUESTO_MINIMO = 600;
const RATIO_PRECIO_MAXIMO = 0.4; // el pedido no debe superar el 40% del presupuesto

const ratioPrecio = precioPedido / presupuestoCliente;

if (presupuestoCliente >= PRESUPUESTO_MINIMO && ratioPrecio <= RATIO_PRECIO_MAXIMO) {
  console.log("Pedido aprobado.");
  console.log(`Ratio precio/presupuesto: ${(ratioPrecio * 100).toFixed(1)}%`);
} else {
  console.log("Pedido fuera de presupuesto.");
  console.log(`Presupuesto mínimo requerido: $${PRESUPUESTO_MINIMO}`);
  console.log(`Ratio precio actual: ${(ratioPrecio * 100).toFixed(1)}% (máximo permitido: 40%)`);
}
// Pedido aprobado.
// Ratio precio/presupuesto: 25.0%

const mesaIngresada = "5";
const mesaCorrecta  = "5";
let intentosFallidos      = 0;
const MAX_INTENTOS        = 3;

if (mesaIngresada === mesaCorrecta) {
  console.log("Mesa confirmada. Bienvenido.");
} else {
  intentosFallidos++;
  const intentosRestantes = MAX_INTENTOS - intentosFallidos;
  console.log(`Mesa incorrecta. Intentos restantes: ${intentosRestantes}`);
  console.log(`Intentos fallidos: ${intentosFallidos}`);
}
// Mesa confirmada. Bienvenido.

const edadTexto = prompt("Escribe tu edad: ");
const edad = parseInt(edadTexto, 10);

if (isNaN(edad)) {
  console.log("Eso no es un número válido.");
} else {
  console.log(`Tienes ${edad} años.`);
}

const total_pedidos = prompt("Cantidad de pedidos ");
const pedidos = parseInt(total_pedidos, 10);


if (pedidos >= 10) {
  console.log("Descuento por volumen aplicado");
} else {
  console.log("Sin descuento por volumen");
}

const t_mesa = prompt("Ingrese el número de mesa ");


if (t_mesa == 5) {
  console.log("Mesa disponible");
} else {
  console.log("Mesa ocupada");
}

const hora = prompt("Ingrese la hora de reserva ");


if (hora < 12) {
  console.log("Reserva para desayuno");
} else {
  console.log("Reserva para almuerzo/cena");
}