let tiempoEspera = 30
while(tiempoEspera>=0){
    console.log(`Tiempo restante: ${tiempoEspera} minutos`);
    tiempoEspera--;
}

// Ejemplo — procesamiento de cola de pedidos
const pedidosPendientes = [
  { id: "P001", prioridad: "alta",   plato: "Pasta urgente" },
  { id: "P002", prioridad: "media",  plato: "Pollo normal" },
  { id: "P003", prioridad: "baja",   plato: "Ensalada" },
  { id: "P004", prioridad: "alta",   plato: "Postre especial" },
];

let indice = 0;

console.log("=== Procesando cola de pedidos ===");

while (indice < pedidosPendientes.length) {
  const pedido = pedidosPendientes[indice];

  if (pedido.prioridad === "alta") {
    console.log(`🔴 [URGENTE] ${pedido.id}: ${pedido.plato}`);
  } else if (pedido.prioridad === "media") {
    console.log(`🟡 [NORMAL]  ${pedido.id}: ${pedido.plato}`);
  } else {
    console.log(`🟢 [BAJO]    ${pedido.id}: ${pedido.plato}`);
  }

  indice++;
}

console.log(`Total procesados: ${pedidosPendientes.length} pedidos`);
// 🔴 [URGENTE] P001: Pasta urgente
// 🟡 [NORMAL]  P002: Pollo normal
// 🟢 [BAJO]    P003: Ensalada
// 🔴 [URGENTE] P004: Postre especial
// Total procesados: 4 pedidos

// Ejemplo — acumulación de ventas hasta alcanzar meta de restaurante
const META_VENTAS   = 1000;
const ventasDiarias = [120, 85, 200, 310, 95, 250]; // registros de ventas
let totalAcumulado  = 0;
let diasTranscurridos = 0;

while (totalAcumulado < META_VENTAS && diasTranscurridos < ventasDiarias.length) {
  const ventaDelDia = ventasDiarias[diasTranscurridos];
  totalAcumulado   += ventaDelDia;
  diasTranscurridos++;

  console.log(`Día ${diasTranscurridos}: +$${ventaDelDia} → Acumulado: $${totalAcumulado}`);

  if (totalAcumulado >= META_VENTAS) {
    console.log(`🎯 ¡Meta de ventas alcanzada en ${diasTranscurridos} día(s)!`);
  }
}

if (totalAcumulado < META_VENTAS) {
  const faltante = META_VENTAS - totalAcumulado;
  console.log(`Meta no alcanzada. Faltan $${faltante.toFixed(2)}`);
}
// Día 1: +$120 → Acumulado: $120
// Día 2: +$85  → Acumulado: $205
// Día 3: +$200 → Acumulado: $405
// Día 4: +$310 → Acumulado: $715
// Día 5: +$95  → Acumulado: $810
// Día 6: +$250 → Acumulado: $1060
// 🎯 ¡Meta de ventas alcanzada en 6 día(s)!


//ejercicio en clase
//bucle de una tabla de multiplicar para menú
let i = 1;
let n = 5;
while (i <= 12) {
  console.log(`${n} porciones x ${i} = ${n * i} total`);
  i++;
}

// Ejemplo — sistema de reintentos de reserva
const MAX_REINTENTOS   = 3;
const TIMEOUT_SEGUNDOS = 2;
let reintentos         = 0;
let reservaExitosa    = false;

do {
  reintentos++;
  console.log(`Intento ${reintentos}/${MAX_REINTENTOS}: conectando con restaurante...`);

  // Simulación: la reserva falla en los primeros 2 intentos
  if (reintentos >= 3) {
    reservaExitosa = true;
  }

  if (!reservaExitosa && reintentos < MAX_REINTENTOS) {
    console.log(`  ⏳ Fallo. Reintentando en ${TIMEOUT_SEGUNDOS}s...`);
  }

} while (!reservaExitosa && reintentos < MAX_REINTENTOS);

if (reservaExitosa) {
  console.log("✅ Reserva establecida correctamente.");
} else {
  console.log("❌ No se pudo reservar. Intente más tarde.");
}
// Intento 1/3: conectando con restaurante...
//   ⏳ Fallo. Reintentando en 2s...
// Intento 2/3: conectando con restaurante...
//   ⏳ Fallo. Reintentando en 2s...
// Intento 3/3: conectando con restaurante...