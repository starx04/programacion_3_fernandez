const prompt = require("prompt-sync")();
const clienteRegistrado = true;
const tipoCliente         = "regular";
const seccion            = "pedidos";

if (clienteRegistrado) {
  console.log(`Bienvenido. Tipo de cliente: ${tipoCliente}`);

  if (tipoCliente === "vip") {
    console.log("Acceso premium concedido.");

    if (seccion === "pedidos") {
      console.log("Cargando panel de pedidos especiales...");
    }
  } else if (tipoCliente === "regular") {
    console.log("Acceso estándar concedido.");

    if (seccion === "pedidos") {
      console.log("⛔ Clientes regulares no tienen acceso a pedidos especiales.");
    } else {
      console.log(`Cargando sección: ${seccion}`);
    }
  } else {
    console.log("Tipo de cliente desconocido. Contacta al administrador.");
  }

} else {
  console.log("Cliente no registrado. Redirigiendo al registro...");
}
// Bienvenido. Tipo de cliente: regular
// Acceso estándar concedido.
// ⛔ Clientes regulares no tienen acceso a pedidos especiales.

const nombreCliente    = "Ana";
const email     = "ana@correo.com";
const telefono  = "123";
const MIN_TELEFONO  = 9;

if (nombreCliente.trim().length === 0) {
  console.log("❌ El nombre es obligatorio.");
} else {
  console.log(`✅ Nombre válido: ${nombreCliente}`);

  if (!email.includes("@") || !email.includes(".")) {
    console.log("❌ El email no tiene un formato válido.");
  } else {
    console.log(`✅ Email válido: ${email}`);

    if (telefono.length < MIN_TELEFONO) {
      console.log(`❌ El teléfono debe tener al menos ${MIN_TELEFONO} dígitos.`);
      console.log(`   Dígitos actuales: ${telefono.length}`);
    } else {
      console.log("✅ Teléfono válido. Reserva completada.");
    }
  }
}
// ✅ Nombre válido: Ana
// ✅ Email válido: ana@correo.com
// ❌ El teléfono debe tener al menos 9 dígitos.
//    Dígitos actuales: 3

const categoriaPlato  = "carnes"; // "ensaladas", "carnes", "pastas"
const esMiembro  = true;
const precioBase = 200;

let precioFinal = precioBase;
let descuentoAplicado = "";

if (categoriaPlato === "carnes") {
  const impuesto = precioBase * 0.15;
  precioFinal = precioBase + impuesto;
  descuentoAplicado = "IVA 15% incluido";

  if (esMiembro) {
    const bonificacion = precioFinal * 0.05;
    precioFinal -= bonificacion;
    descuentoAplicado += " + 5% bonificación miembro";
  }

} else if (categoriaPlato === "ensaladas") {
  if (esMiembro) {
    precioFinal = precioBase * 0.80;  // 20% descuento
    descuentoAplicado = "20% descuento miembro";
  } else {
    precioFinal = precioBase * 0.90;  // 10% descuento saludable
    descuentoAplicado = "10% descuento saludable";
  }

} else if (categoriaPlato === "pastas") {
  precioFinal = precioBase;           // sin impuesto ni descuento
  descuentoAplicado = "Sin impuesto (plato tradicional)";
}

console.log(`Categoría:  ${categoriaPlato}`);
console.log(`Precio base: $${precioBase.toFixed(2)}`);
console.log(`Detalle:    ${descuentoAplicado}`);
console.log(`Precio final: $${precioFinal.toFixed(2)}`);
// Categoría:  carnes
// Precio base: $200.00
// Detalle:    IVA 15% incluido + 5% bonificación miembro
// Precio final: $218.50


const pedido_t = prompt("Ingrese el total del pedido");
const pedido = parseInt(pedido_t, 10);
const miembro= prompt("Es miembro del club gastronómico(S/N)");


if (pedido > 50) {
    console.log("Aplica descuento por pedido grande");
    if (miembro == "S") {
      console.log("Descuento especial para miembros.");
    } else {
        console.log(`Descuento normal para no miembros`);
    }
} else {
      console.log("No aplica descuento");
}


const edad = prompt("Edad del cliente: ");
const esEstudiante = prompt("¿Es estudiante? (s/n): ");

if (edad <= 25) {
  if (esEstudiante === "s") {
    console.log("Descuento estudiantil disponible");
  } else {
    console.log("Sin descuento estudiantil");
  }
} else {
  console.log("Cliente adulto");
}