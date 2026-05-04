const estadoReserva = "confirmada";

switch (estadoReserva) {
  case "pendiente":
    console.log("📋 Reserva registrada. En espera de confirmación de pago.");
    break;
  case "confirmada":
    console.log("✅ Pago confirmado. Preparando mesa.");
    break;
  case "en_curso":
    console.log("🍽️ Reserva en curso. Disfrutando de la comida.");
    break;
  case "completada":
    console.log("📦 Reserva completada. ¡Gracias por visitarnos!");
    break;
  case "cancelada":
    console.log("❌ Reserva cancelada. Reembolso procesado en 5-7 días.");
    break;
  default:
    console.log(`Estado desconocido: "${estadoReserva}". Contactar restaurante.`);
}
// 🍽️ Reserva en curso. Disfrutando de la comida.

const diaSemana = 3; // 1=Lunes ... 7=Domingo

switch (diaSemana) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Día laboral — horario de atención: 12:00 a 23:00");
    break;
  case 6:
    console.log("Sábado — horario especial: 12:00 a 24:00");
    break;
  case 7:
    console.log("Domingo — horario limitado: 13:00 a 22:00");
    break;
  default:
    console.log("Número de día no válido (usar 1-7)");
}
// Día laboral — horario de atención: 12:00 a 23:00

// Ejemplo: categorías de plato y su impuesto
const tipoPlato = "ensalada";
let tasaImpuesto;
let descripcionImpuesto;

switch (tipoPlato) {
  case "ensalada":
  case "bebida":
    tasaImpuesto        = 0;
    descripcionImpuesto = "Exento de impuesto";
    break;
  case "pasta":
  case "pescado":
    tasaImpuesto        = 0.05;
    descripcionImpuesto = "IVA reducido 5%";
    break;
  case "carne":
  case "postre":
    tasaImpuesto        = 0.15;
    descripcionImpuesto = "IVA estándar 15%";
    break;
  default:
    tasaImpuesto        = 0.15;
    descripcionImpuesto = "IVA estándar (categoría no especificada)";
}

const precioPlato = 80;
const impuesto       = precioPlato * tasaImpuesto;
console.log(`Plato: ${tipoPlato}`);
console.log(`${descripcionImpuesto}: $${impuesto.toFixed(2)}`);
console.log(`Precio final: $${(precioPlato + impuesto).toFixed(2)}`);
// Plato: ensalada
// Exento de impuesto: $0.00