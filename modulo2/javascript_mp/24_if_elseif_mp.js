const prompt = require("prompt-sync")();
const precioPlato = 28; // precio en euros

if (precioPlato >= 35) {
  console.log("💰 Plato premium. Precio elevado.");
} else if (precioPlato >= 25) {
  console.log("🍽️ Plato principal. Precio razonable.");
} else if (precioPlato >= 15) {
  console.log("🥗 Entrada. Precio accesible.");
} else if (precioPlato >= 5) {
  console.log("☕ Bebida. Precio económico.");
} else {
  console.log("❓ Precio inválido.");
}
// 🍽️ Plato principal. Precio razonable.

const pesoPedido = 4.5;
const TARIFA_LIGERO   = 2.50;
const TARIFA_MEDIANO  = 5.00;
const TARIFA_PESADO   = 9.00;
const TARIFA_ESPECIAL = 15.00;

let costoEnvio;
let categoriaPedido;

if (pesoPedido <= 1) {
  costoEnvio    = TARIFA_LIGERO;
  categoriaPedido = "Pedido ligero";
} else if (pesoPedido <= 5) {
  costoEnvio    = TARIFA_MEDIANO;
  categoriaPedido = "Pedido mediano";
} else if (pesoPedido <= 20) {
  costoEnvio    = TARIFA_PESADO;
  categoriaPedido = "Pedido pesado";
} else {
  costoEnvio    = TARIFA_ESPECIAL;
  categoriaPedido = "Pedido especial — requiere gestión manual";
}

console.log(`Pedido: ${pesoPedido} kg`);
console.log(`Categoría: ${categoriaPedido}`);
console.log(`Costo de envío: $${costoEnvio.toFixed(2)}`);
// Pedido: 4.5 kg
// Categoría: Pedido mediano
// Costo de envío: $5.00

const calificacionRestaurante = 78; // sobre 100

let categoriaCalificacion;
let recomendado;

if (calificacionRestaurante >= 90) {
  categoriaCalificacion = "⭐⭐⭐⭐⭐ Excelente";
  recomendado     = true;
} else if (calificacionRestaurante >= 80) {
  categoriaCalificacion = "⭐⭐⭐⭐ Muy bueno";
  recomendado     = true;
} else if (calificacionRestaurante >= 70) {
  categoriaCalificacion = "⭐⭐⭐ Bueno";
  recomendado     = true;
} else if (calificacionRestaurante >= 60) {
  categoriaCalificacion = "⭐⭐ Suficiente";
  recomendado     = true;
} else {
  categoriaCalificacion = "⭐ Reprobado";
  recomendado     = false;
}

console.log(`Calificación: ${calificacionRestaurante}/100`);
console.log(`Categoría: ${categoriaCalificacion}`);
console.log(`Recomendado: ${recomendado ? "Sí ✅" : "No ❌"}`);
// Calificación: 78/100
// Categoría: ⭐⭐⭐ Bueno
// Recomendado: Sí ✅


const tiempoEspera = prompt("Ingrese el tiempo de espera estimado");
if (tiempoEspera <= 15) {
    console.log("Espera corta.");
  } else if (tiempoEspera <= 45) {
    console.log("Espera media");
  } else {
    console.log("Espera larga");
  }


  const presupuesto_d = prompt("Ingrese su presupuesto");
  const presupuesto = parseFloat(presupuesto_d, 10);
if (presupuesto < 50) {
    console.log("Presupuesto bajo");
  } else if (presupuesto >= 50 && presupuesto <=150 ) {
    console.log("Presupuesto medio");
  } else {
    console.log("Presupuesto alto");
  }


  const dia_d = prompt("Ingrese el día de la semana para reserva");
  const dia = parseInt(dia_d, 10);
if (dia >= 1 &&  dia <= 5) {
    console.log("Día laboral - horario normal");
  } else if (dia == 6) {
    console.log("Sábado - horario extendido");
  } else if (dia == 7) {
    console.log("Domingo - horario limitado");
  }else {
    console.log("Día inválido");
  }