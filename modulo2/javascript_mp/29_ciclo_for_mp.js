console.log("=== Ciclo FOR en menú ===");
for (let i = 0; i < 5; i++) {
    console.log(`Pedido ${i + 1}`);
}
// Pedido 1
// Pedido 2
// Pedido 3
// Pedido 4
// Pedido 5

const platos = ["pasta", "pollo", "ensalada"];
for (let i = 0; i < platos.length; i++) {
    console.log(`Plato ${i + 1}: ${platos[i]}`);
}

for(let plato of platos) {
    console.log(`Plato: ${plato}`);
}

// Ejemplo — reporte de inventario de restaurante con alertas por posición
const inventario = [
  { codigo: "P01", nombre: "Pasta",  stock: 2  },
  { codigo: "P02", nombre: "Pollo",  stock: 15 },
  { codigo: "P03", nombre: "Ensalada",stock: 0  },
  { codigo: "P04", nombre: "Postre", stock: 7  },
  { codigo: "P05", nombre: "Bebida",  stock: 1  },
];

const STOCK_CRITICO = 3;

console.log("=== Reporte de inventario de restaurante ===");
console.log(`${"#".padEnd(4)} ${"Código".padEnd(6)} ${"Producto".padEnd(12)} Stock  Estado`);
console.log("─".repeat(48));

for (let i = 0; i < inventario.length; i++) {
  const item   = inventario[i];
  const numero = String(i + 1).padStart(2, "0");

  let estado;
  if (item.stock === 0) {
    estado = "🔴 AGOTADO";
  } else if (item.stock <= STOCK_CRITICO) {
    estado = "🟡 CRÍTICO";
  } else {
    estado = "🟢 Normal";
  }

  console.log(
    `${numero}.  ${item.codigo.padEnd(6)} ${item.nombre.padEnd(12)} ` +
    `${String(item.stock).padStart(3)}u   ${estado}`
  );
}
// ===  Reporte de inventario de restaurante ===
// #    Código Producto     Stock  Estado
// ────────────────────────────────────────────────
// 01.  P01    Pasta          2u   🟡 CRÍTICO
// 02.  P02    Pollo         15u   🟢 Normal
// 03.  P03    Ensalada       0u   🔴 AGOTADO
// 04.  P04    Postre         7u   🟢 Normal
// 05.  P05    Bebida         1u   🟡 CRÍTICO

// Ejemplo — tabla de pagos de reserva (bucle hacia atrás no recomendado
// aquí, pero sí recorrer con índice para cálculos financieros)
const montoReserva  = 1000;
const tasaMensual    = 0.02;    // 2% mensual
const numeroPagos   = 5;
const pagoMensual   = montoReserva / numeroPagos;

let saldoPendiente = montoReserva;

console.log("=== Tabla de pagos de reserva ===");
console.log(`Reserva: $${montoReserva} | Tasa: ${tasaMensual * 100}% mensual | Pagos: ${numeroPagos}`);
console.log("─".repeat(55));
console.log("Pago   Capital     Interés    Total       Saldo");
console.log("─".repeat(55));

for (let pago = 1; pago <= numeroPagos; pago++) {
  const interesMes  = saldoPendiente * tasaMensual;
  const totalPago  = pagoMensual + interesMes;
  saldoPendiente   -= pagoMensual;

  const estado = saldoPendiente <= 0 ? " ← Pagado" : "";

  console.log(
    `  ${String(pago).padStart(2)}     ` +
    `$${pagoMensual.toFixed(2).padStart(7)}  ` +
    `$${interesMes.toFixed(2).padStart(7)}  ` +
    `$${totalPago.toFixed(2).padStart(7)}  ` +
    `$${Math.max(0, saldoPendiente).toFixed(2).padStart(7)}${estado}`
  );
}
// === Tabla de pagos de reserva ===
// Reserva: $1000 | Tasa: 2% mensual | Pagos: 5
// ──────────────────────────────────────────────────────
// Pago   Capital     Interés    Total       Saldo
// ──────────────────────────────────────────────────────
//    1     $200.00    $20.00   $220.00   $800.00
//    2     $200.00    $16.00   $216.00   $600.00
//    3     $200.00    $12.00   $212.00   $400.00
//    4     $200.00     $8.00   $208.00   $200.00
//    5     $200.00     $4.00   $204.00     $0.00 ← Pagado

// Ejemplo — resumen de pedidos por mesero
const reportePedidos = [
  { mesero: "Carlos",  monto: 3200, turno: "mañana" },
  { mesero: "María",   monto: 4750, turno: "tarde"   },
  { mesero: "Luis",    monto: 2100, turno: "mañana" },
  { mesero: "Sofía",   monto: 5300, turno: "tarde"  },
  { mesero: "Roberto", monto: 1800, turno: "noche"  },
];

const META_INDIVIDUAL  = 3000;
let totalGeneral       = 0;
let meserosEnMeta   = 0;

console.log("=== Resumen de pedidos ===");

for (const pedido of reportePedidos) {
  totalGeneral += pedido.monto;

  const cumpleMeta = pedido.monto >= META_INDIVIDUAL;
  if (cumpleMeta) {
    meserosEnMeta++;
  }

  const indicador = cumpleMeta ? "✅" : "⚠️";
  console.log(
    `${indicador} ${pedido.mesero.padEnd(8)} ` +
    `[${pedido.turno.padEnd(7)}]  ` +
    `$${pedido.monto.toLocaleString()}`
  );
}

console.log("─".repeat(38));
console.log(`Total general:    $${totalGeneral.toLocaleString()}`);
console.log(`En meta (≥$${META_INDIVIDUAL}): ${meserosEnMeta}/${reportePedidos.length} meseros`);
// ✅ Carlos   [mañana]  $3,200
// ✅ María    [tarde ]  $4,750
// ⚠️ Luis     [mañana]  $2,100
// ✅ Sofía    [tarde ]  $5,300
// ⚠️ Roberto  [noche ]  $1,800
// ──────────────────────────────────────
// Total general:    $17,150
// En meta (≥$3000): 3/5 meseros

// Ejemplo — análisis de menú: contar ingredientes
const menuTexto      = "Pasta con salsa de tomate y albahaca fresca";
const VOCALES    = new Set(["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"]);
let conteoVocales    = 0;
let conteoConsonantes = 0;
let conteoEspacios    = 0;

for (const caracter of menuTexto.toLowerCase()) {
  if (caracter === " ") {
    conteoEspacios++;
  } else if (VOCALES.has(caracter)) {
    conteoVocales++;
  } else if (caracter >= "a" && caracter <= "z") {
    conteoConsonantes++;
  }
}

console.log(`Menú: "${menuTexto}"`);
console.log(`Vocales:     ${conteoVocales}`);
console.log(`Consonantes: ${conteoConsonantes}`);
console.log(`Espacios:    ${conteoEspacios}`);
console.log(`Total letras:${conteoVocales + conteoConsonantes}`);
// Menú: "Pasta con salsa de tomate y albahaca fresca"
// Vocales:     13
// Consonantes: 20
// Espacios:    6
// Total letras: 33

// Ejemplo — ranking de platos más pedidos
const platosTop = ["Pasta Carbonara", "Pollo con papas", "Ensalada César", "Pizza Margarita", "Tiramisu"];

console.log("=== Top 5 platos más pedidos ===");

for (const [posicion, plato] of platosTop.entries()) {
  const medalla =
    posicion === 0 ? "🥇" :
    posicion === 1 ? "🥈" :
    posicion === 2 ? "🥉" : `${posicion + 1}. `;

  console.log(`${medalla} ${plato}`);
}
// 🥇 Pasta Carbonara
// 🥈 Pollo con papas
// 🥉 Ensalada César
// 4.  Pizza Margarita
// 5.  Tiramisu

// Ejemplo — mostrar configuración de restaurante
const configuracionRestaurante = {
  nombre:       "La Trattoria",
  capacidad:    50,
  zonaHoraria:  "America/Buenos_Aires",
  formatoFecha: "DD/MM/YYYY",
  maxReservas:  20,
  modoOscuro:   false
};

console.log("=== Configuración actual del restaurante ===");

for (const clave in configuracionRestaurante) {
  const valor = configuracionRestaurante[clave];

  // Formatear booleanos para mejor legibilidad
  const valorMostrado = typeof valor === "boolean"
    ? (valor ? "Activado" : "Desactivado")
    : valor;

  console.log(`  ${clave.padEnd(14)}: ${valorMostrado}`);
}
// === Configuración actual del restaurante ===
//   nombre        : La Trattoria
//   capacidad     : 50
//   zonaHoraria   : America/Buenos_Aires
//   formatoFecha  : DD/MM/YYYY
//   maxReservas   : 20
//   modoOscuro    : Desactivado

// break — sale del bucle inmediatamente
// Ejemplo: buscar el primer plato con stock crítico
const platosMenu = [
  { nombre: "Pasta",    stock: 10 },
  { nombre: "Pollo",    stock: 4  },
  { nombre: "Ensalada", stock: 1  }, // ← primero con stock crítico
  { nombre: "Postre",   stock: 0  },
];

const STOCK_CRITICO = 2;

for (const plato of platosMenu) {
  if (plato.stock <= STOCK_CRITICO) {
    console.log(`⚠️ Primer plato crítico encontrado: ${plato.nombre} (stock: ${plato.stock})`);
    break; // no es necesario seguir buscando
  }
}
// ⚠️ Primer plato crítico encontrado: Ensalada (stock: 1)

// continue — salta a la siguiente iteración
// Ejemplo: procesar solo pedidos confirmados
const pedidos = [
  { id: "PED001", monto: 500,  estado: "confirmado"  },
  { id: "PED002", monto: 200,  estado: "cancelado" },
  { id: "PED003", monto: 850,  estado: "confirmado"  },
  { id: "PED004", monto: 120,  estado: "pendiente" },
  { id: "PED005", monto: 1200, estado: "confirmado"  },
];

let totalConfirmado = 0;

console.log("=== Procesando pedidos confirmados ===");

for (const pedido of pedidos) {
  if (pedido.estado !== "confirmado") {
    console.log(`  ↩️  ${pedido.id} omitido (${pedido.estado})`);
    continue; // saltar pedidos no confirmados
  }

  totalConfirmado += pedido.monto;
  console.log(`  ✅ ${pedido.id}: $${pedido.monto}`);
}

console.log(`Total confirmado: $${totalConfirmado}`);
// ✅ PED001: $500
// ↩️  PED002 omitido (cancelado)
// ✅ PED003: $850
// ↩️  PED004 omitido (pendiente)
// ✅ PED005: $1200
// Total confirmado: $2550